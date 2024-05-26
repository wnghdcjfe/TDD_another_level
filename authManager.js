// authManager.js
class AuthManager {
  constructor(userManager) {
    this.userManager = userManager;
  }

  login(id) {
    const user = this.userManager.getUser(id);
    if (user) {
      return `Welcome, ${user.name}!`;
    } else {
      throw new Error("User not found");
    }
  }
}

module.exports = AuthManager;
