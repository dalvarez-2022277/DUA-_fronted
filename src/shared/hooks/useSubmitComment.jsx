import { useState } from 'react';
import { submitComment } from '../../services/api'; 

export const useSubmitComment = () => {
    const [error, setError] = useState(null);

    const submitCommentHandler = async (itemId, text) => {
        try {
            const user = localStorage.getItem('user');
            if (!user) {
                setError('Necesitas loguearte para comentar');
                return null;
            }

            const result = await submitComment(itemId, text);
            return result;
        } catch (err) {
            setError('Error al enviar el comentario');
            return null;
        }
    };

    return { submitCommentHandler, error };
};
