import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = ({ searchTerm, setSearchTerm, filteredItems, onSearch }) => {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleItemClick = (item) => {
        setSearchTerm(item.title);
        onSearch(item.title); // Realiza la búsqueda
    };

    return (
        <div className='flex justify-center items-center mt-5'>
            <div className="relative mt-5">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar productos, marcas y más..."
                        className="p-2 pl-10 pr-4 w-72 rounded border border-gray-300 focus:outline-none focus:border-blue-600"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <span className="absolute left-3 top-2 text-gray-400"><FiSearch className="h-5 w-5" /></span>
                </div>
                {searchTerm.length > 0 && Array.isArray(filteredItems) && filteredItems.length > 0 && (
                    <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
                        {filteredItems.map((item, index) => (
                            <li
                                key={index}
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleItemClick(item)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
