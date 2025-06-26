const Alfajor = require('../models/Alfajor');

exports.getAll = () => Alfajor.find();
exports.create = (data) => Alfajor.create(data);
exports.update = (id, data) => Alfajor.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Alfajor.findByIdAndDelete(id);
