const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const { createEvent, listEvents, getEvent, generateAttendanceQR, verifyAttendance } = require('../controllers/events.controller');

router.get('/', listEvents);
router.get('/:id', getEvent);
router.post('/', auth, createEvent);

// QR endpoints
router.post('/:id/generate-qr', auth, generateAttendanceQR); // restrict with roles if needed
router.post('/:id/attendance', auth, verifyAttendance);

module.exports = router;
