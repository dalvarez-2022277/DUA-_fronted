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
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Search */}
                <div className="flex items-center space-x-4">
                    <img
                        src={Logo}
                        alt="DUA"
                        className="h-12"
                    />
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar productos, marcas y más..."
                            className="p-2 pl-10 pr-4 w-72 rounded border border-gray-300 focus:outline-none focus:border-blue-600"
                        />
                        <span className="absolute left-3 top-2 text-gray-400"><FiSearch className="h-5 w-5" /></span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none"
                    >
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className={`lg:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to="/mi-cuenta" className="flex items-center space-x-1 p-2">
                        <FiUser className="h-6 w-6" />
                        <span>Mi cuenta</span>
                    </Link>
                    <Link to="/carrito" className="flex items-center space-x-1 p-2">
                        <FiShoppingCart className="h-6 w-6" />
                        <span>Carrito</span>
                    </Link>
                    <Link to="/ubicacion" className="hidden lg:flex items-center space-x-1 p-2">
                        <FiMapPin className="h-6 w-6" />
                        <span>Guatemala</span>
                    </Link>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-2 container mx-auto flex justify-between items-center text-black">
                <div className="lg:hidden flex space-x-4">
                    <a href="#" className="p-2">Categorías</a>
                    <a href="#" className="p-2">Ofertas</a>
                    <a href="#" className="p-2">Historial</a>
                    <a href="#" className="p-2">Supermercado</a>
                    <a href="#" className="p-2">Moda</a>
                    <a href="#" className="p-2">Mercado Play</a>
                    <a href="#" className="p-2">Vender</a>
                    <a href="#" className="p-2">Ayuda</a>
                </div>
                <div className="hidden lg:flex space-x-4">
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
