const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const roles = require('../middleware/roles');
const { createClub, listClubs, getClub } = require('../controllers/clubs.controller');

router.get('/', listClubs);
router.get('/:id', getClub);
router.post('/', auth, roles(['faculty','superadmin']), createClub);

module.exports = router;
