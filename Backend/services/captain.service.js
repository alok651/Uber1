const captainModel = require('../models/captain.model');



module.exports.createCaptain = async (req,res) => ({
Firstname,lastname,email,password,
color,plate,capacity,vehicleType
}) => {
    if(!Firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
       throw new Error('Please fill in all fields');
    }
    const captain = captainModel.create({
        fullname:{
        Firstname,
        lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        }
    })
return captain;
}