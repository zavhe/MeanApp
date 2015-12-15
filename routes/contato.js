var controller = require('../controllers/contato.js');

module.exports = function (app) {
	app.get('/contatos', controller.contato);
};