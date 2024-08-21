"use client";

import { useState } from 'react';
import Image from 'next/image';

const links = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Nosotros' },
    { href: '/contact', label: 'Productos' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-lg fixed top-0 z-50">
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <div className={`md:hidden bg-white shadow-lg fixed inset-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-gray-700 focus:outline-none duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-4 py-4 h-full justify-center">
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <a href={href} className="text-gray-700 hover:text-blue-500 text-xl">
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button 
                            onClick={() => console.log("Contactanos")}
                            className="bg-[#84AF30] text-white px-4 py-2 rounded hover:bg-[#2F2B80] transition duration-300"
                        >
                            Contactanos
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}