import React from 'react';
import useUserName from '../../shared/hooks/useUserName';

export const CardItem = ({ item, loggedUserId, removeItem, loading, error }) => {
  if (!item || !item._id) {
    console.error('Item o ID del item no está definido', item);
    return null; // No renderiza el componente si el item o el ID no están definidos
  }

  const userName = useUserName(item.user);
  const formattedDate = new Date(item.postedDate).toLocaleString();

  const handleDelete = async (event) => {
    event.stopPropagation(); // Detiene la propagación del evento
    if (item._id) {
      console.log(`Intentando eliminar el item con ID: ${item._id}`); // Verifica el ID
      await removeItem(item._id);
    } else {
      console.error('ID del producto no está definido');
    }
  };

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
        {item.user === loggedUserId && (
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            disabled={loading}
          >
            {loading ? 'Eliminando...' : 'Eliminar'}
          </button>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};
