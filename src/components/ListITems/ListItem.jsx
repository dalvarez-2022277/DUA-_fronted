import React, { useEffect, useState } from "react";
import { useGetItems } from "../../shared/hooks/useGetItems";
import { CardItem } from "./CardItem";
import { Search } from "./Search";
import CategoryFilter from "./CategoryFilter";
import {ItemModal} from './ItemModal.jsx';

export const ListItem = () => {
  const { itemsData, loading, error, fetchItems } = useGetItems();
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
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>Hubo un error: {error}</p>}
      <div className="mb-4 flex justify-center items-center">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredItems={filteredItems} />
        <div className="mt-10 ml-2">
          <CategoryFilter categories={categories} filterByCategory={filterByCategory} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredItems.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            <CardItem item={item} />
          </div>
        ))}
      </div>
      <ItemModal open={modalOpen} handleClose={handleCloseModal} item={selectedItem} />
    </div>
  );
};
