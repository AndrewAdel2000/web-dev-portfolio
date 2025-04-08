'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

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
      setPosition({ x, y })
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('touchmove', updatePosition)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('touchmove', updatePosition)
    }
  }, [])

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-orange-500 bg-opacity-50 pointer-events-none z-50 hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isTouch ? 2 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  )
}

