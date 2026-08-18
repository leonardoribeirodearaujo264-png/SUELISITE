import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Rights } from "@/components/Rights";
import { BpcSection } from "@/components/BpcSection";
import { FamilySection } from "@/components/FamilySection";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="conteudo">
        <Hero />
        <Rights />
        <BpcSection />
        <FamilySection />
        <HowItWorks />
        <About />
        <Reviews />
        <InstagramFeed />
        <Faq />
        <FinalCta />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
