const express = require('express');
const { register, login } = require('../controllers/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
const { protect } = require('../middleware/auth');
module.exports = router;
