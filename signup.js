const mongoose = require('mongoose');
const userModel = require('../database_seeds/models/user')
const url = require('../env_variables/env_vars.json').mongoosePort;
const crypto = require('crypto');

mongoose.connect(url)

module.exports.signup = (req, res) => {
    var email =req.body.email;
    //hash password
    var shasum = crypto.createHash('sha1');
    shasum.update(req.body.password);
    var passwordHash = shasum.digest('hex');
    var name = req.body.name;
    var type = req.body.type;
    var gender = req.body.gender;
    var phone =req.body.phone;
    var address = req.body.address;
    var image = req.body.image;
    var country = req.body.country;
    var childName =  req.body.childName;    
    var childAge  =  req.body.childAge  ;  
    var childDisability = req.body.childDisability;
    var childGender = req.body.childGender ;  
    userModel.find({"email":email})
    .then((docs) => {
        if (docs.length > 0){
            res.json({status:"error",error:"Email already exists"})   
    }
    else{
        var data = [
            userModel.create({
           "email":email,
           "password": passwordHash,
           "name": name,
           "type":type,
           "gender":gender,
           "phone":phone ,
           "address":address,
           "image": image ,
           "country": country,
           "children": [{
               "childName": childName,
               "childAge": childAge,
               "childDisability": childDisability,
               "childGender": childGender }]
                      }),];
        res.json("User Created Successfuly")
    }
})            
}