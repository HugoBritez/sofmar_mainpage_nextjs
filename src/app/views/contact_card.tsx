"use client";

import React from 'react';

export default function ContactCard() {
    return (
        <>
            <style jsx>{`
                @keyframes moveBackground {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animated-bg {
                    background: linear-gradient(270deg, #2f2b80, #84AF30, #2f2b80);
                    background-size: 600% 600%;
                    animation: moveBackground 10s ease infinite;
                }
            `}</style>
            <div className="w-full flex justify-center">
                <div className="w-2/3 flex flex-col justify-center items-center h-72 rounded-xl text-white py-44 animated-bg">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl text-white font-extrabold text-center">
                        ¿Tienes un proyecto en mente?
                    </h1>
                    <h1 className="text-2xl md:text-4xl lg:text-4xl text-white font-bold text-center my-8">
                        ¡Envíanos un mensaje y hagamos algo increíble!
                    </h1>
                    <div className="space-x-8">
                        <button className="text-black text-lg md:text-xl font-semibold w-36 md:w-48 h-12 md:h-16 rounded-full bg-white
                            hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out">
                            Conocer más
                        </button>
                        <a href="https://wa.me/595971271288" target="_blank" rel="noopener noreferrer">
                            <button className="text-black text-lg md:text-xl font-semibold w-36 md:w-48 h-12 md:h-16 rounded-full bg-white
                                hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out">
                                Contactanos
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}