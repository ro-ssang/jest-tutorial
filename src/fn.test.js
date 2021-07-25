const fn = require('./fn');

let num = 10;

// beforeEach()
beforeEach(() => {
  num = 0;
});

// afterEach()
afterEach(() => {
  num = 0;
});

test('0 더하기 1 은 1 이야', () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test('0 더하기 2 은 2 이야', () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

test('0 더하기 3 은 3 이야', () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});

test('0 더하기 4 은 4 이야', () => {
  num = fn.add(num, 4);
  expect(num).toBe(4);
});
