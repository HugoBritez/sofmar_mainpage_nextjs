"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true, // La animación se dispara solo una vez
        threshold: 0.1, // El porcentaje del componente visible para activar la animación
    });

    return (
        <section ref={ref} className="w-auto flex flex-col justify-center items-center my-16 px-4 md:px-0">
            <h1 className="text-3xl text-center w-full md:w-3/5">
                Impulsa tu presencia en línea con nuestras soluciones integrales. Nos enfocamos en optimizar cada aspecto de tu negocio digital, desde el desarrollo hasta la gestión, asegurando un crecimiento constante y sostenible.
            </h1>

            <div className="w-full md:w-3/5 my-8 p-4 md:px-16 md:py-16 border border-gray-500 rounded-xl flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 bg-gray-50">
                <div className="flex space-x-2 items-center">
                    <h1 className="text-5xl md:text-7xl">
                        {inView && <CountUp start={0} end={11} duration={2.5} prefix="+" />}
                    </h1>
                    <p className="text-xl md:text-2xl">Años de<br />experiencia</p>
                </div>
                <div className="border-l border-black h-0 md:h-32 w-full md:w-0"></div>
                <div className="flex space-x-2 items-center">
                    <h1 className="text-5xl md:text-7xl">
                        {inView && <CountUp start={0} end={150} duration={2.5} prefix="+" />}
                    </h1>
                    <p className="text-xl md:text-2xl">Clientes<br />satisfechos</p>
                </div>
                <div className="border-l border-black h-0 md:h-32 w-full md:w-0"></div>
                <div className="flex space-x-2 items-center">
                    <h1 className="text-5xl md:text-7xl">
                        {inView && <CountUp start={0} end={1} duration={2.5} prefix="+" />}
                    </h1>
                    <p className="text-xl md:text-2xl">Servidor Linux<br />de ultima<br/>generacion</p>
                </div>
            </div>
        </section>
    );
}