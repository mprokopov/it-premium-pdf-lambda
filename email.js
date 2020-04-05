const pdf = require('./generator.js');

exports.message = (req, pdf) => {
    return {
        to: req.customer.email,
        from: 'sales@it-premium.com.ua',
        subject: req.email.title,
        text: req.email.body,
        html: req.email.body,
        attachments: [
            {
                content: pdf.toString('base64'),
                filename: 'proposal.pdf',
                type: 'application/pdf',
                disposition: 'attachment',
                contentId: 'proposal'
            },
        ],
    };
};
