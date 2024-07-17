import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/logo.png';
import { FiUser, FiShoppingCart, FiSearch, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('name');
        localStorage.removeItem('num');
        window.location.href = './auth';
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
                </div>

                {/* Desktop Menu */}
                <div className={`lg:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    {isAuthenticated ? (
                        <>
                            <button onClick={handleLogout} className="flex items-center space-x-1 p-2">
                                <FiUser className="h-6 w-6" />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <Link to="/auth" className="flex items-center space-x-1 p-2">
                            <FiUser className="h-6 w-6" />
                            <span>Login</span>
                        </Link>
                    )}
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
