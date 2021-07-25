const fn = require('./fn');

let user;

beforeAll(async () => {
  user = await fn.connectUserDb();
});

afterAll(() => {
  return fn.disconnectDb();
});

test('이름은 Mike', () => {
  expect(user.name).toBe('Mike');
});

test('나이는', () => {
  expect(user.age).toBe(30);
});

test('성별은 남성', () => {
  expect(user.gender).toBe('male');
});
