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

function getContentData() {
  const contentPath = path.join(process.cwd(), "src/data/content.json");
  const fileContent = fs.readFileSync(contentPath, "utf-8");
  return JSON.parse(fileContent);
}

export default function Home() {
  const logos = getLogos();
  const content = getContentData();

  return (
    <main className='min-h-screen bg-cream selection:bg-gold/30'>
      <Navbar contact={content.contact} />
      <HeroSection data={content.hero} />
      <AboutSection data={content.about} />
      <JourneySection data={content.journey} />
      <SkillsSection data={content.skills} />
      <EventsSection data={content.events} />
      <ClientsSection logos={logos} />
      <InterestsSection data={content.interests} />
      <ContactSection data={content.contact} />
    </main>
  );
}
