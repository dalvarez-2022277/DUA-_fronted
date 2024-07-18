import React from 'react';
import useUserName from '../../shared/hooks/useUserName';
export const ListComments = ({ comments }) => {
   // const userName = useUserName();
    const name = (id) => {
        return useUserName(id)
    }
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Comentarios</h2>
            <ul className="mt-4 space-y-4">
                {comments.map((comment) => (
                    <li key={comment._id} className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                        <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Publicado por {name(comment.user)} el {new Date(comment.created).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

