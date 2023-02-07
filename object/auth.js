module.exports = class Auth {
  user = null;
  token = null;

  constructor() { }

  /**
   * Login
   * @param {*} data 
   */
  login({ user, token }) {
    this.user = user;
    this.token = token;
  }

  isLogged() {
    return !!this.user;
  }
};
