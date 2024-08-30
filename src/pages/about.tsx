"use client";

import '@/app/globals.css';
import AnimatedBg from "@/modules/animated_bg";
import Image from 'next/image';
import { Users, Coffee, Globe, Code } from 'lucide-react';
import Stats from "@/app/views/stats";
import ContactCard from "@/app/views/contact_card";
import Footer from "@/app/views/footer";
import Navbar from "@/app/views/navbar";
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import ReasonCards from '@/app/views/whyChoseUs';
import AboutUSSection from "@/app/views/aboutUs";
import AboutUsSection from '@/app/views/aboutUs';

interface Technology {
  name: string;
  icon: string;
}

interface Statistic {
  icon: React.ElementType;
  value: string;
  label: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const empresasDir = path.join(process.cwd(), 'public', 'empresas');
  const filenames = fs.readdirSync(empresasDir);
  const images = filenames.map(name => `/empresas/${name}`);

  return {
    props: {
      images,
    },
  };
};

interface AboutProps {
  images: string[];
}

const About: React.FC<AboutProps> = ({ images }) => {
  return (
    <section className="pt-16 bg-white">
      <Navbar />
      <div className="container mx-auto px-4 mt-56">
        {/* Descripción de la empresa */}
        <AboutUsSection/>

        <ReasonCards />

        {/* Empresas colaboradoras */}
        <div className="mb-16 mt-16  overflow-hidden">
          <h3 className="text-2xl font-bold text-center mb-8">Empresas que Confían en Nosotros</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {images.map((src, i) => (
                <div key={i} className="flex-shrink-0 w-48 mx-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={src}
                      alt={`Logo de empresa ${i + 1}`}
                      width={150}
                      height={75}
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              ))}
              {images.map((src, i) => (
                <div key={i + images.length} className="flex-shrink-0 w-48 mx-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={src}
                      alt={`Logo de empresa ${i + 1}`}
                      width={150}
                      height={75}
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Llamado a la acción */}
        <ContactCard />
      </div>
      <AnimatedBg/>
    </section>
  );
};

export default About;