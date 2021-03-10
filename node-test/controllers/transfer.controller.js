const db = require("../db");
const { nanoid } = require("nanoid");

module.exports.create = (req,res,next) => {
    res.render('transfer/create',{ 
        csrfToken: req.csrfToken() 
    });
}

module.exports.postCreate = (req,res,next) => {
    const data = {
        id: nanoid(),
        account: req.body.account,
        amount: parseInt(req.body.amount),
        userId: req.signedCookies.userId
    };
    db.get('transfers').push(data).write();
    res.redirect('/transfer/create');
}


