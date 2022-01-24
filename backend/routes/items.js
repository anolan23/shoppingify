const express = require('express');

const Items = require('../db/repo/Items');

const router = express.Router();

router.get('/api/items', async (req, res) => {
  try {
    const items = await Items.find();
    res.send(items);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.post('/api/items', async (req, res) => {
  try {
    const { item } = req.body;
    const items = await Items.add(item);
    res.send(items);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.get('/api/items/search', async (req, res) => {
  try {
    const { q, limit } = req.query;
    const categories = await Items.search(q, limit);
    res.send(categories);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

module.exports = router;
