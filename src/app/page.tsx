import About from '@/pages/about';
import HomePage  from '../pages/homepage';
import './globals.css';
import Navbar from './views/navbar';


export default function Home() {
  return (
      <main>
        <HomePage/>
        <About/>
      </main>
  );
}
