const express = require('express');

const Users = require('../db/repo/users');

const router = express.Router();

router.get('/api/users', async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

module.exports = router;
