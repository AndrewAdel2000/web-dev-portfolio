"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface ClientLogo {
  name: string
  logo: string
}

interface ClientLogosProps {
  logos: ClientLogo[]
}

export default function ClientLogos({ logos }: ClientLogosProps) {
  if (!logos || logos.length === 0) {
    return null
  }

  return (
    <div className="mt-8 md:mt-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5">Client Logo</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {logos.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 w-24 p-4 md:p-5 rounded-3xl flex items-center justify-center"
          >
            <div className="relative h-14 md:h-18 w-full">
              <Image src={client.logo || "/placeholder.svg"} alt={client.name} layout="fill" objectFit="contain" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

