import React, { useEffect, useState } from "react";
import { useGetItemsMy } from "../../shared/hooks/useGetItemsMy";
import { CardItem } from "./CardItem";
import { Search } from "./Search";
import CategoryFilter from "./CategoryFilter";
import { ItemModal } from './ItemModal.jsx';
import { toast } from "react-hot-toast";

export const ListMy = () => {
  const { itemsData, loading, error, fetchItems } = useGetItemsMy();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredItems(itemsData);
    } else {
      const filtered = itemsData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
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

  // Manejo de errores con toast
  useEffect(() => {
    if (error) {
      toast.error(`No tienes productos agregados`);
    }
  }, [error]);

  const filterByCategory = (category) => {
    const filtered = itemsData.filter((item) => item.category === category);
    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-4">
      {loading && <p>Cargando...</p>}
      <div className="mb-4 flex flex-col sm:flex-row justify-center items-center">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredItems={filteredItems} />
        <div className="mt-4 sm:mt-0 sm:ml-2">
          <CategoryFilter categories={categories} filterByCategory={filterByCategory} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredItems.map((item, index) => (
          <div key={index} className="transform scale-90 sm:scale-100" onClick={() => handleItemClick(item)}>
            <CardItem item={item} />
          </div>
        ))}
      </div>
      <ItemModal open={modalOpen} handleClose={handleCloseModal} item={selectedItem} />
    </div>
  );
};
