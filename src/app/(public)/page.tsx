import About from "@/components/public/about";
import Hero from "@/components/public/hero";
import Work from "@/components/public/work";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface/75">
      <Hero />
      <About />
      <Work />
    </main>
  )
}