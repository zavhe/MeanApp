var http = require('http'),
	app = require('./config/index')();

	http.createServer(app).listen(app.get('port'), function () { 
		console.log('Express Server Listening at port ' + app.get('port'));
	});