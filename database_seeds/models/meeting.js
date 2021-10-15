const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    discription: {type: String},
    disabilityType: {type: String, required: true},
    dateAndTime: {type: Date, required: true},
    type: {type: String, required: true, default: "Private"},
    cancelled: {type: Boolean, default: false},
    organiser: {type: mongoose.Schema.Types.ObjectId},
    attendees: [{type: mongoose.Schema.Types.ObjectId}]
})

module.exports = mongoose.model('Meeting', schema);