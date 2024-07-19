import React, { useEffect, useState } from "react";
import { useGetItems } from "../../shared/hooks/useGetItems";
import { CardItem } from "./CardItem";
import { Search } from "./Search";
import CategoryFilter from "./CategoryFilter";
import { ItemModal } from './ItemModal.jsx';
import { useDeleteItem } from '../../shared/hooks/useDeleteItem';

export const ListItem = () => {
  const { itemsData, loading: loadingItems, error, fetchItems } = useGetItems();
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { removeItem, loading: loadingDelete, error: errorDelete } = useDeleteItem();

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setFilteredItems(itemsData.filter(item => item.status !== false));
  }, [itemsData]);

  useEffect(() => {
    const filtered = itemsData.filter((item) => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.status !== false
    );
    setFilteredItems(filtered);
  }, [itemsData, searchTerm]);

  useEffect(() => {
    const allCategories = itemsData.reduce((acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    }, []);
    setCategories(allCategories);
  }, [itemsData]);

  const filterByCategory = (category) => {
    const filtered = itemsData.filter((item) => 
      item.category === category &&
      item.status !== false
    );
    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Obtener el ID del usuario logueado desde localStorage
  const userDetails = JSON.parse(localStorage.getItem('user'));
  const loggedUserId = userDetails ? userDetails.id : null;

  return (
    <div>
      {loadingItems && <p>Cargando...</p>}
      {error && <p>Hubo un error: {error}</p>}
      <div className="mb-4 flex justify-center items-center">
        <Search 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          filteredItems={filteredItems} // Pasa los elementos filtrados
          onSearch={(term) => setSearchTerm(term)} // Define la función onSearch
        />
        <div className="mt-10 ml-2">
          <CategoryFilter categories={categories} filterByCategory={filterByCategory} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredItems.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            <CardItem 
              item={item} 
              loggedUserId={loggedUserId} 
              removeItem={(id) => removeItem(id, setFilteredItems)} 
              loading={loadingDelete} 
              error={errorDelete} 
            />
          </div>
        ))}
      </div>
      <ItemModal open={modalOpen} handleClose={handleCloseModal} item={selectedItem} />
    </div>
  );
};
