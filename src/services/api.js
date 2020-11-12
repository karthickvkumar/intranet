import axios from 'axios';

class ApiService{
  baseURL = "http://localhost:3000/api/"

  async get(url){
    url = this.baseURL + url;
    const response = await axios.get(url, { withCredentials: true});
    return response;
  }

  async post(url, data){
    try{
      url = this.baseURL + url;
      const response = await axios.post(url, data, { withCredentials: true});
      return response;
    }
    catch(error){      
      return error.response;
    }
  }


}

export default new ApiService();