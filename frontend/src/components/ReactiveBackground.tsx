import { useEffect, useRef } from 'react'

const ReactiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = [
      { r: 188, g: 176, b: 245 }, // soft lavender
      { r: 147, g: 219, b: 245 }, // soft blue
      { r: 179, g: 229, b: 179 }, // soft green
      { r: 253, g: 224, b: 71 },  // soft yellow
    ]

    let targetScroll = 0
    let currentScroll = 0

    const handleScroll = () => {
      targetScroll = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    const animate = () => {
      currentScroll += (targetScroll - currentScroll) * 0.05

      const scrollProgress = (currentScroll % 1000) / 1000
      const colorIndex = Math.floor(scrollProgress * colors.length)
      const nextColorIndex = (colorIndex + 1) % colors.length

      const currentColor = colors[colorIndex]
      const nextColor = colors[nextColorIndex]

      const blend = (scrollProgress * colors.length) % 1
      const r = Math.round(currentColor.r + (nextColor.r - currentColor.r) * blend)
      const g = Math.round(currentColor.g + (nextColor.g - currentColor.g) * blend)
      const b = Math.round(currentColor.b + (nextColor.b - currentColor.b) * blend)

      const gradientAngle = (currentScroll * 0.1) % 360
      const angleRad = (gradientAngle * Math.PI) / 180

      const x1 = canvas.width / 2 + Math.cos(angleRad) * canvas.width
      const y1 = canvas.height / 2 + Math.sin(angleRad) * canvas.height
      const x2 = canvas.width / 2 - Math.cos(angleRad) * canvas.width
      const y2 = canvas.height / 2 - Math.sin(angleRad) * canvas.height

      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)

      gradient.addColorStop(0, `rgba(9, 9, 11, 1)`)
      gradient.addColorStop(0.25, `rgba(${Math.floor(r * 0.3)}, ${Math.floor(g * 0.3)}, ${Math.floor(b * 0.3)}, 0.08)`)
      gradient.addColorStop(0.5, `rgba(${Math.floor(r * 0.35)}, ${Math.floor(g * 0.35)}, ${Math.floor(b * 0.35)}, 0.05)`)
      gradient.addColorStop(0.75, `rgba(${Math.floor(r * 0.3)}, ${Math.floor(g * 0.3)}, ${Math.floor(b * 0.3)}, 0.08)`)
      gradient.addColorStop(1, `rgba(9, 9, 11, 1)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const radialGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.6
      )
      
      radialGradient.addColorStop(0, `rgba(${Math.floor(r * 0.5)}, ${Math.floor(g * 0.5)}, ${Math.floor(b * 0.5)}, 0.06)`)
      radialGradient.addColorStop(0.5, `rgba(${Math.floor(r * 0.3)}, ${Math.floor(g * 0.3)}, ${Math.floor(b * 0.3)}, 0.03)`)
      radialGradient.addColorStop(1, `rgba(9, 9, 11, 0)`)

      ctx.fillStyle = radialGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}

export default ReactiveBackground
