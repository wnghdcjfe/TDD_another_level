// integration.test.js
const UserManager = require('./userManager');
const AuthManager = require('./authManager');

describe('Integration Test: UserManager and AuthManager', () => {
  let userManager;
  let authManager;

  beforeEach(() => {
    userManager = new UserManager();
    authManager = new AuthManager(userManager);
  });

  test('should add user and login successfully', () => {
    const user = { id: 1, name: 'John Doe' };
    userManager.addUser(user);

    const loginMessage = authManager.login(1);
    expect(loginMessage).toBe('Welcome, John Doe!');
  });

  test('should fail to login non-existent user', () => {
    expect(() => authManager.login(2)).toThrow('User not found');
  });
});
