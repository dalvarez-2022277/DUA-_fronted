import React, { useState, useEffect } from 'react';
import { useSubmitComment } from '../../shared/hooks/useSubmitComment'; 
import { toast } from 'react-hot-toast';

export const CommentForm = ({ itemId }) => {
    const [text, setText] = useState('');
    const { submitCommentHandler, error } = useSubmitComment();

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text.trim() === '') {
            toast.error('El comentario no puede estar vacío.');
            return;
        }

        const newComment = await submitCommentHandler(itemId, text);
        if (newComment) {
            setText('');
            toast.success('Comentario enviado exitosamente.');
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
            </div>
        </form>
    );
};
