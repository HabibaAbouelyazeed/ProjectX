const mongoose = require('mongoose');
const User = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.searchUsers = (req, res) => {
    let arr;
    User.find({ email: req.body.email }, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("First function call : ", docs);
            arr=docs;
            res.status(201).json({
                message: "HANDLING POST Request",
                foundUser: arr 
            });
        }
    });
}