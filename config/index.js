var express = require('express'),
	path = require('path'),
	home = require('../routes/home.js'),
	work = require('../routes/portfolio.js');

	module.exports = function () {
		var app = express();

		app.use(express.static('./public'));

		app.set('port', 3000);
		app.set('content-type', 'text/html');
		app.set('view engine', 'jade');

		home(app);
		work(app);

		return app;
	};