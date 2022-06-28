/************************************************************************
 * IMPORTS
 ************************************************************************/
const { findAll } = require('../../services/producto.services');
const responsesServices = require('../../responses/responses.services');

/************************************************************************
 * MESSAGES
 ************************************************************************/
 const { errorMessages, successMessages } = require("../../messages/es");

/************************************************************************
 * CONTROLLERS
 ************************************************************************/

exports.findAll = async (req, res) => {
    const result = await findAll();

    if (result.valid) {
        res.status(200).send(
            responsesServices.success((data=result.data), msg=successMessages.SUCCESS_FINDALL));
    } else {
        res.status(400).send(
            responsesServices.error((msg = errorMessages.ERROR_FIND)));
    }
};