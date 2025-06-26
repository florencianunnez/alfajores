const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const promocionRoutes = require('./routes/promocion.routes');
const alfajorRoutes = require('./routes/alfajor.routes');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/capricho_alfajores')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

app.use(cors());
app.use(express.json());

app.use('/api/promociones', promocionRoutes);
app.use('/api/alfajores', alfajorRoutes);

module.exports = app;