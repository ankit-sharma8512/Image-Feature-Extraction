import axios from "axios";
import Storage from "../storage";

class ApiService {
  constructor() {
    const service = axios.create({
      baseURL: "http://localhost:5000",
    });

    service.interceptors.request.use(this.attachAccessToken, err => Promise.reject(err))
    this.service = service;
  }

  attachAccessToken = (req) => {
    // Attach Access Token to outgoing requests
    const token = Storage.getAccessToken()
    if (token)
      req.headers['authorization'] = "Bearer " + token
    return req
  }


  get(path) {
    return this.service.get(path);
  }

  post(path, payload) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload,
    });
  }

  patch(path, payload) {
    return this.service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload,
    });
  }

  put(path, payload) {
    return this.service.request({
      method: "PUT",
      url: path,
      responseType: "json",
      data: payload,
    });
  }

  delete(path, payload) {
    return this.service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
      data: payload,
    });
  }
}

export default new ApiService();
