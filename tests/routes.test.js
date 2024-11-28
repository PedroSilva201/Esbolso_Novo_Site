<<<<<<< HEAD
const request = require('supertest');
const app = require('../server'); // Importe o app configurado

describe('Testes de Integração - Rotas', () => {
  test('GET /contato retorna status 200', async () => {
    const response = await request(app).get('/contato');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Entre em contato pelo e-mail');
  });

  test('POST /contato envia dados de contato com sucesso', async () => {
    const response = await request(app)
      .post('/contato')
      .send({ nome: 'Pedro', email: 'pedro@exemplo.com', mensagem: 'Olá!' });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Mensagem enviada com sucesso');
  });
});
=======
const request = require('supertest');
const app = require('../server'); // Importe o app configurado

describe('Testes de Integração - Rotas', () => {
  test('GET /contato retorna status 200', async () => {
    const response = await request(app).get('/contato');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Entre em contato pelo e-mail');
  });

  test('POST /contato envia dados de contato com sucesso', async () => {
    const response = await request(app)
      .post('/contato')
      .send({ nome: 'Pedro', email: 'pedro@exemplo.com', mensagem: 'Olá!' });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Mensagem enviada com sucesso');
  });
});
>>>>>>> f6fc10868c10ae704d973a999382fcaf4a5de472
