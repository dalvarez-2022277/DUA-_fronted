import React, { useState } from 'react';
import { useSubmitComment } from '../../shared/hooks/useSubmitComment'; // Ajusta la ruta según sea necesario

export const CommentForm = ({ itemId }) => {
    const [text, setText] = useState('');
    const [error, setError] = useState(null); // Estado para manejar el error
    const { submitCommentHandler } = useSubmitComment();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text.trim() === '') {
            setError('El comentario no puede estar vacío.');
            return;
        }

        const newComment = await submitCommentHandler(itemId, text);
        if (newComment) {
            window.location.reload();
            setText('');
            setError(null); // Limpiar el error después de enviar correctamente
        }
    };

    return (
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Escribe tu comentario..."
                    rows="4"
                />
                <button
                    type="submit"
                    className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Enviar comentario
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </form>
    );
};
