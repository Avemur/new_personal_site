"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Track mouse position relative to the canvas for interactive effects
    let mouseX = -10000
    let mouseY = -10000

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = -10000
      mouseY = -10000
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

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

      time += 1.5

      const influenceRadius = 120 // pixels
      const maxPush = 14 // pixels

      dots.forEach((dot) => {
        // baseline wave motion on Y
        dot.y = dot.baseY + Math.sin(time * dot.speed + dot.x * 0.015) * dot.amplitude

        // compute interactive displacement
        let renderX = dot.x
        let renderY = dot.y
        const dx = renderX - mouseX
        const dy = renderY - mouseY
        const dist = Math.hypot(dx, dy)
        if (dist > 0 && dist < influenceRadius) {
          const strength = (influenceRadius - dist) / influenceRadius
          const push = maxPush * strength
          renderX += (dx / dist) * push
          renderY += (dy / dist) * push
        }

        ctx.fillStyle = "rgba(100, 100, 120, 0.25)"
        ctx.beginPath()
        ctx.arc(renderX, renderY, dot.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
