var express = require('express'),
	path = require('path'),
	load = require('express-load');


	module.exports = function () {
		var app = express();

		app.use(express.static('./public'));

		app.set('port', 3000);
		app.set('content-type', 'text/html');
		app.set('view engine', 'jade');

		load('models')
		.then('controllers')
		.then('routes')
		.into(app);

		return app;
	};