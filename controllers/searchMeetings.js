var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const Meeting = require('../database_seeds/models/meeting');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.searchMeetings = (req, res) => {
    let arr;
    Meeting.find({ disabilityType: req.body.disabilityType }, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            res.send
            console.log("First function call : ", docs);
            arr=docs;
            res.status(201).json({
                message: "HANDLING POST Request",
                createdMeeting: arr 
            });
        }
    });
}