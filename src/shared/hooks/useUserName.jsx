import { useEffect, useState } from 'react';
import { getUserById } from '../../services/api'; // Ajusta la ruta según la ubicación de tu archivo api.js

const useUserName = (userId) => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userData = await getUserById(userId);
        if (userData && userData.entity) {
          setUserName(userData.entity.name);
        }
      } catch (error) {
        console.error('Error obteniendo el nombre del usuario:', error);
      }
    };

    if (userId) {
      fetchUserName();
    }
  }, [userId]);

  return userName;
};

export default useUserName;