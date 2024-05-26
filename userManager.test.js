// userManager.test.js
const UserManager = require('./userManager');

describe('UserManager', () => {
  let userManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  test('should add a user correctly', () => {
    const user = { id: 1, name: 'John Doe' };
    const result = userManager.addUser(user);

    expect(result).toEqual(user);
    expect(userManager.getAllUsers()).toContainEqual(user);
  });

  test('should not add a user with duplicate id', () => {
    const user1 = { id: 1, name: 'John Doe' };
    const user2 = { id: 1, name: 'Jane Doe' };

    userManager.addUser(user1);
    expect(() => userManager.addUser(user2)).toThrow('User with this id already exists');
  });

  test('should throw error when adding user without id or name', () => {
    expect(() => userManager.addUser({ name: 'John Doe' })).toThrow('User must have an id and name');
    expect(() => userManager.addUser({ id: 1 })).toThrow('User must have an id and name');
  });

  test('should remove a user correctly', () => {
    const user = { id: 1, name: 'John Doe' };
    userManager.addUser(user);

    const result = userManager.removeUser(1);

    expect(result).toEqual(user);
    expect(userManager.getAllUsers()).not.toContainEqual(user);
  });

  test('should throw error when removing a non-existent user', () => {
    expect(() => userManager.removeUser(1)).toThrow('User not found');
  });

  test('should get a user correctly', () => {
    const user = { id: 1, name: 'John Doe' };
    userManager.addUser(user);

    const result = userManager.getUser(1);

    expect(result).toEqual(user);
  });

  test('should throw error when getting a non-existent user', () => {
    expect(() => userManager.getUser(1)).toThrow('User not found');
  });

  test('should get all users correctly', () => {
    const user1 = { id: 1, name: 'John Doe' };
    const user2 = { id: 2, name: 'Jane Doe' };

    userManager.addUser(user1);
    userManager.addUser(user2);

    const result = userManager.getAllUsers();

    expect(result).toContainEqual(user1);
    expect(result).toContainEqual(user2);
    expect(result.length).toBe(2);
  });
});
