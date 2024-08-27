import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Target, Eye, Zap, Shield, Users as UsersIcon, Lightbulb, Heart, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  icon: React.ElementType;
}

const Card: React.FC<CardProps> = ({ title, content, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <Icon className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

interface ValueProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon: Icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 text-blue-600 mr-2" />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-600 mt-2"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TeamMember: React.FC<{ name: string; position: string }> = ({ name, position }) => {
  return (
    <motion.div
      className="w-48"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src= "/user-avatar.png"
        alt={name}
        width={192}
        height={192}
        className="rounded-full mb-4"
      />
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{position}</p>
    </motion.div>
  );
};

export default function AboutUsSection(): JSX.Element {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-bold text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Somos Sofmar E.A.S
        </motion.h2>
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Una empresa de software innovadora dedicada a crear soluciones tecnológicas que transforman negocios y mejoran vidas. Con años de experiencia y un equipo apasionado, estamos a la vanguardia del desarrollo de software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card
            title="Quiénes Somos"
            content="Un equipo de profesionales apasionados por la tecnología, comprometidos con la excelencia y la innovación en cada proyecto que emprendemos. Nuestra experiencia abarca una amplia gama de industrias y tecnologías, lo que nos permite ofrecer soluciones versátiles y efectivas."
            icon={Users}
          />
          <Card
            title="Nuestra Misión"
            content="Proporcionar soluciones de software innovadoras y de alta calidad que impulsen el éxito de nuestros clientes y contribuyan al avance tecnológico global. Nos esforzamos por entender las necesidades únicas de cada cliente y ofrecer soluciones personalizadas que superen sus expectativas, siempre con un enfoque en la eficiencia y la escalabilidad."
            icon={Target}
          />
          <Card
            title="Nuestra Visión"
            content="Ser líderes reconocidos en la industria del software, conocidos por nuestra excelencia técnica, innovación continua y compromiso inquebrantable con el éxito del cliente. Aspiramos a ser catalizadores del cambio tecnológico, impulsando la transformación digital en diversas industrias y contribuyendo a un futuro más conectado y eficiente."
            icon={Eye}
          />
        </div>

        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-center mb-8">Los valores que nos representan</h3>
          <h3 className="text-3xl text-gray-600 font-bold text-center mb-8">Y nos hacen ser quienes somos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Value
              icon={Zap}
              title="Innovación constante"
              description="Buscamos continuamente nuevas formas de resolver problemas y mejorar nuestras soluciones, manteniéndonos a la vanguardia de la tecnología."
            />
            <Value
              icon={Shield}
              title="Integridad y transparencia"
              description="Actuamos con honestidad y ética en todas nuestras interacciones, manteniendo una comunicación abierta y clara con nuestros clientes y colaboradores."
            />
            <Value
              icon={UsersIcon}
              title="Colaboración efectiva"
              description="Fomentamos un ambiente de trabajo colaborativo, donde las ideas fluyen libremente y el trabajo en equipo es la base de nuestro éxito."
            />
            <Value
              icon={Lightbulb}
              title="Aprendizaje continuo"
              description="Nos comprometemos a mantenernos actualizados con las últimas tendencias y tecnologías, promoviendo el crecimiento personal y profesional de nuestro equipo."
            />
            <Value
              icon={Heart}
              title="Excelencia en el servicio"
              description="Nos esforzamos por superar las expectativas de nuestros clientes, ofreciendo un servicio excepcional y soluciones de la más alta calidad."
            />
            <Value
              icon={Globe}
              title="Responsabilidad social"
              description="Reconocemos nuestro papel en la sociedad y nos comprometemos a utilizar la tecnología de manera responsable, contribuyendo positivamente a nuestras comunidades."
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-4xl font-bold mb-8">Nuestro Equipo</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <TeamMember name="Ing. Ramon Duarte" position="Desarrollo" />
            <TeamMember name="Lic. Nelson Quintana" position="Desarrollo" />
            <TeamMember name="Lic. Ezequiel Portillo" position="Desarrollo" />
            <TeamMember name="Ing. Marcelo Galeano" position="Soporte de redes y servidores" />
            <TeamMember name="Lic. Mirna Matto" position="Contabilidad y Soporte IT." />
            <TeamMember name="Sra. Gloria Arguello" position="Administracion" />
            <TeamMember name="Ing. Marcelo Mendez" position="Desarrollo" />
            <TeamMember name="Sebastian Britez" position="Desarrollo Web" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}