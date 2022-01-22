const express = require('express');

const Categories = require('../db/repo/Categories');

const router = express.Router();

router.get('/api/categories', async (req, res) => {
  try {
    const categories = await Categories.find();
    res.send(categories);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

router.post('/api/categories', async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Categories.add(name);
    res.send(category);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});



router.get('/api/categories/search', async (req, res) => {
  try {
    const { q, limit } = req.query;
    const categories = await Categories.search(q, limit);
    res.send(categories);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

module.exports = router;
