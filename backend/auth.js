const jwt = require('jsonwebtoken');
const SECRET = 'replace_this_with_a_secure_secret';

function generateToken(user) {
  // Stub: In production, use more user data and expiration settings.
  return jwt.sign({ user }, SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
