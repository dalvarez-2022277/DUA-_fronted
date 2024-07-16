import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://node-js-donation-place-back.vercel.app/DonationPlace/v1",
  timeout: 5000, // Aumentar el tiempo de espera a 5000ms
});

  
export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (e) {
    console.error("Error en login:", e);
    return {
      error: true,
      e,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/user/post", data);
  } catch (e) {
    console.error("Error en register:", e);
    return {
      error: true,
      e,
    };
  }
};
