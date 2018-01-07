const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
const db = require('./backend/models')


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use(express.static(__dirname));

app.use('/api', require('./backend/routes'));

app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelize.sync().then(()=>{
	app.listen(2020, ()=> console.log('Server running on Port 2020!!'))
})

module.exports = app;
