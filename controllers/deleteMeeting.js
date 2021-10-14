var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const meetingModel = require('../database_seeds/models/user')
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.deleteMeeting = (req, res) => {
    if (req.userType == "Admin") {
        meetingModel.findOneAndDelete({_id: ObjectId(req.params.meetingId)})
        .then((meeting) => {
            res.json({message: "Deleted"})
        }) 
    } 
    else {
        res.json({
            message: "Not Allowed"
        })
    }
}