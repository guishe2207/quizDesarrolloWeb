const express = require('express');
const router = express.Router();
const Producto = require('../models/Charla');

// CREATE
router.post('/', async (req, res) => {
  try {
    const nuevo = await Producto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - muestra los muebles en una vista EJS
router.get('/', async (req, res) => {
  try {
    const todos = await Producto.find();
    res.render('productos', { productos: todos });
  } catch (error) {
    res.status(500).send('Error al consultar los productos');
  }
});

// READ - datos en JSON
router.get('/api', async (req, res) => {
  try {
    const todos = await Producto.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    await Producto.updateOne({ _id: req.params.id }, req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Producto.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
