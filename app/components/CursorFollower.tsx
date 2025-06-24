'use client'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [isTouch, setIsTouch] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent | TouchEvent) => {
      let x, y
      if ('touches' in e) {
        setIsTouch(true)
        x = e.touches[0].clientX
        y = e.touches[0].clientY
      } else {
        setIsTouch(false)
        x = e.clientX
        y = e.clientY
      }
      mouseX.set(x - 16)
      mouseY.set(y - 16)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', updatePosition, { passive: true })
    window.addEventListener('touchmove', updatePosition, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('touchmove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-orange-500 bg-opacity-50 pointer-events-none z-50 hidden md:block flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: isTouch ? 2 : 1,
      }}
      transition={{
        scale: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <div className="w-2 h-2 bg-orange-500 rounded-full" />
    </motion.div>
  )
}

