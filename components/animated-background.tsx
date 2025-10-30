"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const dots: { x: number; y: number; baseY: number; speed: number; amplitude: number; size: number }[] = []
    const spacing = 40
    const cols = Math.ceil(canvas.width / spacing)
    const rows = Math.ceil(canvas.height / spacing)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: i * spacing,
          y: j * spacing,
          baseY: j * spacing,
          speed: 0.002 + Math.random() * 0.003,
          amplitude: 5 + Math.random() * 10,
          size: 1 + Math.random() * 2,
        })
      }
    }

    let time = 0

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 1

      dots.forEach((dot) => {
        dot.y = dot.baseY + Math.sin(time * dot.speed + dot.x * 0.015) * dot.amplitude

        ctx.fillStyle = "rgba(100, 100, 120, 0.2)"
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
