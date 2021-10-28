const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user')
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const jwt = require('jsonwebtoken');
const KEY = require('../env_variables/env_vars.json').KEY;

mongoose.connect(mongoosePort)

module.exports.changeUsername = (req, res,next) => {
    
    
    var tokenHeader = req.headers.authorization.split(' ')[1];
    try {
        token = jwt.verify(tokenHeader, KEY);
        userModel.findOneAndUpdate({_id: token.user._id}, {name: req.body.name },function(err){
            if (err) throw err;
            res.json("Username Updated Successfuly")
         next();
        });
        
    } catch (error) {
        res.json(error)
    }
}