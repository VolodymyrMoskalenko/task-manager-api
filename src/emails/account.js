const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => { 
    sgMail.send({
        to: email,
        from: 'panmed23@gmail.com',
        subject: 'Thanks for joining my Task App',
        text: `Welcome to the app ${name}. Keep me in touch with your suggestions about my program`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'panmed23@gmail.com',
        subject: 'Cancelation using Task App',
        text: `Hi ${name}, we will miss you. Feel free to send us your suggestions, ideas or regrets.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}