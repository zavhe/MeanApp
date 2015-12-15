module.exports = function () {
	var controller = {};
	controller.portfolio = function (req, res) {
		res.render('portfolio.jade', { nome: 'Express Portfolio' });
	};
	return controller;
};