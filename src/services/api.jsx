import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://node-js-donation-place-back.vercel.app/DonationPlace/v1",
  //baseURL: "http://localhost:3000/DonationPlace/v1",
  timeout: 5000, // Aumentar el tiempo de espera a 5000ms
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user')

    if (userDetails) {
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
  try {
    return await apiClient.post('/auth/login', data)
  } catch (e) {
    return {
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

export const addProduct = async (data) => {
  try {
    return await apiClient.post('/item/postProduct', data);
  } catch (e) {
    return {
      error: true,
      e
    };
  }
};

export const getItems = async () => {
  try {
    return await apiClient.get("/item/getAll");
  } catch (error) {
    console.error("Error en getItems:", error);
    return {
      error: true,
      message: error.message,
    };
  }
};

export const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`/user/getOne/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error en getUserById para el usuario con ID ${id}:`, error);
    return {
      error: true,
      message: error.message,
    };
  }
};

export const submitComment = async (itemId, text) => {
  try {
    const response = await apiClient.put(`/item/comment/${itemId}`, { text });
    return response.data;
  } catch (error) {
    console.error('Error en submitComment:', error);
    throw error;
  }
};

export const getUserByToken = async () => {
  try {
    const response = await apiClient.get(`/user/my/`);
    return response.data;
  } catch (error) {
    console.error(`Error en getUserByToken  :,v`, error);
    return {
      error: true,
      message: error.message,
    };
  }
};