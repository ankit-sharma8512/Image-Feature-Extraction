// Service Class for Storage Services for token
const ACCESS_TOKEN_KEY = "access-token-ife"

class Storage {
  setAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
  }

  getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  }

  clearAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  }
}

export default new Storage()