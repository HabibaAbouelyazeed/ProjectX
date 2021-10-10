const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, default: "Normal"},
    gender: {type: String, required: true},
    phone: {type: String},
    address: {type: String},
    image: {type: String, reqired: false},
    activated: {type: Boolean, default: false},
    country: {type: String, default: 'none'},
    attendedMeetings: {type: Array, default: []},
    createdMeetings: {type: Array, default: []},
    children: [{
        childName: {type: String},
        childAge: {type: Number},
        childDisability: {type: String},
        childGender: {type: String}
    }]
})

module.exports = mongoose.model('User', schema);