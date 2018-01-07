const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server.js');
const Recipe = require('../backend/models').Recipe;
const seed = require('../backend/seeders/recipe-seed'); //Recipe seed data 

describe('Recipe tests', ()=>{
	beforeEach((done)=>{
		Recipe.sequelize.sync({force:true}).then(()=>{
				seed();
				done();
		})
	})
});

it(`'getAllRecipes()' should return all the recipes from the database`, (done)=>{
	supertest(server) 
	.get('/api/recipes')
	.end((err,res)=>{
		expect(res.body).to.be.a('array') //an object is array-like
		expect(200); //http message of OK after obtaining data
		expect(res.body.length).to.eql(6); //number of elements within the array
		expect(res.body[0]).to.include.all.keys(['name', 'products', 'description', 'proteins','rating', 'ratings', 'deliverable_ingredients','country', 'fats', 'fibers', 'highlighted','recipe_id','incompatiabilites', 'keyword', 'thumb', 'time', 'undeliverable_ingredients', 'weeks', 'calories', 'carbos', 'difficulty', 'favorites', 'headline', 'image', 'ingredients'])
		done();
	})
});
