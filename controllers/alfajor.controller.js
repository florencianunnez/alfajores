const service = require('../services/alfajor.service');

exports.getAll = async (req, res) => {
  try {
    const alfajores = await service.getAll();
    res.json(alfajores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alfajores' });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await service.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el alfajor' });
  }
};

exports.update = async (req, res) => {
  try {
    const actualizado = await service.update(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el alfajor' });
  }
};

exports.remove = async (req, res) => {
  try {
    await service.remove(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el alfajor' });
  }
};