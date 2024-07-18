import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://node-js-donation-place-back.vercel.app/DonationPlace/v1",
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

export const getItems = async () => {
  try {
    return await apiClient.get("/item/getAll");
  } catch (e) {
    console.error("Error en getItems:", e);
    return {
      error: true,
      e,
    };
  }
}


export const getOneUser = async (id) => {
  try {
    const response = await apiClient.get(`/user/getOne/${id}`);
    console.log("Respuesta de getOneUser:", response);
    return response.data;
  } catch (e) {
    console.error("Error en getUserLogged:", e);
    return {
      error: true,
      e,
    };
  }
};

export const putUser = async (id, data) => {
  try {
    return await apiClient.put(`/user/update/${id}`, data);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
}