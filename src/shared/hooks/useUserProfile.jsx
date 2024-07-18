import { useState, useEffect } from 'react';
import { getOneUser } from '../../services/api';

export const useUserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    const user = JSON.parse(storedUser);
                    const id = user.id; // Asumiendo que el ID está en user.id según tu descripción
                    const response = await getOneUser(id);
                    if (response && response.entity) {
                        setUserData(response.entity);
                    } else {
                        console.error('Error: Datos de usuario incompletos');
                    }
                } catch (error) {
                    console.error('Error al obtener datos del usuario:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                console.error('No se encontró usuario en localStorage');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { userData, loading };
};
