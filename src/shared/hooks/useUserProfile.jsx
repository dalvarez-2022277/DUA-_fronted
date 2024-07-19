import { useState, useEffect } from "react";
import { getOneUser } from "../../services/api";

export const useUserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        const id = user.id;
        const response = await getOneUser(id);
        if (response && response.entity) {
          setUserData(response.entity);
        } else {
          console.error("Error: Datos de usuario incompletos");
        }
      } else {
        console.error("No se encontró usuario en localStorage");
      }
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return { userData, loading, fetchUserProfile };
};
