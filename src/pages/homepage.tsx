import { HeroParallaxDemo } from "@/modules/heroparallaxdemo";
import {NextUIProvider} from "@nextui-org/react";
import AnimatedBg from "@/modules/animated_bg";
import HeroSection from "../app/views/herosection";
import Services from "../app/views/services";
import Stats from "../app/views/stats";
import Clientes from "../app/views/clientes";
import Destacadas from "../app/views/destacadas";
import ContactCard from "../app/views/contact_card";
import { Contact } from "lucide-react";
import Footer from "../app/views/footer";

export default function Home() {
  return (
    <NextUIProvider>
        <HeroSection/>
        <AnimatedBg/>
        <Destacadas/>
        <Stats/>
        <Services/>
        <HeroParallaxDemo/>
        <ContactCard/>
    </NextUIProvider>
  );
}