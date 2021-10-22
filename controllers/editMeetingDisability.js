var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user');
const meetingModel = require('../database_seeds/models/meeting');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;

mongoose.connect(mongoosePort)

module.exports.editMeetingDisability = (req, res,next) => {
    if (req.userType !== "Visitor") {
        meetingModel.find({_id: ObjectId(req.params.meetingId)})
        .then((docs) => {
        if (docs.length == 0){
            res.sendStatus(404);
        } else {
            var meeting = docs[0];
            var meetingIsJoined = false;
            var string1 = '1';
            var string2 = '2';
            var comparison = 10;
            for (i = 0; i < meeting.attendees.length; i++) {
            string1 = (meeting.attendees[i]).toString();
            string2 = (req.userId).toString();
            comparison = string1.localeCompare(string2);
            if (comparison === 0) {
                meetingIsJoined = true;
                try{
                    meetingModel.findOneAndUpdate({_id: req.params.meetingId}, {disabilityType: req.body.disability },function(err){
                        if (err) throw err;
                        res.json("Disability Updated Successfuly")
                     next();
                    });
                    
                } catch (error) {
                    res.json(error)
                }
            };
        };
        if (!meetingIsJoined) {
            res.json("You Must Join First")
        }
        
    }
    })
}
    


};