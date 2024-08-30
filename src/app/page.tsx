import About from '@/pages/about';
import HomePage from '../pages/homepage';
import './globals.css';
import Navbar from './views/navbar';
import ProjectsPage from '@/pages/products';
import AboutUsSection from './views/aboutUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home-section">
          <HomePage />
        </section>
        <section id="about-section">
          <About images={[]} />
        </section>
        <section id="products-section">
          <ProjectsPage />
        </section>
      </main>
    </>
  );
}