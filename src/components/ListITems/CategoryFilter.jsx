import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const CategoryFilter = ({ categories, filterByCategory }) => {
    const [showCategories, setShowCategories] = useState(false);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    const handleCategoryClick = (category) => {
        filterByCategory(category);
        setShowCategories(false);
    };

    return (
        <div className="relative">
            <button
                className="p-2 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-600"
                onClick={toggleCategories}
            >
                <span><FiFilter /></span>
            </button>
            {showCategories && (
                <ul className="absolute left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryFilter;
