
const jwt = require("jsonwebtoken")
const { User } = require("./userSxhema")

const validtoken = async (request,response,next)=>{
    try {
        const token= request.header("Authorization")
        //console.log(token)
        const tkk =token.split(" ")
        const token1 =tkk[1]

        const decoded = jwt.verify(token1,process.env.ACCESS_URL)
        console.log(decoded)
        const user = await User.findOne({_id:decoded._id})
        request.user = user 
        if(!decoded){
            return response.status(401).json({
                message:"Invalid Login"
            })
        }
        next()
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
    
}
















module.exports = validtoken




