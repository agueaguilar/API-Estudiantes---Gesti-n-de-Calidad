const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// Habilitar CORS
app.use(cors());

// Middleware para interpretar JSON en las solicitudes
app.use(express.json());

// Rutas de ejemplo
app.get('/api/students', (req, res) => {
  res.json({ message: 'Obteniendo estudiantes' });
});

app.post('/api/students', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: 'Estudiante creado', data: { name, age } });
});

// Inicializar servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
