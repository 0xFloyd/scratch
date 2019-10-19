var nodemailer = require('nodemailer');         // email 

let transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: 'rmfloyd7@yahoo.com',
        pass: 'Simonown$1'
    }
});

let mailOptions = {
    from: 'rmfloyd7@yahoo.com',
    to: 'rmfloyd7@yahoo.com',
    subject: 'Node test email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent' + info.response);
    }
});