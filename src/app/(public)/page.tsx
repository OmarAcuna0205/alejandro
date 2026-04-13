import About from "@/components/public/about";
import Hero from "@/components/public/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Hero />
      <About />
    </main>
  )
}