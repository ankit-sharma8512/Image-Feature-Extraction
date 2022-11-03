import API from "../api"

class File {
  _endpoints = {
    GET_ALL: "/api/v1/file/get",
    UPLOAD_FILE: "/api/v1/file/upload",
    GET_FILE: (filename, page) => `/api/v1/file/get/${filename}?page=${page}`
  }

  getAllFiles = async () => {
    try {
      const { data } = await API.get(this._endpoints.GET_ALL)
      return data
    } catch (error) {
      throw error.response.data.msg || "Some Error Occured"
    }
  }

  getFile = async (filename, page) => {
    try {
      const { data } = await API.get(this._endpoints.GET_FILE(filename, page))
      return data
    } catch (error) {
      throw error.response.data.msg || "Some Error Occured"
    }
  }

  uploadFile = async (file) => {
    try {
      const { data } = await API.post(this._endpoints.UPLOAD_FILE, file)
      return data
    } catch (error) {
      throw error.response.data.msg || "Some Error Occured"
    }
  }

}

export default new File()