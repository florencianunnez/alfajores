# Backend Alfajores Capricho

Este es el backend de la aplicación **Alfajores Capricho**, desarrollado con Node.js, Express y MongoDB (Mongoose).

## Requisitos

- Node.js
- npm
- MongoDB

## Configuración de la base de datos

Debes crear una base de datos en MongoDB llamada **capricho_alfajores** antes de iniciar el proyecto.  
Asegúrate de que tu archivo `.env` tenga la URI de conexión correcta, por ejemplo:

```
MONGO_URI=mongodb://localhost:27017/capricho_alfajores
```
# API REST - Alfajores Capricho

Este backend provee una API RESTful para gestionar productos y promociones de Alfajores Capricho.  
A continuación encontrarás las rutas disponibles y cómo consumirlas desde un frontend en React.

---

## 📚 Endpoints disponibles

### Alfajores

| Método | Ruta                        | Descripción                        |
|--------|-----------------------------|------------------------------------|
| GET    | `/alfajores`                | Listar todos los alfajores         |
| POST   | `/alfajores`                | Crear un nuevo alfajor             |
| PUT    | `/alfajores/:id`            | Actualizar un alfajor por ID       |
| DELETE | `/alfajores/:id`            | Eliminar un alfajor por ID         |

#### Ejemplo de body para POST/PUT
```json
{
  "nombre": "Alfajor de dulce de leche",
  "descripcion": "Clásico con baño de chocolate",
  "precioUnidad": 200,
  "precioCaja": 2200,
  "detalleCaja": "Con presentación"
}
```

---

### Promociones

| Método | Ruta                        | Descripción                        |
|--------|-----------------------------|------------------------------------|
| GET    | `/promociones`              | Listar todas las promociones       |
| POST   | `/promociones`              | Crear una nueva promoción          |
| PUT    | `/promociones/:id`          | Actualizar una promoción por ID    |
| DELETE | `/promociones/:id`          | Eliminar una promoción por ID      |

#### Ejemplo de body para POST/PUT
```json
{
  "nombre": "Promo Surtidos",
  "descripcion": "20% de descuento en cajas surtidas",
  "productosAplicables": ["<id_alfajor_1>", "<id_alfajor_2>"],
  "descuento": 20,
  "fechaInicio": "2025-06-01T00:00:00Z",
  "fechaFin": "2025-06-30T00:00:00Z",
  "condiciones": "Solo compras por caja"
}
```

---

## 🚀 ¿Cómo consumir la API desde React?

1. **Asegúrate de que el backend esté corriendo**
   ```sh
   npm install
   npm run dev
   ```

2. **Ejemplo de petición con fetch**
   ```javascript
   fetch('http://localhost:3000/api/alfajores')
     .then(res => res.json())
     .then(data => console.log(data));
   ```

3. **Ejemplo de petición con axios**
   ```javascript
   import axios from 'axios';

   axios.get('http://localhost:3000/api/promociones')
     .then(res => console.log(res.data));
   ```

---
