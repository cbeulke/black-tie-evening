var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var fs = require('fs');
var guests = JSON.parse(fs.readFileSync(__dirname + '/../guests.json'));

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'cbeulke@gmail.com',
		pass: '02gSo25i'
	}
});

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/code', function(req, res) {
	var code = req.body.code;
	var name = req.body.name;

	var result = guests.filter(function(guest) {
		return guest.name == name && guest.code == code;
	});

	if(result.length > 0) {
		res.status(200);
		res.send('success');
	} else {
		res.status(404);
		res.send('invalid code');
	}
});

router.post('/name', function(req, res) {
	var sendMail = function(guest, callback) {
		var mailOptions = {
			from: "Christian Beulke <mail@beulke.net>",
			to: guest.name + "<" + guest.email + ">",
			subject: "Zugangscode Black Tie Evening",
			text: guest.code
		};
		transporter.sendMail(mailOptions, callback);
	};

	var sendMailCallback = function(error, info) {
		if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	        // res.status(200);
	        // res.send('success');
	    }
	};

	var name = req.body.name;
	var result = guests.filter(function(guest) {
		return guest.name == name;
	});

	if(result.length > 0) {
		// sendMail(result[0], sendMailCallback);
		res.status(200);
		res.send('success');
		
	} else {
		res.status(404);
		res.send('invalid name');	
	}
});

module.exports = router;
