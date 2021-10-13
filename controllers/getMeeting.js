var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const meetingModel = require('../database_seeds/models/meeting')
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.getMeeting = (req, res) => {
    meetingModel.find({_id: ObjectId(req.params.meetingId)})
    .then((docs) => {
        if (docs.length == 0){
            if (err) {
                res.sendStatus(404);
            }
        } else {
            var meeting = docs[0];
            res.json(meeting);
        }
    })
}