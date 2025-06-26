const service = require('../services/promocion.service');

exports.getAll = async (req, res) => {
  try {
    const promociones = await service.getAll();
    res.json(promociones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las promociones' });
  }
};

exports.create = async (req, res) => {
  try {
    const nueva = await service.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la promoción' });
  }
};

exports.update = async (req, res) => {
  try {
    const actualizada = await service.update(req.params.id, req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la promoción' });
  }
};

exports.remove = async (req, res) => {
  try {
    await service.remove(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la promoción' });
  }
};