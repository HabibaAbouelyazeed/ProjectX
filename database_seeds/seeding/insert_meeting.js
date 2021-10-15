const mongoose = require('mongoose');
const Meeting = require('../models/meeting');
const url = require('../../env_variables/env_vars.json').mongoosePort;

mongoose.connect(url)

var meetings = [

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