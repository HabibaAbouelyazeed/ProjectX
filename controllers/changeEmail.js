const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user')
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const jwt = require('jsonwebtoken');
const KEY = require('../env_variables/env_vars.json').KEY;
const crypto = require('crypto');

mongoose.connect(mongoosePort)

module.exports.changeEmail = (req, res,next) => {
    var tokenHeader = req.headers.authorization.split(' ')[1];
    try {
        token = jwt.verify(tokenHeader, KEY);
        email = req.body.email;
        userModel.find({"email":email})
        .then((docs) => {
        if (docs.length > 0){
            res.json({status:"error",error:"Email already exists"})   
         }
        else{
            userModel.updateOne({_id: token.user._id}, {email: email },function(err){
            if (err) throw err;
            res.json("Email Updated Successfuly")
         next();});}
        })
        
    } catch (error) {
        res.json(error)
    }
}