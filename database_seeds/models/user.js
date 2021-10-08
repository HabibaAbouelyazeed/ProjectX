const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, default: "Normal"},
    gender: {type: String, required: true},
    phone: {type: String},
    image: {type: String, reqired: false},
    activated: {type: Boolean, default: false},
    country: {type: String, default: 'none'},
    childName: {type: String, required: true},
    childAge: {type: Number, required: true},
    childDisability: {type: String, required: true},
    childGender: {type: String, required: true},
    attendedMeetings: {type: Array, default: []}
})

module.exports = mongoose.model('User', schema);