import { useState, useEffect } from "react";
import { getItems, getUserByToken } from "../../services/api";

export const useGetItemsMy = () => {
    const [itemsData, setItemsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchItems = async () => {
        try {
            setLoading(true);

            // Obtener el usuario por token
            const userResponse = await getUserByToken();
            if (userResponse.error) {
                throw new Error(userResponse.message);
            }
            const userUid = userResponse.user.uid;

            // Obtener ítems
            const { data } = await getItems();
            if (data && data.entities) {
                // Filtrar ítems por el uid del usuario
                const filteredItems = data.entities.filter(item => item.user === userUid);
                setItemsData(filteredItems);
            } else {
                setItemsData([]);
            }
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    // Cargar los ítems al montar el componente
    useEffect(() => {
        fetchItems();
    }, []);

    return { itemsData, loading, error, fetchItems };
};
