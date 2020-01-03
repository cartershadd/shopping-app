const functions = require('firebase-functions');
const sendgrid = require('sendgrid');
const sgMail = require('@sendgrid/mail');

// // Create and Deploy Your First Cloud Functions
// //
//

function getClient(key) {
    if (!key) {
        const error = new Error(
            'SendGrid API key not provided. Make sure you have a "sg_key" property in your request querystring'
        );
        error.code = 401;
        throw error;
    }

    // Using SendGrid's Node.js Library https://github.com/sendgrid/sendgrid-nodejs
    return sendgrid(key);
}

const getPayload = requestBody => {
    if (!requestBody.to) {
        const error = new Error(
            'To email address not provided. Make sure you have a "to" property in your request'
        );
        error.code = 400;
        throw error;
    } else if (!requestBody.attachments) {
        const error = new Error(
            'Email content not provided. Make sure you have an "attachments" property in your request'
        );
        error.code = 400;
        throw error;
    }

    return {
        personalizations: [
            {
                to: [
                    {
                        email: requestBody.to,
                    },
                ],
                subject: 'Checkout Email From Shopping Mockup',
            },
        ],
        from: {
            email: 'carter.shadden@gmail.com',
        },
        content: [
            {
                type: 'text/plain',
                value: 'Thank you for visiting the Shopping Mockup Shop. Here are your pictures!',
            },
        ],
        attachments: requestBody.attachments
    };
};


exports.sendEmail = functions.https.onRequest((request, response) => {
    // using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

    console.log('input email is ' + Object.keys(request.body));

    sgMail.setApiKey(functions.config().sendgrid.key);
    const msg = {
        to: request.body.to,
        from: 'carter.shadden@gmail.com',
        subject: 'Checkout Email From Shopping Mockup',
        text: 'Thank you for visiting the Shopping Mockup Shop. Here are your pictures!',
       // attachments: request.body.attachments,
    };
    sgMail.send(msg);
    response.set('Access-Control-Allow-Origin', '*');
    response.send("Hello from Firebase!");
});

exports.sendgridEmail = (req, res) => {
    return Promise.resolve()
        .then(() => {
            if (req.method !== 'POST') {
                const error = new Error('Only POST requests are accepted');
                error.code = 405;
                throw error;
            }

            // Get a SendGrid client
            const client = getClient(functions.config().sendgrid.key);

            // Build the SendGrid request to send email
            const request = client.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: getPayload(req.body),
            });

            // Make the request to SendGrid's API
            console.log(`Sending email to: ${req.body.to}`);
            return client.API(request);
        })
        .then(response => {
            if (response.statusCode < 200 || response.statusCode >= 400) {
                const error = Error(response.body);
                error.code = response.statusCode;
                throw error;
            }

            console.log(`Email sent to: ${req.body.to}`);

            // Forward the response back to the requester
            res.status(response.statusCode);
            if (response.headers['content-type']) {
                res.set('content-type', response.headers['content-type']);
            }
            if (response.headers['content-length']) {
                res.set('content-length', response.headers['content-length']);
            }
            if (response.body) {
                res.set('Access-Control-Allow-Origin', '*');
                res.send(response.body);
            } else {
                res.end();
            }
        })
        .catch(err => {
            console.error(err);
            const code =
                err.code || (err.response ? err.response.statusCode : 500) || 500;
            res.status(code).set('Access-Control-Allow-Origin', '*').send(err);
            return Promise.reject(err);
        });
};