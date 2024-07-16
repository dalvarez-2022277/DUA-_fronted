import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const response = await loginRequest({ email, password });
      setIsLoading(false);

      if (response.error) {
        if (response.e?.response?.status === 400) {
          toast.error("Credenciales incorrectas. Por favor, verifica tu email y contraseña.");
        } else {
          toast.error(response.e?.response?.data || "Ocurrió un error al iniciar sesión, intenta de nuevo");
        }
        return;
      }

      const { token, role } = response.data;

      if (!token || !role) {
        console.error("No se recibieron datos de la respuesta:", response.data);
        toast.error("Ocurrió un error al iniciar sesión, intenta de nuevo");
        return;
      }

      // Mostrar la información recibida al iniciar sesión
      console.log("Datos recibidos al iniciar sesión:", response.data);

      const userDetails = { token, role };
      localStorage.setItem("user", JSON.stringify(userDetails));

      if (role === "ADMIN") {
        navigate("/DashboarAdmin");
      } else {
        navigate("/dashboardUser");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      toast.error("Ocurrió un error al iniciar sesión, intenta de nuevo");
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
  };
};
