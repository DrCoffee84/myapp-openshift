var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.setHeader('content-type', 'application/json');
    var respuesta = "{\"status\":\"healty\"}";
    res.send(respuesta);
});

module.exports = router;
