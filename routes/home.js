var controller = require('../controllers/home.js')();

module.exports = function (app) {
	app.get('/index', controller.index);
	app.get('/', controller.index);
};