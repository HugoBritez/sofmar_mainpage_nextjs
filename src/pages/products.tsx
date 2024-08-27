"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Award, Users, Clock, Code, ChevronRight, Star } from 'lucide-react';
import '@/app/globals.css';
import Footer from '@/app/views/footer';
import Navbar from '@/app/views/navbar';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

const projects: Project[] = [
    {
      "id": 1,
      "title": "Landing Page para Sanatorio",
      "description": "Una página de aterrizaje optimizada para un sanatorio, diseñada para ser completamente responsiva y fácil de navegar, destacando servicios médicos, horarios de atención, y un formulario de contacto integrado.",
      "image": "/programa.jpg",
      "tags": [""],
      "link": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "category": "Desarrollo Web"
    },
    {
      "id": 2,
      "title": "Aplicacion de Agendamiento de Citas Medicas",
      "description": "Una aplicación móvil que permite a los pacientes programar citas médicas de manera sencilla y rápida, con recordatorios automáticos y opciones de reprogramación integradas.",
      "image": "/programa.jpg",
      "tags": [""],
      "link": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "category": "Desarrollo de Apps"
    },
    {
      "id": 3,
      "title": "Sofmar Comercial y Contable",
      "description": "Un sistema integral para la gestión comercial y contable de empresas, que incluye módulos para facturación, inventario, cuentas por cobrar y reportes financieros.",
      "image": "/programa.jpg",
      "tags": [""],
      "link": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "category": "Software Empresarial"
    },
    {
      "id": 4,
      "title": "Sofmar Salud",
      "description": "Una solución de software diseñada para la administración integral de clínicas y hospitales, abarcando la gestión de pacientes, historia clínica electrónica, y programación de consultas.",
      "image": "/programa.jpg",
      "tags": [""],
      "link": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "category": "Software Médico"
    },
    {
      "id": 5,
      "title": "Sofmar Medicina Prepaga",
      "description": "Un sistema especializado en la gestión de empresas de medicina prepaga, con funcionalidades para la administración de afiliados, facturación, y control de prestaciones.",
      "image": "/programa.jpg",
      "tags": [""],
      "link": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "category": "Software de Seguros"
    }
  ];

const ProjectCard: React.FC<{ project: Project; onSelect: (project: Project) => void }> = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => onSelect(project)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <span className="text-white flex items-center bg-[#2F2B80] px-4 py-2 rounded-lg">
                Ver detalles
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          
          {project.tags.length > 3 && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <span className="text-sm text-blue-600">{project.category}</span>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          objectFit="cover"
          className="rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Categorias</h4>
          <p>{project.category}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2F2B80] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
        Ver el proyecto<ExternalLink className="inline-block ml-2 h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsPage(): JSX.Element {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  useEffect(() => {
    const filtered = projects.filter(project => 
      selectedCategory === 'All' || project.category === selectedCategory
    );
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
        <header className="bg-[#2F2B80] text-white py-16 mt-52">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
          <p className="text-xl">Descubre nuestro portfolio de innovadoras soluciones a traves de varias industrias.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 flex justify-center">
          <div className="relative w-64">
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No projects found in this category.</p>
        )}

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>

        <section className="mt-16">
  <h2 className="text-3xl font-bold mb-8">¿Por qué elegir nuestros proyectos?</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Award className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Soluciones Galardonadas</h3>
      <p className="text-gray-600">Nuestros proyectos han recibido reconocimiento por su innovación e impacto.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Users className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Equipo Experto</h3>
      <p className="text-gray-600">Nuestros profesionales capacitados aportan años de experiencia a cada proyecto.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Clock className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Entrega Puntual</h3>
      <p className="text-gray-600">Nos enorgullecemos de entregar proyectos a tiempo y dentro del presupuesto.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Code className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Tecnología de Vanguardia</h3>
      <p className="text-gray-600">Aprovechamos las últimas tecnologías para construir soluciones a prueba de futuro.</p>
    </div>
  </div>
</section>


<section className="mt-16 bg-[#2F2B80] text-white rounded-lg p-8">
  <h2 className="text-3xl font-bold mb-4">¿Listo para Dar Vida a tus Ideas?</h2>
  <p className="text-xl mb-6">Colaboremos y creemos soluciones innovadoras que impulsen tu negocio hacia adelante.</p>
  <a href="/contact" className="inline-block bg-white text-[#84AF30] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#84AF30] hover:text-white transition-colors">
    Comienza tu Proyecto <ChevronRight className="inline-block ml-2" />
  </a>
</section>

<section className="mt-16">
  <h2 className="text-3xl font-bold mb-8">Testimonios de Clientes</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
      </div>
      <p className="text-gray-600 mb-4">El sistema de gestión de productos y contabilidad que desarrollaron para GAESA ha transformado completamente nuestra forma de operar. La integración fluida y las características avanzadas han optimizado nuestros procesos financieros y de inventario, ahorrándonos tiempo y recursos valiosos.</p>
      <p className="font-semibold">- CFO de GAESA</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
      </div>
      <p className="text-gray-600 mb-4">Implementar el sistema de gestión de turnos para Medical Center ha sido un verdadero avance. La eficiencia en la asignación de turnos y la facilidad de uso han mejorado significativamente la experiencia tanto para nuestros pacientes como para nuestro personal médico.</p>
      <p className="font-semibold">- Directora de Operaciones en Medical Center</p>
    </div>
  </div>
</section>


      </main>

    <Footer/>
    </div>
  );
}