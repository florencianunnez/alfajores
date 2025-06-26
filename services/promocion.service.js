const Promocion = require('../models/Promocion');

exports.getAll = async () => {
  return await Promocion.find();
};

exports.create = async (data) => {
  const nuevaPromocion = new Promocion(data);
  return await nuevaPromocion.save();
};

exports.update = async (id, data) => {
  return await Promocion.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Promocion.findByIdAndDelete(id);
};