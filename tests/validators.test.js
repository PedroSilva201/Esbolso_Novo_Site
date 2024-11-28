<<<<<<< HEAD
const isValidEmail = require('../utils/validators');

test('valida corretamente um email', () => {
  expect(isValidEmail('teste@exemplo.com')).toBe(true);
});

test('retorna falso para um email inválido', () => {
  expect(isValidEmail('teste.com')).toBe(false);
});
=======
const isValidEmail = require('../utils/validators');

test('valida corretamente um email', () => {
  expect(isValidEmail('teste@exemplo.com')).toBe(true);
});

test('retorna falso para um email inválido', () => {
  expect(isValidEmail('teste.com')).toBe(false);
});
>>>>>>> f6fc10868c10ae704d973a999382fcaf4a5de472
