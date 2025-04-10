"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-gray-900">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-12 md:mb-16 text-center tracking-tight"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-56 h-[300px] md:w-72 md:h-[500px] relative rounded-full shadow-lg shadow-orange-500/50 overflow-hidden"
          >
            <Image
              src="/assets/Andrew.webp?height=256&width=256"
              alt="Andrew's profile picture"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-orange-500">Hi, I'm Andrew</h3>
            <p className="text-gray-200 mb-4 md:mb-5 text-lg leading-relaxed">
              I’m a passionate <strong>Software Engineer and Web Developer</strong> with <strong>4 years of experience</strong> specializing in <strong>WordPress</strong> and <strong>Vue.js</strong>. I thrive on creating beautiful, functional, and impactful websites that help businesses grow and succeed online.
            </p>
            <p className="text-gray-200 mb-6 md:mb-8 text-lg leading-relaxed">
              My journey began with <strong>WordPress</strong>, where I honed my skills in developing custom themes and plugins, delivering tailored solutions for diverse business needs. As my career progressed, I embraced modern <strong>JavaScript frameworks like Vue.js</strong>, enabling me to build dynamic and interactive web applications. I’ve also developed frontend systems for large companies using cutting-edge tools, focusing on efficiency, scalability, and seamless user experiences.
            </p>
            <p className="text-gray-200 mb-6 md:mb-8 text-lg leading-relaxed">
              I’m committed to crafting innovative, user-friendly, and performance-driven solutions that drive business success.
            </p>
            <motion.a
              href="/assets/Andrew_Adel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition duration-300"
            >
              Download My Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

