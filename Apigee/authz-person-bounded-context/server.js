const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
    throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

app.use(cors());
app.use(morgan('dev'));

// helpers

const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});

// endpoints
app.get('/article', checkJwt, jwtAuthz(['read:article']), (req, res) => {
    let response = {
        "messageStatus": 200,
        "transactionId": "9832b962-babc-4b5c-a473-6308637b2ced",
        "message": {
            "content": {
                "title": "Providing Dietetic Care to Patients with Anorexia Nervosa",
                "skillTypeTitle": "Allied Health Skills",
                "contributors": {
                    "authors": [
                        "Caple, Carita, RN, BSN, MSHS"
                    ],
                    "editors": [
                        "Richman, Sharon, MSPT"
                    ],
                    "reviewers": [
                        "Danahy, Anne, RDN, MS"
                    ],
                    "pubDate": "April-26-2017"
                },
                "skillId": "an:dh:T916013",
                "isHidden": false,
                "isDha": false,
                "skillNote": {}
            }
        },
        "responseTime": 421
    };

    res.json(
        JSON.stringify(response)
    );
});

app.use((err, req, res, next) => {
    console.error(err.stack);
return res.status(err.status).json({ message: err.message });
});

const PORT = 8080;
app.listen(PORT);
console.log('Article Service');
console.log(`Listening on http://localhost:${PORT}`);