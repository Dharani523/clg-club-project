const jwt = require('jsonwebtoken');

function generateTokenForEvent(eventId, expiresIn = '8h') {
  const payload = { eventId, timestamp: Date.now() };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
}

module.exports = { generateTokenForEvent, verifyToken };
