


const nodemailer = require("nodemailer")
const dotenv = require("dotenv").config()

const senduserEmail = async(useremail)=>{
    const mailTransporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:`${process.env.Email}`,
            pass:`${process.env.Email_PASS}`

        }
    })


const detailtosend = {
    from:`${process.env.Email}`,
    to:useremail,
    subject :"Welcome TO RECIPE APP",
    html: "<h1>Hello welcome Onboard</h1>"
}




try {
    const result = await mailTransporter.sendMail(detailtosend)
} catch (error) {
    
}
}

module.exports = senduserEmail








