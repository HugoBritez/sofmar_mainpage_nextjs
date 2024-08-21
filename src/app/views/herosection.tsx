import React from "react";
import Image from "next/image";
import { BackgroundBeamsDemo } from "../../modules/background-beams-demo";
import Navbar from "./navbar";

export default function HeroSection() {
    return (
        <div className="bg-[#2f2b80]">
            <Navbar/>
            <div className="h-screen flex flex-col justify-center items-center rounded-b-3xl mt-32 lg:mt-8">
                <div className="container mx-auto py-4 flex flex-col items-center space-y-8 md:space-y-16 z-20 px-4 md:px-0">
                    <p className="text-white text-xl md:text-2xl font-light text-center">Somos una empresa especializada en:</p>
                    <div className="flex flex-col md:flex-row items-center md:space-x-8">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-6xl lg:text-6xl text-white font-extrabold text-center md:text-left">
                                Desarrollo Web, <br /> Soluciones en Software,<br /> Hosting y Apps para empresas!
                            </h1>
                            <p className="text-white text-xl md:text-2xl font-light text-center md:text-left mt-4 md:mt-8">
                                Con tecnologías de última generación y un equipo altamente capacitado,<br/>desarrollamos software y apps para empresas.
                            </p>
                            <div className="flex justify-center md:justify-start mt-4 md:mt-8">
                                <button className="text-black text-lg md:text-xl font-semibold w-36 md:w-48 h-12 md:h-16 rounded-full bg-white
                                    hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out">
                                    Contáctanos
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <Image 
                            src="/hero_image.jpg" 
                            alt="Descripción de la imagen" 
                            width={500} height={500} 
                            className="w-full h-auto rounded-tl-[200px] rounded-br-[200px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundBeamsDemo/>
        </div>
    );
}