// Importamos express y creamos el router
const express = require('express');
const router = express.Router();
const Promocion = require('../models/Promocion');

/**
 * @route   GET /api/promociones
 * @desc    Obtener todas las promociones
 * @access  Público
 */
router.get('/', async (req, res) => {
  try {
    const promociones = await Promocion.find();
    res.json(promociones);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las promociones' });
  }
});

/**
 * @route   POST /api/promociones
 * @desc    Crear una nueva promoción
 * @access  Público (en producción debería ser autenticado)
 */
router.post('/', async (req, res) => {
  try {
    const nuevaPromo = new Promocion(req.body);
    await nuevaPromo.save();
    // Respondemos con la promoción creada
    res.status(201).json(nuevaPromo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la promoción' });
  }
});

/**
 * @route   DELETE /api/promociones/:id
 * @desc    Eliminar una promoción por ID
 * @access  Público (debería estar protegido)
 */
router.delete('/:id', async (req, res) => {
  try {
    // Eliminamos la promoción por su ID
    await Promocion.findByIdAndDelete(req.params.id);
    res.json({ message: 'Promoción eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la promoción' });
  }
});

module.exports = router;