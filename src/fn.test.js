const fn = require('./fn');

// toBeNull
// toBeUndefined
// toBeDefined
test('null은 null입니다.', () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test('0은 false 입니다.', () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test('비어있지 않은 문자열은 true 입니다.', () => {
  expect(fn.add('hello', 'world')).toBeTruthy();
});
