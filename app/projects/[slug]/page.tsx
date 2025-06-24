"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import ImageGallery from "../../components/ImageGallery"
import ClientLogos from "../../components/ClientLogos"

const projects = [
  {
    id: 1,
    name: "Sigma Rebate – Sanofi",
    description: "A payout system for managing pharmacy rebates.",
    images: [
      "/assets/Sigma-1.webp",
      "/assets/Sigma-2.webp",
      "/assets/Sigma-3.webp",
      "/assets/Sigma-4.webp",
      "/assets/Sigma-5.webp",
      "/assets/Sigma-6.webp",
      "/assets/Sigma-7.webp",
      "/assets/Sigma-8.webp",
    ],
    slug: "payout-system",
    details:
      "Sigma Rebate is a custom payout system developed for Sanofi, a leading healthcare company, to streamline and automate rebate payments for pharmacies. The platform ensures seamless rebate processing, secure transactions, and efficient data management.",
    myRole: [
      "My role focused on developing the frontend of the web application using Vue",
      "Integrated RESTful APIs to fetch and manage rebate data efficiently.",
      "Built dynamic CRUD operations for handling rebate records and pharmacy transactions.",
      "Translated Figma designs into a highly responsive and user-friendly UI, ensuring a smooth UX.",
      "Optimized frontend performance for a seamless experience across devices.",
    ],
    technologies: [
      "Vue",
      "Vue Router",
      "Typescript",
      "Axios",
      "RESTful APIs",
      "shadcn/vue",
      "Vuex",
      "Tailwind CSS",
      "CSS",
    ],
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
    images: ["/assets/mado-1.webp", "/assets/mado-2.webp", "/assets/mado-3.webp"],
    slug: "mado-ecommerce",
    details:
      "MadoEG is a fully functional e-commerce website developed using WordPress and WooCommerce, designed to support a high-volume online retail operation. The project required a complete end-to-end execution, and I led every stage of development — from digital marketing strategy and UI/UX design to full technical implementation.",
      myRole: [
        "Built a custom WordPress theme tailored for optimal performance and user engagement.",
        "Integrated Paymob and PayTabs for secure and seamless online payments.",
        "Managed a team of data entry specialists to upload and organize over 5,000 products across multiple categories.",
        "Created a mobile-responsive UI to ensure smooth shopping experiences across devices.",
        "Oversaw SEO optimization and marketing content to increase visibility and drive sales.",
      ],
    technologies: ["Platform: WordPress, WooCommerce", "Payment Integration: Paymob, PayTabs", "Tools: Elementor, TransaltePress, Yoast SEO", "Custom CSS"],
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
    description: "Official website for one of the top chess academies in Egypt and Africa",
    images: ["/assets/adly-1.webp", "/assets/adly-2.webp", "/assets/adly-3.webp", "/assets/adly-4.webp"],
    slug: "adly-chess-academy",
    details:
      "The Adly Chess Academy website was designed to represent one of the most prestigious chess institutions in Egypt and Africa. The goal was to deliver a bold, elegant, and professional digital presence that reflects the excellence and discipline of competitive chess players. I developed the site using WordPress and Elementor, starting from the lightweight Hello Elementor theme and transforming it into a fully customized design that felt both authentic and premium. Every design choice—from typography to layout—was made to align with the academy’s elite brand and appeal to a competitive audience.",
      myRole: [
        "Built a fully customized UI on top of a basic theme, pushing Elementor’s limits for a truly unique experience.",
        "Delivered a responsive, fast-loading website that balances aesthetics with performance.",
        "Created an intuitive layout that communicates professionalism while remaining engaging and accessible.",
      ],
      technologies: ["Platform: WordPress", "Page Builder: Elementor", "Theme: Hello Elementor (customized)", "Design: Custom UI/UX, bold visual identity, responsive layout", "Custom CSS"],
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
      description: "Innovative digital presence for a Portugal-based supplement brand",
      images: ["/assets/evolve-1.webp", "/assets/evolve-2.webp", "/assets/evolve-3.webp"],
      slug: "evolve",
      details:"Evolve is a pharmaceutical company founded in Portugal, providing innovative dietary supplements and cosmeceuticals for both children and adults. The goal was to build a sleek, modern product catalog website that reflects the brand’s scientific credibility and consumer trust.",
        myRole: [
          "Designed and developed the entire website using WordPress and Elementor.",
          "Created a custom “Products” post type using PHP to showcase items in a catalog-style layout.",
          "Developed fully responsive product templates to ensure smooth browsing on all devices.",
          "Implemented clean and elegant UI/UX design tailored to healthcare industry standards.",
          "Focused on performance, accessibility, and clear content hierarchy.",
        ],
        technologies: ["Platform: WordPress", "Page Builder: Elementor", "Custom Development: PHP, CSS (Custom Post Type for Products)", "Design: Responsive UI, product-centric layout, responsive layout"],
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
        images: ["/assets/bioxera-1.webp", "/assets/bioxera-2.webp"],
        slug: "bioxera-pharma",
        details:"Bioxera specializes in herbal wellness, nature-inspired cosmetics, and trusted pharmaceuticals. The brand needed a website that communicates sustainability, trust, and scientific elegance while acting as a professional catalog of its product range.",
          myRole: [
            "Developed the entire site using WordPress and Elementor with a custom visual identity.",
            "Built a tailored product catalog system via a Custom Post Type in PHP, enabling easy management of non-eCommerce product listings.",
            "Crafted a clean, responsive layout to reflect the brand’s natural and innovative ethos.",
            "Applied custom styling to product displays for better visual appeal and structure.",
            "Ensured the site performs efficiently across devices and browsers.",
          ],
          technologies: ["Platform: WordPress", "Page Builder: Elementor", "Custom Development: PHP, CSS (Custom Post Type for Products)", "Design: Natural, clean interface with responsive layout"],
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
          name: "Scope Plus - Advertising Agency",
          description: "Creative digital showcase for a full-service branding agency.",
          images: ["/assets/scope-1.webp", "/assets/scope-2.webp", "/assets/scope-3.webp", "/assets/scope-4.webp"],
          slug: "scope-plus",
          details:"Scope Plus is a dynamic advertising and publicity agency offering comprehensive services including creative design, printing, raised-letter installations, and outdoor branding. The website was built to reflect their bold visual identity and showcase their extensive portfolio in a vibrant and professional way. The design was carefully structured to balance visual impact and content clarity, helping visitors instantly understand the agency’s services and achievements.",
            myRole: [
              "Led the design and development of the entire website using WordPress and Elementor.",
              "Aligned the visual design with the brand’s identity, incorporating vibrant colors and bold layouts.",
              "Collected and curated visual assets that reflect the company’s work and appeal to their audience.",
              "Structured the content to highlight services, achievements, and recent projects clearly.",
              "Ensured full responsiveness and performance optimization for all screen sizes.",
            ],
            technologies: ["Platform: WordPress", "Page Builder: Elementor", "Design Process: Visual research, asset collection, client collaboration", "Styling: Custom layout and color palette inspired by brand guidelines", "Focus: Visual storytelling, responsive layout, clear content structure"],
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
    images: [
      "/assets/ecommerce-1.webp",
      "/assets/ecommerce-2.webp",
      "/assets/ecommerce-3.webp",
      "/assets/ecommerce-4.webp",
      "/assets/ecommerce-5.webp",
      "/assets/ecommerce-6.webp",
      "/assets/ecommerce-7.webp",
    ],
    slug: "ecommerce-fulfillment",
    details:
      "This platform helps eCommerce businesses track and enhance their delivery performance by visualizing key metrics like RTOs, shipment cycles, and fulfillment times. Integrated with multiple store platforms, it centralizes operations into a single AI-driven dashboard.",
  myRole: [
    "Worked as a Frontend Engineer building the UI using Vue.js.",
    "Integrated Laravel-based backend APIs to fetch and render logistics data.",
    "Visualized delivery performance data using interactive graphs and charts.",
    "Focused on responsiveness and dashboard clarity for interpreting large datasets.",
    "Collaborated with backend and design teams to streamline data flow and frontend logic."
  ],
  technologies: [
    "Vue",
    "Vue Router",
    "Axios",
    "Chart.js",
    "Laravel",
    "Tailwind CSS",
    "RESTful APIs",
    "Typescript",
    "CSS"
  ],
  },
]

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white pt-24"
    >
      <div className="container mx-auto px-5 sm:px-6 py-8 md:py-12">
        <Link href="/#projects" className="text-orange-500 hover:underline mb-6 md:mb-8 inline-block text-lg">
          &larr; Back to Projects
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight">{project.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-3">
          <div>
            <ImageGallery images={project.images} />
            <h3 className="text-xl mt-4 md:text-2xl font-semibold mb-3 md:mb-4">Technologies Used</h3>
            <ul className="list-disc list-inside mb-6 md:mb-8 text-lg leading-relaxed text-gray-200 pl-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="mb-1">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Project Details</h2>
            <p className="mb-6 md:mb-8 text-lg leading-relaxed text-gray-200">{project.details}</p>

            {/* Website Link - Only show if available */}
            {project.websiteUrl && (
              <div className="mb-8">
                <motion.a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white hover:text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Website</span>
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Key contributions included:</h3>
            <ul className="list-disc list-inside mb-6 md:mb-8 text-lg leading-relaxed text-gray-200 pl-2">
              {project.myRole &&
                project.myRole.map((role, index) => (
                  <li key={index} className="mb-1">
                    {role}
                  </li>
                ))}
            </ul>
            <ClientLogos logos={project.clientLogos || []} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

