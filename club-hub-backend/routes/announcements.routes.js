const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const { createAnnouncement, listAnnouncements } = require('../controllers/announcements.controller');

router.get('/', listAnnouncements);
router.post('/', auth, createAnnouncement);

module.exports = router;
