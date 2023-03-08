module.exports = class Auth {
  user = null;
  cert = null;

  constructor() { }

  /**
   * Login
   * @param {*} data 
   */
  login({ user, cert }) {
    this.user = user;
    this.cert = cert;
  }

  isLogged() {
    return !!this.user;
  }
};
