const express = require('express');
const app = express();
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function(req, res){
	let startDate = new Date(req.body.startDate);
	let startDateDay
	let endDate = new Date(startDate);
	let numberOfDays = req.body.numberOfDays;
	endDate.setDate(startDate.getDate() + numberOfDays); 

	let totalSaved = 0;

	const first7 = 0.05;
	const second7 = 0.1;
	const third7 = 0.15;
	const fourth7 = 0.2;
	const remainingDays = 0.25;

	for(let tempDate = startDate; tempDate < endDate; tempDate.setDate(startDate.getDate() + 1)) {
	    
	    if(tempDate.getDay() === 0 || tempDate.getDay() === 6) {
	      continue;
	    } else if(tempDate.getDate() < 8) {
	      totalSaved += first7;
	    } else if(tempDate.getDate() > 7 && tempDate.getDate() < 15) {
	      totalSaved += second7;
	    } else if(tempDate.getDate() > 14 && tempDate.getDate() < 22) {
	      totalSaved += third7;
	    } else if(tempDate.getDate() > 21 && tempDate.getDate() < 29) {
	      totalSaved += fourth7;
	    } else {
	      totalSaved += remainingDays;
	    }
	   
 	}
 	
 	res.send('$'+ totalSaved.toFixed(2));
})

app.listen(PORT, function() {
console.log("Server is running on port " + PORT);
})