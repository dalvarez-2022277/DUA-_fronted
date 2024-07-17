import React from 'react';
import useUserName from '../../shared/hooks/useUserName';

export const CardItem = ({ item }) => {
  const userName = useUserName(item.user);
  const formattedDate = new Date(item.postedDate).toLocaleString();

  return (
    <div className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 cursor-pointer">
      <img src={item.img} alt="Imagen del artículo" className="w-full" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{item.title}</h2>
        <p className="text-sm text-gray-700 mb-1"><strong>Descripción:</strong> {item.description}</p>
        <p className="text-sm text-gray-700 mb-1"><strong>Categoría:</strong> {item.category}</p>
        <p className="text-sm text-gray-700 mb-1"><strong>Condición:</strong> {item.condition}</p>
        <p className="text-sm text-gray-700 mb-1"><strong>Fecha de Publicación:</strong> {formattedDate}</p>
        <p className="text-sm text-gray-700 mb-1"><strong>Usuario:</strong> {userName || 'Cargando usuario...'}</p>
      </div>
    </div>
  );
};
