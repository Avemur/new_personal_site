"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // DPR scaling for crisp lines
    const setCanvasSize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // Mouse tracking
    let mouseX = -1e5
    let mouseY = -1e5
    let mouseActive = false

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      mouseActive = true
    }
    const handleMouseLeave = () => {
      mouseActive = false
      mouseX = -1e5
      mouseY = -1e5
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    type Particle = {
      x: number
      y: number
      vx: number
      vy: number
    }

    const particles: Particle[] = []
    const initParticles = () => {
      particles.length = 0
      const area = window.innerWidth * window.innerHeight
      const density = 0.00012 // particles per px
      const count = Math.max(60, Math.min(180, Math.floor(area * density)))
      for (let i = 0; i < count; i++) {
        const speed = 0.2 + Math.random() * 0.6
        const angle = Math.random() * Math.PI * 2
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        })
      }
    }

    initParticles()

    let rafId = 0

    const maxLinkDist = 140
    const mouseLinkDist = 160
    const mouseForce = 0.03 // attraction strength
    const friction = 0.995

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (mouseActive) {
          const dx = mouseX - p.x
          const dy = mouseY - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < mouseLinkDist && dist > 0.001) {
            const ax = (dx / dist) * mouseForce
            const ay = (dy / dist) * mouseForce
            p.vx = (p.vx + ax) * friction
            p.vy = (p.vy + ay) * friction
          } else {
            p.vx *= friction
            p.vy *= friction
          }
        } else {
          p.vx *= friction
          p.vy *= friction
        }

        p.x += p.vx
        p.y += p.vy

        // wrap-around edges
        if (p.x < -10) p.x = window.innerWidth + 10
        else if (p.x > window.innerWidth + 10) p.x = -10
        if (p.y < -10) p.y = window.innerHeight + 10
        else if (p.y > window.innerHeight + 10) p.y = -10
      }

      // Links
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < maxLinkDist) {
            const alpha = 0.25 * (1 - d / maxLinkDist)
            ctx.strokeStyle = `rgba(120, 120, 150, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Mouse links and highlight
      if (mouseActive) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const dx = p.x - mouseX
          const dy = p.y - mouseY
          const d = Math.hypot(dx, dy)
          if (d < mouseLinkDist) {
            const alpha = 0.35 * (1 - d / mouseLinkDist)
            ctx.strokeStyle = `rgba(160, 160, 200, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.fillStyle = "rgba(150, 150, 190, 0.35)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else {
        rafId = requestAnimationFrame(step)
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("visibilitychange", handleVisibility)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
