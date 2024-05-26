// userManager.js
class UserManager {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      if (!user.id || !user.name) {
        throw new Error('User must have an id and name');
      }
      if (this.users.some(u => u.id === user.id)) {
        throw new Error('User with this id already exists');
      }
      this.users.push(user);
      return user;
    }
  
    removeUser(id) {
      const index = this.users.findIndex(user => user.id === id);
      if (index === -1) {
        throw new Error('User not found');
      }
      const [removedUser] = this.users.splice(index, 1);
      return removedUser;
    }
  
    getUser(id) {
      const user = this.users.find(user => user.id === id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }
  
    getAllUsers() {
      return this.users;
    }
  }
  
  module.exports = UserManager;
  