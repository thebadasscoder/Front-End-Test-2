'use strict'

const User = require('../models').User;

let userArr = [
	{
		email_address: 'janedoe@gmail.com',
		password: 'tacotuesdays'

	}

]
const userSeed = () =>{
	User.bulkCreate(userArr)
};

module.exports = userSeed;
