var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.getUser = (req, res) => {
    userModel.find({_id: ObjectId(req.params.userId)})
    .then((docs) => {
        if (docs.length == 0){
            res.sendStatus(404);
        } else {
            var user = docs[0];
            res.json(user);
        }
    })
}