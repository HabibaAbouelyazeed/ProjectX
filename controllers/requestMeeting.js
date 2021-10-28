var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const meetingModel = require('../database_seeds/models/meeting');
const userModel = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.requestMeeting = (req, res) => {
    if (!req.body.disabilityType || !req.body.dateAndTime) {
        res.json({
            message: "Please, mention the disability type and the time"
        }); 
    } else {
        meetingModel.create({
            disabilityType: req.body.disabilityType, 
            type: "Private", 
            dateAndTime: req.body.dateAndTime,
            organiser: req.userId,
            attendees: [ObjectId(req.params.userId)]
        }).then((Meeting) => {
            userModel.updateOne({_id: ObjectId(req.params.userId)}, {$push: {requestedMeetings: Meeting._id}}, () => {
                userModel.updateOne({_id: ObjectId(req.userId)}, {$push: {createdMeetings: Meeting._id}}, () => {
                    res.json({
                    message: "Success"
                    }); 
                })
            })
        })
    }  
}