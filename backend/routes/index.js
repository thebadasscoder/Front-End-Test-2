const router = require('express').Router();

router.use('/login', require('./user-router'));
router.use('/recipes', require('./recipe-router'));

module.exports = router; 
