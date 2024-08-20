
import React from "react";
import { BackgroundBeamsDemo } from "../../modules/background-beams-demo";
import Navbar from "./navbar";

export default function HeroSection() {
    return (
        <div className="bg-[#2f2b80]">
            <Navbar/>
            <div className="h-screen flex flex-col justify-center items-center rounded-b-3xl">
                <div className="container mx-auto py-4 flex flex-col items-center space-y-8 md:space-y-16 z-20 px-4 md:px-0">
                    <p className="text-white text-xl md:text-2xl font-light text-center">Somos una empresa especializada en:</p>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-extrabold text-center">
                        Desarrollo Web, <br /> Desarrollo de Software,<br /> Hosting y Soluciones digitales!
                    </h1>
                    <button className="text-black text-lg md:text-xl font-semibold w-36 md:w-48 h-12 md:h-16 rounded-full bg-white
                        hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out">
                        Contáctanos
                    </button>
                </div>
            </div>
            <BackgroundBeamsDemo/>
        </div>
    );
}