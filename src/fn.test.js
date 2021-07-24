const fn = require('./fn');

// Async/Await
test('3초 후에 받아온 나이는 30', async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
