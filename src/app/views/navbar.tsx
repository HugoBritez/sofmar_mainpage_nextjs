"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

const links = [
    { to: 'home-section', label: 'Inicio' },
    { to: 'about-section', label: 'Nosotros' },
    { to: 'products-section', label: 'Productos' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full bg-gray-100 text-gray-700 text-sm py-2 flex justify-center items-center space-x-4 md:space-x-48 fixed top-0 z-50">
                <span className="mx-2 md:mx-4">📧 administracion@sofmarsistema.net</span>
                <span className="mx-2 md:mx-4">📞 0971 271 288 / 0984793176</span>
            </div>
            <header className="w-full bg-white shadow-lg fixed top-8 z-50 lg:py-8">
                <nav className="container mx-auto p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            src="/sofmareas.png"
                            alt="Logo"
                            width={200}
                            height={100}
                        />
                    </div>
                    <div className="hidden md:flex space-x-12 items-center">
                        {links.map(({ to, label }) => (
                            <ScrollLink
                                key={to}
                                to={to}
                                smooth={true}
                                duration={500}
                                className="text-gray-700 hover:text-blue-500 hover:scale-110 duration-300 text-lg cursor-pointer"
                            >
                                {label}
                            </ScrollLink>
                        ))}
                        <button
                            onClick={() => console.log("Contactanos")}
                            className="bg-[#84AF30] text-white px-4 py-2 rounded hover:bg-[#2F2B80] transition duration-300"
                        >
                            Contactanos
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </nav>
                {isOpen && (
                    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-700 focus:outline-none">
                            <FaTimes className="w-8 h-8" />
                        </button>
                        {links.map(({ to, label }) => (
                            <ScrollLink
                                key={to}
                                to={to}
                                smooth={true}
                                duration={500}
                                className="text-gray-700 hover:text-blue-500 hover:scale-110 duration-300 text-lg cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </ScrollLink>
                        ))}
                        <button
                            onClick={() => console.log("Contactanos")}
                            className="bg-[#84AF30] text-white px-4 py-2 rounded hover:bg-[#2F2B80] transition duration-300"
                        >
                            Contactanos
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}