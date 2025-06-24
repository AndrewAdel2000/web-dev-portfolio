"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: "Sigma Rebate – Sanofi",
    description: "A payout system for managing pharmacy rebates.",
    image: "/assets/Sigma-1.webp",
    slug: "payout-system",
    clientLogos: [
      {
        name: "Sigma Rebate",
        logo: "/assets/sigma-logo.svg",
      },
      {
        name: "Sanofi",
        logo: "/assets/sanofi-logo.webp",
      },
    ],
  },

  {
    id: 2,
    name: "MadoEG E-commerce",
    description: "MadoEG is a fully functional e-commerce website developed using WordPress and WooCommerce, designed to support a high-volume online retail operation.",
    image: "/assets/mado-1.webp",
    slug: "mado-ecommerce",
    clientLogos: [
      {
        name: "MadoEG",
        logo: "/assets/mado-logo.webp",
      },
    ],
    websiteUrl: "https://mado-eg.com",
  },

  {
    id: 3,
    name: "Adly Chess Academy",
    description: "Official website for one of the top chess academies in Egypt and Africa.",
    image: "/assets/adly-1.webp",
    slug: "adly-chess-academy",
    clientLogos: [
      {
        name: "Adly Chess Academy",
        logo: "/assets/adly-logo.webp",
      },
    ],
    websiteUrl: "https://adlychess.com",
  },
  {
    id: 4,
    name: "Evolve",
    description: "Innovative digital presence for a Portugal-based supplement brand.",
    image: "/assets/evolve-1.webp",
    slug: "evolve",
    clientLogos: [
      {
        name: "Evolve",
        logo: "/assets/evolve-logo.webp",
      },
    ],
    websiteUrl: "https://evolve.pt",
  },
  {
    id: 5,
    name: "Bioxera Pharma",
    description: "Bridging nature and science through a custom product catalog.",
    image: "/assets/bioxera-1.webp",
    slug: "bioxera-pharma",
    clientLogos: [
      {
        name: "Bioxera Pharma",
        logo: "/assets/bioxera-logo.webp",
      },
    ],
    websiteUrl: "https://bioxera-pharma.com",
  },
  {
    id: 6,
    name: "Scope Plus",
    description: "Creative digital showcase for a full-service branding agency.",
    image: "/assets/scope-1.webp",
    slug: "scope-plus",
    clientLogos: [
      {
        name: "Scope Plus",
        logo: "/assets/scope-logo.webp",
      },
    ],
    websiteUrl: "https://scopeplusagency.com",
  },

  {
    id: 7,
    name: "AI-Powered eCommerce Fulfillment Dashboard",
    description: "Smart tracking system for delivery performance and logistics metrics.",
    image: "/assets/ecommerce-1.webp",
    slug: "ecommerce-fulfillment",
    
  },
]

interface Project {
  id: number
  name: string
  description: string
  image: string
  slug: string
  websiteUrl?: string
  clientLogos?: {
    name: string
    logo: string
  }[]
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg h-full flex flex-col relative"
      whileHover={{ scale: 1.03 }}
    >
      {/* Website link badge - positioned outside the Link component */}
      {project.websiteUrl && (
        <div className="absolute top-3 right-3 z-10">
          <motion.a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white hover:text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()} // Prevent triggering the parent Link
          >
            <span>Visit</span>
            <ExternalLink size={14} />
          </motion.a>
        </div>
      )}
      
      <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
        <div className="relative h-52 sm:h-56 md:h-64">
          <Image src={project.image || "/placeholder.svg"} alt={project.name} layout="fill" objectFit="cover" />
        </div>
        <div className="p-5 md:p-7 flex-grow">
          <h3 className="text-2xl md:text-2xl font-semibold mb-3 text-orange-500">{project.name}</h3>
          <p className="text-gray-200 text-lg">{project.description}</p>
        </div>
        {project.clientLogos && project.clientLogos.length > 0 && (
          <div className="p-5 md:p-7 pt-0 md:pt-0">
            <p className="text-sm md:text-base text-gray-400 mb-3">Client Logo:</p>
            <div className="flex flex-wrap gap-3">
              {project.clientLogos.slice(0, 3).map((client, index) => (
                <div
                  key={index}
                  className="relative h-10 w-10 md:h-14 md:w-14 bg-gray-800 rounded-full overflow-hidden"
                >
                  <Image src={client.logo || "/placeholder.svg"} alt={client.name} layout="fill" objectFit="contain" />
                </div>
              ))}
              {project.clientLogos.length > 3 && (
                <div className="flex items-center justify-center h-10 w-10 md:h-14 md:w-14 bg-gray-800 rounded-full text-sm text-gray-300">
                  +{project.clientLogos.length - 3}
                </div>
              )}
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-black">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-12 md:mb-16 text-center tracking-tight"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl mt-6 text-center mb-6 md:mb-8 font-semibold"
        >
          To Be Continued...
        </motion.h2>
      </div>
    </section>
  )
}
