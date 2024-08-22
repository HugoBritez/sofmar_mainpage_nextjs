import { HeroParallaxDemo } from "@/modules/heroparallaxdemo";
import {NextUIProvider} from "@nextui-org/react";
import AnimatedBg from "@/modules/animated_bg";
import HeroSection from "../views/herosection";
import Services from "../views/services";
import Stats from "../views/stats";
import Clientes from "../views/clientes";
import Destacadas from "../views/destacadas";
import ContactCard from "../views/contact_card";
import { Contact } from "lucide-react";
import Footer from "../views/footer";

export default function HomePage() {
  return (
    <NextUIProvider>
        <HeroSection/>
        <AnimatedBg/>
        <Destacadas/>
        <Stats/>
        <Services/>
        <HeroParallaxDemo/>
        <ContactCard/>
        <Footer/>
    </NextUIProvider>
  );
}