const Users = require('./userModel');

jest.mock('md5', () => () => '1234');

describe('Given the userSchema validPassword method', () => {
  describe('When tit is invoked with a valid password', () => {
    test('the return should be true', () => {
      const user = new Users({ password: '1234' });
      const answer = user.validPassword('1234');
      expect(answer).toBe(true);
    });
  });

  describe('When tit is invoked with an invalid password', () => {
    test('the return should be false', () => {
      const user = new Users({ password: '4321' });
      const answer = user.validPassword('1234');
      expect(answer).toBe(false);
    });
  });
});
