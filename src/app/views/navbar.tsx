"use client";

import { useState } from 'react';
import Image from 'next/image';

const links = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Nosotros' },
    { href: '/products', label: 'Productos' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full bg-gray-100 text-gray-700 text-sm py-2 flex justify-center items-center space-x-4 md:space-x-48 fixed top-0 z-50">
                <span className="mx-2 md:mx-4">📧 administracion@sofmarsistema.net</span>
                <span className="mx-2 md:mx-4">📞 0971 271 288 / 0984793176</span>
            </div>
            <header className="w-full bg-white shadow-lg fixed top-8 z-50">
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
                        {links.map(({ href, label }) => (
                            <a key={`${href}${label}`} href={href} className="text-gray-700 hover:text-blue-500 hover:scale-110 duration-300 text-lg">
                                {label}
                            </a>
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
                    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 transition-transform transform duration-300 ease-in-out">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-700 focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {links.map(({ href, label }) => (
                            <a key={`${href}${label}`} href={href} className="text-2xl text-gray-700 hover:text-blue-500">
                                {label}
                            </a>
                        ))}
                        <button 
                            onClick={() => console.log("Contactanos")}
                            className="bg-[#84AF30] text-white px-6 py-3 rounded hover:bg-[#2F2B80] transition duration-300"
                        >
                            Contactanos
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}