import { useState } from 'react';
import { submitComment } from '../../services/api'; // Ajusta la ruta según sea necesario

export const useSubmitComment = () => {
    const [error, setError] = useState(null);

    const submitCommentHandler = async (itemId, text) => {
        try {
            const result = await submitComment(itemId, text);
            return result;
        } catch (err) {
            setError('Error al enviar el comentario');
            return null;
        }
    };

    return { submitCommentHandler, error };
};