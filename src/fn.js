const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwError: () => {
    throw Error('xx');
  },
  getName: (callback) => {
    const name = 'Mike';
    setTimeout(() => {
      // callback(name);
      throw Error('서버 에러...');
    }, 3000);
  },
};

module.exports = fn;
