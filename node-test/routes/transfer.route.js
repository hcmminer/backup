var express = require('express');
const csurf = require('csurf');
const protect = csurf({cookie: true});


var controller = require('../controllers/transfer.controller');

var router = express.Router();

router.get('/create', protect,controller.create);
router.post('/create',protect, controller.postCreate);

module.exports = router;