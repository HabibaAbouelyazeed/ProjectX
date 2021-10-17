var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const meetingModel = require('../database_seeds/models/meeting');
const userModel = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.getAllMeetings = (req, res) => {
    userModel.find({_id: req.userId})
    .then((docs) => {
        if (docs.length == 0){
            res.sendStatus(404);
        } else {
            var user = docs[0]
            var reqMeetings = user.requestedMeetings;
            var createdMeetings = user.createdMeetings;
            var arr = reqMeetings.concat(createdMeetings);
            meetingModel.find({ $or: [{_id:{ $in: arr}}, {type: "Public"}]}).then((allMeetings) => {
                res.send(allMeetings);
            });
        }
    })
}