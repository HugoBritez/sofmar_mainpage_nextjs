import Image from "next/image";
import { Container } from "postcss";

export default function Header() {
  return (
    <header >
      <div className="container mx-auto py-4">
        <Image
            src="/logo.jpeg"
            alt="Sofmar Sistemas"
            width={200}
            height={50}
        />

        
      </div>
    </header>
  );
}