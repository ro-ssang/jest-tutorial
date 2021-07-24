const fn = require('./fn');

// toThrow
test('이거 에러 나나요?', () => {
  expect(() => fn.throwError()).toThrow('xx');
});
