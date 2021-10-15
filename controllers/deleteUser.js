var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.deleteUser = (req, res) => {
    if (req.userType == "Admin") {
        userModel.findOneAndDelete({_id: ObjectId(req.params.userId)})
        .then((user) => {
            res.json({message: "Deleted"})
        }) 
    } 
    else {
        res.sendStatus(403);
    }
}