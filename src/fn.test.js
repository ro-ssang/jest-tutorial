const fn = require('./fn');

// Async/Await
test('3초 후에 받아온 나이는 30', async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});
