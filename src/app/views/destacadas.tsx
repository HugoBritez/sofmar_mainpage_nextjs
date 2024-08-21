import { ThreeDCardDemo } from "@/modules/3dCardDemo";

const destacadas = [
    {
        key:1,
        'title': "Sofmar Comercial y Contable",
        'description': "Un software en la nube que te permite acceder a distintas funciones de tu empresa desde cualquier lugar, sin necesidad de invertir en infraestructura ni licencias.",
        'image': "/oficina-casa-vacia-tableta-portatil-muestra-infografias-datos-contables.jpg",
    },
    {
        key:2,
        'title': "Sofmar Salud",
        'description': "Una solución integral para la gestión de clínicas y consultorios médicos, que  permite administrar turnos, historias clínicas, facturación y más.",
        'image': "/pexels-rethaferguson-3825539.jpg",
    },
    {
        key:3,
        'title': "Sofmar Medicina Prepaga",
        'description': "Una solucion que le permitira a tu empresa de medicina prepaga gestionar afiliados, facturación, pagos y más, de forma sencilla y eficiente.",
        'image': "/empresaria-comiendo-sabroso-sandwich-descanso-comer-trabajando-empresa-comercial.jpg",
    },
];


export default function Destacadas() {
    return (
        <>
        <h1 className="text-center text-4xl mb-8">Soluciones destacadas</h1>
        <div className="flex flex-wrap justify-center my-0">
            <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-9/12">
                {destacadas.map((destacada) => (
                <ThreeDCardDemo 
                    key={destacada.key} 
                    title={destacada.title} 
                    description={destacada.description}
                    image={destacada.image}
                />
                ))}
            </div>
        </div>
        </>
    )
}