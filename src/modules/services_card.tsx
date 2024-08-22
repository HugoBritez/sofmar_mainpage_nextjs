import { LucideIcon } from "lucide-react";

interface ServicesCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export default function ServicesCard({ title, description, icon: Icon }: ServicesCardProps) {
    return (
        <div className="card bg-gray-50 w-96 shadow-xl duration-300 hover:scale-105 group">
            <figure>
                <Icon size={72} className="text-[#2f2b80] group-hover:text-[#84AF30] duration-300"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a href="https://wa.me/595971271288" target="_blank" rel="noopener noreferrer">
                        <button className="btn border-0 bg-[#84AF30] text-white hover:bg-[#2F2B80] duration-300">
                            Pedir cotización
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}