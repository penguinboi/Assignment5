var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname));
// Create our Express-powered HTTP server
app.listen(3000, function () {
});
// set up our routes
var wins = 0;
var loses = 0;

app.post('/flip', function(req,res){
	console.log(req);
	if(randomInt(1,2) == 1){
		res.json({"result": "win"});
	}
	else{
		res.json({"result": "win"});
	}	
});

app.get('/stats', function(req,res){
	console.log('stats');
});

//Logic from https://blog.tompawlak.org/generate-random-values-nodejs-javascript
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}