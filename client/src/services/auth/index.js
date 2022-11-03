import API from "../api"
import Storage from "../storage"

class Auth {
  _endpoints = {
    REGISTER: "/api/v1/auth/register",
    LOGIN: "/api/v1/auth/login"
  }

  loginUser = async (email, password) => {
    try {
      const { data } = await API.post(this._endpoints.LOGIN, { email, password })
      Storage.setAccessToken(data["access-token"])
      return data
    } catch (error) {
      throw error.response?.data.msg || "Some Error Occured"
    }
  }

  registerUser = async (name, email, password) => {
    try {
      const { data } = await API.post(this._endpoints.REGISTER, { name, email, password })
      Storage.setAccessToken(data["access-token"])
      return data
    } catch (error) {
      throw error.response?.data.msg || "Some Error Occured"
    }
  }

}

export default new Auth()