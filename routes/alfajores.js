// Importamos Express y creamos un router
const express = require('express');
const router = express.Router();
const Alfajor = require('../models/Alfajor');

/**
 * @route   GET /api/alfajores
 * @desc    Obtener todos los alfajores
 * @access  Público
 */
router.get('/', async (req, res) => {
  try {
    // Buscar todos
    const alfajores = await Alfajor.find();
    res.json(alfajores);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los alfajores' });
  }
});

/**
 * @route   POST /api/alfajores
 * @desc    Crear un nuevo alfajor
 * @access  Público (debería ser privado en producción)
 */
router.post('/', async (req, res) => {
  try {
    const nuevoAlfajor = new Alfajor(req.body);
    await nuevoAlfajor.save();
    res.status(201).json(nuevoAlfajor);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el alfajor' });
  }
});

/**
 * @route   DELETE /api/alfajores/:id
 * @desc    Eliminar un alfajor por ID
 * @access  Público (debería ser privado en producción)
 */
router.delete('/:id', async (req, res) => {
  try {
    await Alfajor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Alfajor eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el alfajor' });
  }
});

// Exportamos el router para usarlo en server.js
module.exports = router;

