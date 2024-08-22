import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 mt-16 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 px-4">
                <Image src="/sofmareas.png" width={300} height={250} alt="logo" className="mx-auto md:mx-0" />
                <div className="border-l border-gray-600 h-0 md:h-32 w-full md:w-0"></div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <h1 className="text-3xl font-bold">Sofmar Sistema E.A.S</h1>
                    <p className="text-lg">Desarrollamos soluciones integrales para tu empresa,<br/> desde la gestión de clientes hasta la administración de recursos.</p>
                    <p className="text-lg">Contáctanos para más información.</p>
                </div>
                <div className="border-l border-gray-600 h-0 md:h-32 w-full md:w-0"></div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                <Link href="/" className="text-lg hover:underline">
                        Inicio
                    </Link>
                    <Link href="/nosotros" className="text-lg hover:underline">
                        Nosotros
                    </Link>
                    <Link href="/productos" className="text-lg hover:underline">
                        Productos
                    </Link>
                    <button 
                        className="bg-[#84AF30] text-white px-4 py-2 rounded hover:bg-[#2F2B80] transition duration-300">
                        Contáctanos
                    </button>
                </div>
                <div className="border-l border-gray-600 h-0 md:h-32 w-full md:w-0"></div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <h1 className="text-lg font-semibold">Avda. San Jose c/ Jose Marti.<br/>Km 7 Ciudad del Este- Paraguay</h1>
                    <p className="text-lg">administracion@sofmarsistema.net</p>
                    <p className="text-lg">0971271288 / 0984793176</p>
                </div>
            </div>
        </footer>
    );
}