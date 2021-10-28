const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user')
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const jwt = require('jsonwebtoken');
const KEY = require('../env_variables/env_vars.json').KEY;
const crypto = require('crypto');

mongoose.connect(mongoosePort)

module.exports.changePassword = (req, res,next) => {
    
    var shasum = crypto.createHash('sha1');
    shasum.update(req.body.password);
    var newPasswordHash = shasum.digest('hex');
    var tokenHeader = req.headers.authorization.split(' ')[1];
    try {
        token = jwt.verify(tokenHeader, KEY);
        userModel.updateOne({_id: token.user._id}, {password: newPasswordHash },function(err){
            if (err) throw err;
            res.json("Password Updated Successfuly")
         next();});
        
    } catch (error) {
        res.json(error)
    }
}