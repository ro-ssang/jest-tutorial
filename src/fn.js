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
  getAge: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
        // reject('error');
      }, 3000);
    });
  },
  connectUserDb: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'Mike', age: 30, gender: 'male' });
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },
  createUser: (name) => {
    console.log('실제로 사용자가 생성되었습니다.');
    return {
      name,
    };
  },
};

module.exports = fn;
