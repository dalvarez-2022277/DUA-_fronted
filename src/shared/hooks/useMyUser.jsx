import { useEffect, useState } from "react";
import { getUserByToken } from "../../services/api";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserByToken();
        if (!response.error) {
          setUser(response.user);
        } else {
          setError(response.message);
        }
      } catch (e) {
        setError("Error al obtener el usuario");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Dependencias vacías para que se ejecute solo una vez al montar

  return { user, loading, error };
};
