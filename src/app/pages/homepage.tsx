import { HeroParallaxDemo } from "@/modules/heroparallaxdemo";
import {NextUIProvider} from "@nextui-org/react";
import AnimatedBg from "@/modules/animated_bg";
import HeroSection from "../views/herosection";
import Services from "../views/services";
import Stats from "../views/stats";
import Clientes from "../views/clientes";

export default function HomePage() {
  return (
    <NextUIProvider>
        <HeroSection/>
        <AnimatedBg/>
        <Stats/>
        <Services/>
        <HeroParallaxDemo/>
        <Clientes/>
    </NextUIProvider>
  );
}