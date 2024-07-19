import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { FiUser, FiShoppingCart, FiSearch, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Profile } from '../user/Profile.jsx';

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span
            className="nav-button text-white hover:text-gray-300 transition duration-300 cursor-pointer"
            onClick={onClickHandler}
        >
            {text}
        </span>
    );
};

export const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('name');
        localStorage.removeItem('num');
        window.location.href = './auth';
    };

    const handleNavigateToAddProducts = () => {
        navigate('/addProducts');
    };

    const handleNavigateToListItems = () => {
        navigate('/listItems');
    };

    const handleNavigateToListMy = () => {
        navigate('/listMy');
    };

    const handleNavigateToLema = () => {
        navigate('/lema');
    };

    return (
        <nav className="bg-indigo-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src={Logo} alt="DUA" className="h-12" />
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </button>
                </div>
                <div className={`lg:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    {isAuthenticated && (
                        <div className="flex items-center space-x-1 p-2">
                            <button onClick={toggleModal} className="text-lg font-semibold text-white">
                                MyAccount
                            </button>
                        </div>
                    )}
                    {isAuthenticated ? (
                        <>
                            <button onClick={handleLogout} className="flex items-center space-x-1 p-2 text-white">
                                <FiUser className="h-6 w-6" />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <Link to="/auth" className="flex items-center space-x-1 p-2 text-white">
                            <FiUser className="h-6 w-6" />
                            <span>Login</span>
                        </Link>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="flex justify-end">
                            <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700">
                                <FiX className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-4">
                            <Profile onClose={toggleModal} />
                        </div>
                    </div>
                </div>
            )}

            <div className={`mt-2 container mx-auto flex justify-between items-center text-white ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
                <div className="lg:flex space-x-4 w-full justify-center">
                    <NavButton text="Inicio" className="p-2 hover:text-gray-300 transition duration-300 font-mono" onClickHandler={handleNavigateToLema} />
                    <NavButton text="List Products" className="p-2 hover:text-gray-300 transition duration-300 font-mono" onClickHandler={handleNavigateToListItems} />
                    {isAuthenticated && (
                        <>
                            <NavButton text="Agregar Producto" onClickHandler={handleNavigateToAddProducts} />
                            <NavButton text="Historial" className="p-2 hover:text-gray-300 transition duration-300 font-mono" onClickHandler={handleNavigateToListMy} />
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
