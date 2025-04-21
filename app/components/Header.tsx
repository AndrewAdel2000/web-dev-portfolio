"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isProjectPage = pathname.includes("/projects/")

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "About Me", path: isProjectPage ? "/#about" : "about" },
    { name: "My Projects", path: isProjectPage ? "/#projects" : "projects" },
    { name: "Contact Me", path: isProjectPage ? "/#contact" : "contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()

    // If we're on a project page, use the Next.js router to navigate
    if (isProjectPage) {
      router.push(path)
      return
    }

    // Close the mobile menu first
    if (isMobile) {
      setIsMenuOpen(false)
    }

    // Small delay to ensure menu closing animation doesn't interfere with scrolling
    setTimeout(
      () => {
        // If we're on the home page, handle smooth scrolling
        const element = document.getElementById(path)
        if (element) {
          // Get the header height to offset the scroll position
          const headerHeight = document.querySelector("header")?.offsetHeight || 0
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      },
      isMobile ? 300 : 0,
    ) // Add a delay for mobile to allow menu to close first
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-black bg-opacity-80 z-50"
    >
      <div className="container mx-auto px-4 py-3">
        {/* Mobile Header */}
        <div className="flex justify-between items-center md:hidden">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white">Andrew Adel</span>
            <span className="text-sm text-orange-500">Web Developer</span>
          </div>

          <button
            className="menu-button text-white p-1 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu md:hidden mt-4 bg-gray-900 rounded-lg overflow-hidden"
            >
              <ul className="py-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                    className="px-4 py-3"
                  >
                    <a
                      href={isProjectPage ? item.path : `#${item.path}`}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className="text-white hover:text-orange-500 transition duration-300 text-lg font-medium block w-full"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex justify-center space-x-10">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={isProjectPage ? item.path : `#${item.path}`}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-white hover:text-orange-500 transition duration-300 text-lg font-medium px-2 py-1 cursor-pointer"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

