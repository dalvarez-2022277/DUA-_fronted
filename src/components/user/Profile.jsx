import React, { useState, useEffect } from 'react';
import { useUserProfile } from '../../shared/hooks/useUserProfile';
import { FiX, FiEdit2, FiEdit } from 'react-icons/fi';
import { UpdateUserForm } from '../user/UpdateUserForm';

export const Profile = ({ onClose }) => {
    const { userData, loading, fetchUserProfile } = useUserProfile(); // Agregar fetchUserProfile desde el hook useUserProfile
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [shouldReloadProfile, setShouldReloadProfile] = useState(false); // Estado para forzar la recarga del perfil

    useEffect(() => {
        if (shouldReloadProfile) {
            fetchUserProfile(); // Llama a la función para volver a cargar los datos del usuario
            setShouldReloadProfile(false); // Reinicia el estado
        }
    }, [shouldReloadProfile, fetchUserProfile]);

    const handleUpdateSuccess = () => {
        setIsEditOpen(false); // Cierra el formulario de edición
        setShouldReloadProfile(true); // Activa la recarga del perfil
    };

    if (loading) {
        return <p className="text-center mt-4">Cargando datos del usuario...</p>;
    }

    if (!userData) {
        return <p className="text-center mt-4">No se pudo cargar los datos del usuario.</p>;
    }

    return (
        <div className="relative bg-blue-200 border border-blue-400 rounded-lg shadow-lg p-4 w-72">
            {!isEditOpen && (
                <>
                    <span className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
                        <FiX className="h-6 w-6 text-gray-600" />
                    </span>
                    <span className="absolute top-2 right-8 cursor-pointer" onClick={() => setIsEditOpen(true)}>
                        <FiEdit className="h-6 w-6 text-gray-600" />
                    </span>
                </>
            )}
            {isEditOpen ? (
                <UpdateUserForm
                    userId={userData.uid}
                    initialData={userData}
                    onClose={() => setIsEditOpen(false)}
                    onUpdateSuccess={handleUpdateSuccess} // Pasa la función de actualización exitosa al formulario
                />
            ) : (
                <>
                    <h2 className="text-xl font-bold mb-4 text-center">Perfil de Usuario</h2>
                    <p className="mb-2"><span className="font-semibold">Nombre:</span> {userData.name}</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> {userData.email}</p>
                    <p className="mb-2"><span className="font-semibold">Teléfono:</span> {userData.phone}</p>
                </>
            )}
        </div>
    );
};