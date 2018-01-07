const userRouter = require('express').Router();
const user = require('../models').User;

const loginUser = (req,res)=>{
	user.findById(req.params.id)
	.then((data)=>{
		res.send(200)
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

//The URL is at /api/recipes
//This is the route to get a single user from the database 
userRouter.route('/:id')
	.get(loginUser)


module.exports = userRouter;
