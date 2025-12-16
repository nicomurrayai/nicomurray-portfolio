"use client" // Necesario para usar useEffect y useRef
import React, { useEffect, useRef } from "react"

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Configuración de las partículas
    const particles: { x: number; y: number; dx: number; dy: number; size: number }[] = []
    const particleCount = 50 // Cantidad de partículas

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.5, // Velocidad X lenta
          dy: (Math.random() - 0.5) * 0.5, // Velocidad Y lenta
          size: Math.random() * 2 + 0.5, // Tamaño aleatorio
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)" // Color blanco semi-transparente

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Actualizar posición
        p.x += p.dx
        p.y += p.dy

        // Rebote suave en los bordes (o reaparición)
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    // Inicialización
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    createParticles()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* 1. Orbes Difuminados (Gradientes) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-800/30 rounded-full blur-[120px] mix-blend-screen" />
      
      {/* 2. Capa de Partículas (Canvas) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}

export default BackgroundEffect