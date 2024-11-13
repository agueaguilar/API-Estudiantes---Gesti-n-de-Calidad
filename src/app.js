const express = require('express');
const app = express();
const port = 3000;

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Middleware para interpretar JSON en las solicitudes
app.use(express.json());

// Ruta GET de ejemplo
app.get('/api/students', (req, res) => {
  res.json({ message: 'Obteniendo estudiantes' });
});

// Ruta POST de ejemplo
app.post('/api/students', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: 'Estudiante creado', data: { name, age } });
});

// Inicializar servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
