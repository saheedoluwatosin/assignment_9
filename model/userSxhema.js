const mongoose = require("mongoose")



const user = mongoose.Schema({
    firstName: {type: String , require:true},
    lastName:{type:String , require:true},
    email:{type:String , require : true},
    username:{type:String, require : true},
    password: {type: String , require:true},
    favourite_cuisines:{type : String , require:true}
},
{
    timestamps:true
})

const User = mongoose.model("user",user)


module.exports = {
    User
}






