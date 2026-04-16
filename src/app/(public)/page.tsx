import About from "@/components/public/about";
import Hero from "@/components/public/hero";
import ProjectsGrid from "@/components/public/projects";
import Work from "@/components/public/work";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface/75">
      <Hero />
      <About />
      <Work />
      <ProjectsGrid />
    </main>
  )
}