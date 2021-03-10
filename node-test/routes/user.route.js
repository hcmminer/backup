var express = require('express');
var multer  = require('multer');

var router = express.Router();
var upload = multer({ dest: './public/uploads/' });

var controller = require('../controllers/user.controller');

var validate = require('../validate/user.validate');

// var authMiddleware = require('../middlewares/auth.middleware');

router.get('/',controller.index);

router.get('/cookie',(req,res,next) => {
    res.cookie('user-id', 12345);
    res.send('Hi !');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id',controller.view);

router.post('/create', upload.single('avatar'),validate.postCreate ,controller.postCreate);

module.exports = router;