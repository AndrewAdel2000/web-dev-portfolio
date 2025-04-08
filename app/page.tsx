import Hero from "./components/Hero"
import About from "./components/About"
import dynamic from "next/dynamic"
const Projects = dynamic(() => import("./components/Projects"), { ssr: false })
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

