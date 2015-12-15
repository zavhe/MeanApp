var controller = require('../controllers/portfolio.js')();

module.exports = function (init) {
	init.get('/portfolio', controller.portfolio);
	init.get('/work', controller.portfolio);
}