import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://node-js-donation-place-back.vercel.app/DonationPlace/v1",
 // baseURL: "http://localhost:3000/DonationPlace/v1",
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

export const deleteItem = async (id) => {
  try {
    console.log(`Intentando eliminar el item con ID: ${id}`); // Verifica el ID
    const response = await apiClient.delete(`/item/remove/${id}`);
    console.log('Respuesta del backend:', response.data); // Verifica la respuesta del backend
    return response.data;
  } catch (e) {
    console.error('Error al eliminar el item:', e.response ? e.response.data : e.message); // Verifica el error
    return {
      error: true,
      message: e.response ? e.response.data : e.message,
    };
  }
};
