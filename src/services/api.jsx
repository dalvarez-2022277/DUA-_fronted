import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/DonationPlace/v1",
  timeout: 5000, // Aumentar el tiempo de espera a 5000ms
});

apiClient.interceptors.request.use(
  (config) => {
      const userDetails = localStorage.getItem('user')
  
      if(userDetails){
          const token = JSON.parse(userDetails).token
          config.headers.Authorization = `Bearer ${token}`
      }
      return config
  },
  (e) => {
      return Promise.reject(e)
  }
)

export const login = async (data) => {
  try{
      return await apiClient.post('/auth/login', data)
  }catch(e){
      return{
          error: true,
          e 
      }
  }
}

export const register = async (data) => {
  try {
    return await apiClient.post('/user/post', data);
  } catch (e) {
    return {
      error: true,
      e
    };
  }
};

export const addProduct = async (formData) => {
  try {
    return await apiClient.post('/item/postProduct', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (e) {
    return {
      error: true,
      e
    };
  }
};
