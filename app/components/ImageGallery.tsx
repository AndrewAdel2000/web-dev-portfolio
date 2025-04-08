"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4 md:space-y-5">
      <div className="relative h-[220px] sm:h-[320px] md:h-[380px] lg:h-[360px] w-full overflow-hidden rounded-lg">
        <AnimatePresence initial={false}>
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`Project screenshot ${selectedImage + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex space-x-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer rounded-lg overflow-hidden flex-shrink-0 ${
              index === selectedImage ? "ring-2 ring-orange-500" : ""
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              width={90}
              height={90}
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

