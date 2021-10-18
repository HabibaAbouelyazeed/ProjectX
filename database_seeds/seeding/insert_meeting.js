const mongoose = require('mongoose');
const Meeting = require('../models/meeting');
const url = require('../../env_variables/env_vars.json').mongoosePort;

mongoose.connect(url)

var meetings = [

    new Meeting({
        _id: "616c6bc26e4ad1a5b5ec2602",
        discription: "First Meeting in the website",
        disabilityType: "Blind",
        dateAndTime: "2021-10-17T18:30:26.604Z",
        type: "Private",
        cancelled: false,
        attendees: []
    }),
    
    new Meeting({
        disabilityType: "deaf",
        dateAndTime: "July 4 2021 12:30",
        type: "Private"
    }),

    new Meeting({
        disabilityType: "deaf",
        dateAndTime: "April 10 2021 11:30",
        type: "Private"
    }),

    new Meeting({
        disabilityType: "blind",
        dateAndTime: "August 21 2021 12:00",
        type: "Private"
    }),
];

var counter = 0;
for (var i = 0; i < meetings.length; i++) {
    meetings[i].save((err, result) => {
        counter++;
        if (counter === meetings.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}