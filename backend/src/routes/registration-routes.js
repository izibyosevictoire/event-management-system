const express = require('express');

const router = express.Router();
const User = require('../models/user.models');
const { RegisterController } = require('../controllers');

router.post('/',RegisterController.Register);

  module.exports = router;