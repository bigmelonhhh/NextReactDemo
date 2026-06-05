import { About } from "./about";
import { DigitalTherapy } from "./digital-therapy";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { PlatformShowcase } from "./platform-showcase";
import { ServiceCarrier } from "./service-carrier";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCarrier />
        <DigitalTherapy />
        <PlatformShowcase />
        <About />
      </main>
      <Footer />
    </>
  );
}

