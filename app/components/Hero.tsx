"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-4"
      style={{
        backgroundImage: "url(/assets/Sphere.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Andrew Adel
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl text-orange-500 mb-6 md:mb-8 font-semibold"
        >
          WordPress & Vue.js Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 px-4 max-w-2xl mx-auto"
        >
          Creating stunning websites for +4 years
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgb(249, 115, 22)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-orange-600 transition duration-300 cursor-none"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              const projectsSection = document.getElementById("projects")
              const headerHeight = document.querySelector("header")?.offsetHeight || 0
              if (projectsSection) {
                const elementPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerHeight
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
            className="block w-full h-full hover:text-white"
          >
            View My Work
          </a>
        </motion.button>
      </motion.div>
    </section>
  )
}

