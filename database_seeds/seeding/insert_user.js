const mongoose = require('mongoose');
const User = require('../models/user')
const url = require('../../env_variables/env_vars.json').mongoosePort;

mongoose.connect(url)

var users = [

    //Organisers
    new User({
        email: "test1@organiser.meetup",
        password: "123",
        activated : true,
        name: "Organiser1",
        type: "Organiser",
        gender: "Male",
        phone: "unknown"
    }),
    
    new User({
        email: "test2@organiser.meetup",
        password: "1234",
        activated : true,
        name: "Organiser2",
        type: "Organiser",
        gender: "Male",
        phone: "unknown"
    }),

    //Parents
    new User({
        email: "test1@parent.meetup",
        password: "123",
        activated : true,
        name: "Parent1",
        type: "Normal",
        gender: "Male",
        phone: "unknown",
        children: [{
            childName: "Child1",
            childAge: 7,
            childDisability: "deaf",
            childGender: "Male"
        },
        {
            childName: "Child2",
            childAge: 10,
            childDisability: "deaf",
            childGender: "Male"
        }]
    }),

    new User({
        email: "test2@parent.meetup",
        password: "123",
        activated : true,
        name: "Parent2",
        type: "Normal",
        gender: "Male",
        phone: "unknown",
        children: [{
            childName: "Child2",
            childAge: 9,
            childDisability: "blind",
            childGender: "Female"
        }]
    }),

    //Admins
    new User({
        email: "test1@admin.meetup",
        password: "123",
        activated : true,
        name: "Admin1",
        type: "Admin",
        gender: "Male",
        phone: "unknown"
    }),

    new User({
        email: "test2@admin.meetup",
        password: "123",
        activated : true,
        name: "admin2",
        type: "Admin",
        gender: "Male",
        phone: "unknown"
    })
];

var counter = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save((err, result) => {
        counter++;
        if (counter === users.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}