const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key';
const servicesOauth2TokenPOST = (req, res) => {
    const { grant_type, assertion } = req.body;

    if (!grant_type || !assertion) {
        return res.status(400).json({
            error: 'Thiếu grant_type hoặc assertion',
        });
    }

    const payload = { grant_type, assertion };
    const access_token = jwt.sign(payload, 'secret', { expiresIn: '1h' });

    const response = {
        payload,
        access_token,
        instance_url: 'https://test.salesforce.com'
    };

    return res.status(200).json(response);
};

module.exports = { servicesOauth2TokenPOST };
