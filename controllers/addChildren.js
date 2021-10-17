const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user')
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const jwt = require('jsonwebtoken');
const KEY = require('../env_variables/env_vars.json').KEY;
const crypto = require('crypto');

mongoose.connect(mongoosePort)

module.exports.addChildren = (req, res,next) => {
    var tokenHeader = req.headers.authorization.split(' ')[1];
    try {
        token = jwt.verify(tokenHeader, KEY);
        var childName =  req.body.childName;    
        var childAge  =  req.body.childAge  ;  
        var childDisability = req.body.childDisability;
        var childGender = req.body.childGender ;  
        userModel.updateOne(
            { _id: token.user._id},
            { $addToSet: { children: [{
                childName: childName,
                childAge: childAge,
                childDisability: childDisability,
                childGender: childGender }] } },
            function(err, result) {
              if (err) {
                res.send(err);
              } else {
                res.send(result);
              }
            } );
    } catch (error) {
        res.json(error)
    }
}