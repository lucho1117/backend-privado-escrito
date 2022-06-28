const express = require("express");

const app = express.Router();

const productoController = require("../controllers/productos/productos.controller");

app.get("/", function (req, res) {
    res.status(200)
        .send(
            "INICIO"
        );
});

module.exports = app;

/** ----------EMPLEADO ----------- */
app.get("/producto/list", productoController.findAll);
