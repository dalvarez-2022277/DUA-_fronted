import React from 'react';
import { Modal, Box } from '@mui/material';
import useUserName from '../../shared/hooks/useUserName';
import { CommentForm } from '../Comments/CommentForm'; // Ajusta la ruta según sea necesario
import { ListComments } from '../Comments/ListComments'; // Ajusta la ruta según sea necesario

export const ItemModal = ({ open, handleClose, item }) => {
    if (!item) return null;
    const userName = useUserName(item.user);
    const formattedDate = new Date(item.postedDate).toLocaleString();

 

    return (
        <Modal open={open} onClose={handleClose}>
            <Box className="bg-white dark:bg-gray-900 p-6 mx-auto mt-10 max-w-3xl rounded-lg shadow-lg overflow-y-auto" style={{ maxHeight: '80vh' }}>
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{item.title}</h1>
                    <div className="mt-8 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-96 lg:mx-6" src={item.img} alt="Imagen del artículo" />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                            <p className="text-sm text-white uppercase">{item.category}</p>
                            <p className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                                {item.title}
                            </p>
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                {item.description}
                            </p>
                            <div className="mt-2 text-white">
                                Condición: {item.condition}
                            </div>
                            <div className="mt-2 text-white">
                                Fecha de publicación: {formattedDate}
                            </div>
                            <div className="flex items-center mt-6">
                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-500 dark:text-gray-400">Publicado por</h1>
                                    <p className="text-sm text-gray-700 dark:text-gray-200">{userName || 'Cargando usuario...'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ListComments comments={item.comments} />
                    <CommentForm itemId={item._id} />
                </div>
            </Box>
        </Modal>
    );
};
