const {sequelize, Sequelize} = require('../utils/mysql.config');

const responsesServices = require('../responses/responses.services');
//definimos el modelo


exports.findAll = async () => {
	let query = `SELECT * FROM Producto`;
		return sequelize
		.query(query, {
		type: Sequelize.QueryTypes.SELECT,
		})
		.then((response) => {
		return responsesServices.success(response);
		})
		.catch((error) => {
		console.log(error);
		return responsesServices.error(error.message);
		});
}
  
