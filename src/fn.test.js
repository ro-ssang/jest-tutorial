const fn = require('./fn');

// resolves, rejects
test('3초 후에 받아온 나이는 30', () => {
  return expect(fn.getAge()).resolves.toBe(30);
});

test('3초 후에 에러가 납니다.', () => {
  return expect(fn.getAge()).rejects.toMatch('error');
});
