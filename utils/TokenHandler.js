const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
    
class TokenHandler {

    GenerateToken(userobj) {
        const payload = { user: userobj };
        const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
        const secret = process.env.JWT_SECRET;
        return jwt.sign(payload, secret, options);
    }
}

module.exports = TokenHandler;