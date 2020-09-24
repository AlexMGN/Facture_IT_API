const jwt = require('jsonwebtoken');

const generateAccessToken = async (user, type) => {
    return jwt.sign({ type: type, email: user.email }, process.env.JWT_ENCRYPTION);
}

module.exports = {
    generateAccessToken
};