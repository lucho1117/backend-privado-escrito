const {sequelize, Sequelize} = require('../utils/mysql.config');

const responsesServices = require('../responses/responses.services');
//definimos el modelo


exports.findAll = async () => {
	let query = `SELECT pro.idProducto, pro.nombre producto, c.Nombre categoria, PRO.nombre proveedor, pre.precio, pre.descripcion
				FROM Producto pro 
				INNER JOIN Categoria c on c.idCategoria = pro.idCategoria
				INNER JOIN Proveedor p on p.idProveedor = pro.idProveedor
				INNER JOIN Presentacion pre on pre.idProducto = pro.idProducto`;
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
  
