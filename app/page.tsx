import Presentation from "@/components/Presentation"
import Projects from "@/components/Projects"
import BackgroundEffect from "@/components/BackgroundEffect" // Importamos el componente

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Fondo animado (se renderiza detrás gracias a z-index negativo en el componente) */}
      <BackgroundEffect />

      {/* Contenido de la página */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-16">
        <Presentation />
        <Projects />
      </div>
    </main>
  )
}