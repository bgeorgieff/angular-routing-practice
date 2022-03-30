export class AuthService {
  logged = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.logged);
      }, 1400);
    });
    return promise;
  }

  login() {
    this.logged = true;
  }

  logOut() {
    this.logged = false;
  }
}
