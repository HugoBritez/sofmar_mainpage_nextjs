import React from 'react';
import ServicesCard from '@/modules/services_card';
import { Building2, ShoppingCart, Server, MonitorSmartphone, TabletSmartphone, Search, AppWindow } from "lucide-react";

const services = [
    {
        title: 'Sitios Institucionales',
        description: 'Creamos sitios web que reflejan la identidad de tu organización, ofreciendo una presencia en línea profesional y sólida.',
        icon: Building2,
    },
    {
        title: 'Landing Pages',
        description: 'Diseñamos páginas de aterrizaje optimizadas para convertir visitantes en clientes, enfocadas en tus objetivos específicos.',
        icon: AppWindow,
    },
    {
        title: 'E-Commerce',
        description: 'Desarrollamos tiendas online personalizadas que maximizan ventas y mejoran la experiencia del usuario.',
        icon: ShoppingCart,
    },
    {
        title: 'Sistemas de Gestión',
        description: 'Implementamos sistemas a medida que automatizan y optimizan los procesos internos de tu empresa.',
        icon: MonitorSmartphone,
    },
    {
        title: 'Aplicaciones Progresivas',
        description: 'Desarrollamos aplicaciones que combinan lo mejor del web y móvil, ofreciendo experiencias rápidas y accesibles.',
        icon: TabletSmartphone,
    },
    {
        title: 'Hosting, VPN y Dominios',
        description: 'Ofrecemos servicios integrales de hosting, VPN y dominios para asegurar una presencia en línea segura y eficiente.',
        icon: Server,
    },
    
];

export default function Services() {
    return (
        <div className="my-16">
            <h1 className="text-center text-4xl">Cuales son nuestros servicios</h1>
            <div className="flex flex-wrap justify-center my-16">
                <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-9/12">
                    {services.map((service, index) => (
                    <ServicesCard 
                        key={index} 
                        title={service.title} 
                        description={service.description} 
                        icon={service.icon}
                    />
                    ))}
                </div>
            </div>
            <div className="flex w-full justify-center mt-4 md:mt-8">
                    <button className="text-lg md:text-xl font-semibold w-36 md:w-48 h-12 md:h-16 rounded-full bg-[#2F2B80]
                        hover:bg-lime-500 text-white transition duration-300 ease-in-out">
                        Saber más
                    </button>
            </div>
        </div>
    );
}