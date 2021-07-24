const fn = require('./fn');

// toContain
test('Mike가 있나요?', () => {
  const user = 'Mike';
  const userList = ['Tom', 'Mike', 'Kai'];
  expect(userList).toContain(user);
});
