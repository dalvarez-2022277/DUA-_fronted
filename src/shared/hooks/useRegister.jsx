import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useRegister = (switchAuthHandler) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (name, email, password, address, phone) => {
    setIsLoading(true);

    try {
      const response = await registerRequest({
        name,
        email,
        password,
        address,
        phone,
      });
      setIsLoading(false);

      if (response.error) {
        console.error("Error en la respuesta del registro:", response.e);
        toast.error(response.e?.response?.data || "Ocurrió un error al registrarse, intenta de nuevo");
        return;
      }

      const { userDetails } = response.data;

      localStorage.setItem("user", JSON.stringify(userDetails));

      toast.success('Solicitud enviada exitosamente');
      navigate('/');

    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Ocurrió un error al registrarse, intenta de nuevo");
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
  };
};
