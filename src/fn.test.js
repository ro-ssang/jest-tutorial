const fn = require('./fn');

// 콜백 패턴
test('3초 후에 받아온 이름은 Mike', (done) => {
  function callback(name) {
    try {
      expect(name).toBe('Mike');
      done();
    } catch (error) {
      done();
    }
  }
  fn.getName(callback);
});
