"use client"
import { motion } from "framer-motion"
import { useState, type FormEvent, type ChangeEvent } from "react"
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      // Using a mock email service for v0 preview
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "andrewadelaa1@gmail.com",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Form submitted successfully:", formData)
        setSubmitStatus({
          success: true,
          message: "Your message has been received! (Note: In the preview, emails are not actually sent)",
        })
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(data.message || "Something went wrong")
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-gray-900">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-12 md:mb-16 text-center tracking-tight"
        >
          Work With Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="flex-1"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-300">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 text-white text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-300">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 text-white text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-300">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-gray-800 border border-gray-700 text-white text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3"
                placeholder="Your message"
              ></motion.textarea>
            </div>

            {submitStatus.message && (
              <div
                className={`mb-5 p-4 rounded text-lg ${
                  submitStatus.success ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full w-full transition duration-300 text-lg ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className="text-3xl font-semibold mb-8 text-orange-500">Connect With Me</h3>
            <div className="space-y-7">
              <motion.a
                href="https://www.linkedin.com/in/andrew-adel-641399197/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-gray-200 hover:text-orange-500 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gray-800 p-4 rounded-full">
                  <FaLinkedin size={28} />
                </div>
                <span className="text-xl">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/AndrewAdel2000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-gray-200 hover:text-orange-500 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gray-800 p-4 rounded-full">
                  <FaGithub size={28} />
                </div>
                <span className="text-xl">GitHub</span>
              </motion.a>

              <motion.a
                href="https://wa.me/+201023738484"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-gray-200 hover:text-orange-500 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gray-800 p-4 rounded-full">
                  <FaWhatsapp size={28} />
                </div>
                <span className="text-xl">WhatsApp</span>
              </motion.a>

              <motion.a
                href="tel:+201023738484"
                className="flex items-center gap-5 text-gray-200 hover:text-orange-500 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gray-800 p-4 rounded-full">
                  <FaPhone size={28} />
                </div>
                <span className="text-xl">Call Me</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

