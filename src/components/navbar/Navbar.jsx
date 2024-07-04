import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';
import { FiUser, FiShoppingCart, FiSearch, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={Logo} alt="DUA" className="h-10 md:h-12" />
                    </Link>

                    {/* Search Bar - Hidden on mobile, visible on larger screens */}
                    <div className="hidden md:flex relative flex-grow max-w-xl mx-4">
                        <input
                            type="text"
                            placeholder="Buscar productos, marcas y más..."
                            className="p-2 pl-10 pr-4 w-full rounded border border-gray-300 focus:outline-none focus:border-blue-600"
                        />
                        <span className="absolute left-3 top-2 text-gray-400"><FiSearch className="h-5 w-5" /></span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/mi-cuenta" className="flex items-center space-x-1 p-2">
                            <FiUser className="h-6 w-6" />
                            <span>Mi cuenta</span>
                        </Link>
                        <Link to="/carrito" className="flex items-center space-x-1 p-2">
                            <FiShoppingCart className="h-6 w-6" />
                            <span>Carrito</span>
                        </Link>
                        <Link to="/ubicacion" className="flex items-center space-x-1 p-2">
                            <FiMapPin className="h-6 w-6" />
                            <span>Guatemala</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
                    <div className="flex flex-col space-y-2">
                        <Link to="/mi-cuenta" className="flex items-center space-x-1 p-2">
                            <FiUser className="h-6 w-6" />
                            <span>Mi cuenta</span>
                        </Link>
                        <Link to="/carrito" className="flex items-center space-x-1 p-2">
                            <FiShoppingCart className="h-6 w-6" />
                            <span>Carrito</span>
                        </Link>
                        <Link to="/ubicacion" className="flex items-center space-x-1 p-2">
                            <FiMapPin className="h-6 w-6" />
                            <span>Guatemala</span>
                        </Link>
                        <div className="relative mt-2">
                            <input
                                type="text"
                                placeholder="Buscar productos, marcas y más..."
                                className="p-2 pl-10 pr-4 w-full rounded border border-gray-300 focus:outline-none focus:border-blue-600"
                            />
                            <span className="absolute left-3 top-2 text-gray-400"><FiSearch className="h-5 w-5" /></span>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-4 flex flex-wrap justify-between items-center text-sm text-white">
                    <a href="#" className="p-2">Categorías</a>
                    <a href="#" className="p-2">Ofertas</a>
                    <a href="#" className="p-2">Historial</a>
                    <a href="#" className="p-2">Supermercado</a>
                    <a href="#" className="p-2">Moda</a>
                    <a href="#" className="p-2">Mercado Play</a>
                    <a href="#" className="p-2">Vender</a>
                    <a href="#" className="p-2">Ayuda</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;