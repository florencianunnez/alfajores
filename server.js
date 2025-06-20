// Importamos dependencias principales
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Nuestra función para conectar a MongoDB

// Inicializamos la app de Express
const app = express();

// Cargamos variables de entorno desde el archivo .env
dotenv.config();

// Conectamos a la base de datos MongoDB
connectDB();

// Middleware que permite peticiones desde otros orígenes (como el frontend)
app.use(cors());

// Middleware que permite recibir datos en formato JSON en los requests
app.use(express.json());

// Ruta raíz para comprobar que el servidor funciona
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor de Alfajores Capricho funcionando' });
});

// Conectamos nuestras rutas al servidor
app.use('/alfajores', require('./routes/alfajores'));
app.use('/promociones', require('./routes/promociones'));

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Puerto en el que se va a levantar el servidor (desde .env o por defecto en 4000)
const PORT = process.env.PORT || 4000;

// Levantamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});