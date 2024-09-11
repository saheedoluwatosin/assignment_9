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


const recipe = mongoose.Schema({

    title:{type:String, require:true},
    authorid:{type: mongoose.Schema.Types.ObjectId, ref: User, require:true },
    ingredients : {type:String, require:true},
    instruction : {type:String},
    categories : {type:String , require:true}

},{
    timestamps:true
})

const Recipe = mongoose.model("recipe",recipe)


module.exports = {
    User,
    Recipe
}






