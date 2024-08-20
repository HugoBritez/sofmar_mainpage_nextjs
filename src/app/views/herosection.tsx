import React from "react";
import {BackgroundBeamsDemo} from "../../modules/background-beams-demo";

export default function HeroSection() {
    return (
            <div>
                <div className="bg-[#2f2b80] h-screen flex flex-col justify-center items-center rounded-b-3xl">
                    <div className="container mx-auto py-4 flex flex-col items-center space-y-16 z-20">
                        <p className="text-white text-2xl font-light">Somos una empresa especializada en:</p>
                        <h1 className="text-8xl text-white font-extrabold text-center">Desarrollo Web, <br/> Desarrollo de Software,<br/> Hosting y Soluciones digitales!</h1>
                        <button className="text-black text-xl font-semibold w-48 h-16 rounded-full bg-white
                        hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out
                        ">Contactanos </button>

                    </div>
                </div>
                <BackgroundBeamsDemo/>
            </div>
    );
}