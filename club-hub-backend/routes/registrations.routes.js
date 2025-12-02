const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const { registerForEvent } = require('../controllers/registrations.controller');

router.post('/:id/register', auth, registerForEvent);

module.exports = router;
