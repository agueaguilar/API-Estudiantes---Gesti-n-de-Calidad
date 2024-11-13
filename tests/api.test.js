const request = require('supertest'); // Librería para realizar solicitudes HTTP en los tests
const app = require('../app'); // Ruta al archivo app.js donde está configurada la API

describe('Pruebas para la API de estudiantes', () => {
  // Prueba para el endpoint GET /api/students
  it('Debe responder con un mensaje en el endpoint GET /api/students', async () => {
    const response = await request(app).get('/api/students');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Obteniendo estudiantes');
  });

  // Prueba para el endpoint POST /api/students
  it('Debe crear un estudiante en el endpoint POST /api/students', async () => {
    const newStudent = { name: 'Juan', age: 20 };
    const response = await request(app)
      .post('/api/students')
      .send(newStudent);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Estudiante creado');
    expect(response.body.data).toEqual(newStudent);
  });
});

