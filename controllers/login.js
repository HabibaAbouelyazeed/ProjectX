const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user');
const jwt = require('jsonwebtoken');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const KEY = require('../env_variables/env_vars.json').KEY;
const crypto = require('crypto');

mongoose.connect(mongoosePort)

module.exports.login = (req, res) => {
    var enteredData = req.body;
    var shasum = crypto.createHash('sha1');
    shasum.update(req.body.password);
    var passwordHash = shasum.digest('hex');
    userModel.find({email: enteredData.email, password: passwordHash})
    .then((docs) => {
        if (docs.length == 0){
                res.sendStatus(404);
        } else {
            var user = docs[0];
            jwt.sign({user}, KEY, {expiresIn: '2h'}, (err, token) => {
                res.json(token)
            })
        }
    })
}