import React, { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="header" className="w-full fixed top-0 left-0 z-30 py-4 bg-gray-900">
            <div className="w-full flex items-center justify-between px-6">
                <div className="flex items-center">
                    <span className="text-white text-2xl">DUA</span>
                </div>

                <div className="flex items-center">
                    <button className="bg-gray-700 text-white p-3 rounded md:hidden" onClick={toggleMenu}>
                        Menu
                    </button>
                    <div className="hidden md:flex items-center">
                        <button className="bg-gray-700 text-white p-3 rounded mr-2">...</button>
                        <button className="bg-white text-black p-3 rounded mr-2">Button</button>
                        <button className="bg-black text-white p-3 rounded">Share</button>
                        <img
                            src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg"
                            alt="User avatar"
                            className="ml-2 rounded-full"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden w-full flex flex-col items-start bg-gray-900 p-4">
                    <button className="bg-gray-700 text-white p-3 rounded my-1 w-full text-left">...</button>
                    <button className="bg-white text-black p-3 rounded my-1 w-full text-left">Button</button>
                    <button className="bg-black text-white p-3 rounded my-1 w-full text-left">Share</button>
                </div>
            )}
        </nav>
    );
};
