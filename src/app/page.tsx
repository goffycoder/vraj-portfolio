import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section id="hero" className="w-full py-16">
          <Hero />
        </section>

        {/* Skills Section - Full width with scrolling */}
        <section id="skills" className="w-full">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16">
          <Projects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-16">
          <Experience />
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-16">
          <Education />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="w-full py-16">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16">
          <Contact />
        </section>
      </main>
    <Footer />
    </div>
  );
}