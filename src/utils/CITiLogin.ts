class CITiLogin {
  signIn(user: string, password: string, confirmPassword: string) {
    // returns the jwt
  }

  login(user: string, password: string) {
    // returns the jwt
  }

  forgotPassword(email: string) {
    // sends the email to reset the pasword
  }

  IsLogged(token: string) {
    // returns a boolean
  }

  logout(user: string, password: string) {
    
  }
}

export default new CITiLogin();