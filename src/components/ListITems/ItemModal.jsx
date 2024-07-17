import React from 'react';
import { Modal, Box } from '@mui/material';
import useUserName from '../../shared/hooks/useUserName';

export const ItemModal = ({ open, handleClose, item }) => {
    if (!item) return null;
    const userName = useUserName(item.user);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box className="bg-white dark:bg-gray-900 p-6 mx-auto mt-10 max-w-3xl rounded-lg shadow-lg">
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
                                Fecha de Publicación: {item.postedDate}
                            </div>
                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="User" />
                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">{userName || 'Cargando usario...'}</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};
