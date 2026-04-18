import About from "@/components/public/about";
import Contact from "@/components/public/contact";
import Hero from "@/components/public/hero";
import ProjectsGrid from "@/components/public/projects";
import Work from "@/components/public/work";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Work />
      <ProjectsGrid />
      <Contact />
    </main>
  )
}