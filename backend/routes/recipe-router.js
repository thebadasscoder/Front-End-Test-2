//Importing Recipe Model 
const recipeRouter = require('express').Router();
const recipe = require('../models').Recipe;

//This is where I am getting all of the data from the recipe model 
//once recieved, it will send me back the data as one big object
//if not, it will send me an http error message.
const getAllRecipes = (req,res)=>{
	recipe.findAll()
	.then((data)=>{
		res.send(data);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


//The URL is at /api/recipes
//This is the route to get all the recipes from the database 
recipeRouter.route('/')
	.get(getAllRecipes)


module.exports = recipeRouter;
