import Hero from "@/components/Hero";
import UnifiedFlow from "@/components/UnifiedFlow";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Stats from "@/components/Stats";
import TechComparison from "@/components/TechComparison";
import AiAgentFlow from "@/components/AiAgentFlow";
import GrowthSection from "@/components/GrowthSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Hero />

      <UnifiedFlow>
        <div className="pl-16 md:pl-24 space-y-24 py-12">
          <Stats />
          <GrowthSection />
          <TechComparison />
          <AiAgentFlow />
          <About />
          <Testimonials />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </UnifiedFlow>

      <footer className="py-8 text-center text-muted text-sm">
        <p>© {new Date().getFullYear()} أحمد. جميع الحقوق محفوظة.</p>
        <p className="mt-1">تم البناء بواسطة Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}
