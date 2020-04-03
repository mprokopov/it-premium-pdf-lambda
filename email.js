const pdf = require('./generator.js');

exports.message = (req, pdf) => {
    return {
        to: req.customer.email,
        from: 'sales@it-premium.com.ua',
        subject: 'Quotation from IT-Premium',
        text: 'This is your quotation from IT-Premium by your request',
        html: '<strong>find our quotation in the email attached</strong>',
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
