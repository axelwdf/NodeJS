const express = require('express');
const router = express.Router();

const {postUsers, getUsers} = require('../controllers/users.controller');
// post users
router.get('/', getUsers );

router.post('/', postUsers );

module.exports = { usersRouter: router };