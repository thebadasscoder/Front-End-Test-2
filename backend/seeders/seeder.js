const userSeed = require('./user-seed');
const recipeSeed = require('./recipe-seed');
var db = require('../models')

db.sequelize.sync({force:true})
.then(()=>{
	userSeed();
})
.then(()=>{
	recipeSeed();
});
