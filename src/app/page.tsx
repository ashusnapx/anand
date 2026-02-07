import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import fs from "fs";
import path from "path";

function getLogos() {
  const logoDir = path.join(process.cwd(), "public/images/logo");

  if (!fs.existsSync(logoDir)) {
    return [];
  }

  const files = fs.readdirSync(logoDir);

  return files
    .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
    .map((file) => {
      // Create a readable name from filename (e.g., "grand_hyatt_logo.jpg" -> "Grand Hyatt Logo")
      const name = file
        .replace(/\.[^/.]+$/, "") // Remove extension
        .replace(/[-_]/g, " ") // Replace separators with spaces
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Title Case

      return {
        name,
        logo: `/images/logo/${file}`,
      };
    });
}

export default function Home() {
  const logos = getLogos();

  return (
    <main className='min-h-screen bg-cream selection:bg-gold/30'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <EventsSection />
      <ClientsSection logos={logos} />
      <InterestsSection />
      <ContactSection />
    </main>
  );
}
