export default function ContactCard() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-2/3 flex flex-col justify-center items-center h-72 rounded-xl bg-[#2f2b80] text-white py-44">
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
                    <button className="text-black text-lg md:text-xl font-semibold w-36 md:w-48 h-12 md:h-16 rounded-full bg-white
                        hover:bg-lime-500 hover:text-white transition duration-300 ease-in-out">
                        Cotizar proyecto
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}