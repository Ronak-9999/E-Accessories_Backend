const mailer = require("nodemailer")

const sendingMail = async (to,subject,text) => {
    const transporter = await mailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from:process.env.EMAIL_USER,
        to:to,
        subject:subject,
        //text:text
        html:text
    }

    const mailresponse = await transporter.sendMail(mailOptions)
    console.log(mailresponse);
    return mailresponse;

}

//sendingMail(process.env.EMAIL_USER,"WELCOME MAIL","This is Welcome mail of E-ACCESSORIES");
module.exports = {
    sendingMail
}