const markup = require('./markup');
const pdf = require('./generator');
const sgMail = require('@sendgrid/mail');
const mail = require('./email');
const util = require('util');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler =  function(event, context, callback) {
    let body = JSON.parse(event.body);

    pdf.generatePdf(markup.docPattern(body), (content) => {
        sgMail.send(mail.message(body, content))
            .then(() => {
            }, console.error);

        callback(null, {
            statusCode: 200,
            headers: {
                'Content-type' : 'application/json',
                'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
                'Access-Control-Allow-Credentials' : true
            },
            body: JSON.stringify({ msg: 'Successfully sent'})
        });
    });
};
