const fn = require('./fn');

// toMatch
test('Hello World 에 h 가 있나요?', () => {
  expect('Hello World').toMatch(/h/i);
});
