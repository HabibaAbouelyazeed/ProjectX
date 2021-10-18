const express = require('express');
const mongoose = require('mongoose');
const Meeting = require('../database_seeds/models/meeting');

const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.createMeeting = (req , res) => {
    const meeting = new Meeting({
        _id: new mongoose.Types.ObjectId(),
        discription: req.body.discription,
        disabilityType: req.body.disabilityType,
        type: req.body.type,
        dateAndTime: new Date()
    });
    meeting.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: "HANDLING POST Request",
        createdMeeting: meeting 
    });
}
