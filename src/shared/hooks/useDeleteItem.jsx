import { useState } from 'react';
import { deleteItem } from '../../services/api';

export const useDeleteItem = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const removeItem = async (id, setItems) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await deleteItem(id);
            console.log('Resultado de eliminar item:', response); // Verifica el resultado de eliminar
            if (response.error) {
                throw new Error(response.message);
            }
            // Actualizar el estado para eliminar el item del frontend
            setItems(prevItems => prevItems.filter(item => item._id !== id));
            setSuccess(true);
            return response;
        } catch (e) {
            setError(e.message);
            return { error: true, message: e.message };
        } finally {
            setLoading(false);
        }
    };

    return { removeItem, loading, error, success };
};
