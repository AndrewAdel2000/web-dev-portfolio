'use client'
import { motion } from 'framer-motion'

const webElements = [
  '<div>', '</div>', '<p>', '</p>', '<a>', '</a>', 'function()', 'const', 'let', 'var',
  'if ()', 'for ()', 'while ()', 'return', 'import', 'export', 'class', '{}', '[]', '()',
  'async', 'await', 'try', 'catch', 'useState', 'useEffect', 'component', '<React.Fragment>',
]

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {webElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-800 text-opacity-20 select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {element}
        </motion.div>
      ))}
    </div>
  )
}

