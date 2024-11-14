const isValidEmail = require('../utils/validators');

test('valida corretamente um email', () => {
  expect(isValidEmail('teste@exemplo.com')).toBe(true);
});

test('retorna falso para um email inválido', () => {
  expect(isValidEmail('teste.com')).toBe(false);
});
