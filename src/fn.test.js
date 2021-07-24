const fn = require('./fn');

// 프로미스 패턴 (return 해야 한다.)
test('3초 후에 받아온 나이는 30', () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});
