import { useState } from "react";
import { getItems } from "../../services/api";

export const useGetItems = () => {
    const [itemsData, setItemsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const { data } = await getItems();
            console.log('Datos recibidos de la API: ', data);
            if (data && data.entities) { // Verifica si data.entities está definido
                setItemsData(data.entities);
            } else {
                setItemsData([]); // Si no hay datos válidos, establece un array vacío
            }
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    return { itemsData, loading, error, fetchItems };
};
