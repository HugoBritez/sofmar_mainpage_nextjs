import { useState } from 'react'
import { motion } from 'framer-motion'

interface Reason {
  title: string;
  description: string;
  icon: string;
}

const reasons: Reason[] = [
  {
    title: "Experiencia Comprobada",
    description: "Más de 10 años entregando soluciones de software de alta calidad.",
    icon: "🏆"
  },
  {
    title: "Innovación Constante",
    description: "Siempre a la vanguardia de las últimas tecnologías y tendencias.",
    icon: "💡"
  },
  {
    title: "Equipo Experto",
    description: "Profesionales altamente calificados y apasionados por la tecnología.",
    icon: "👥"
  },
  {
    title: "Soluciones Personalizadas",
    description: "Desarrollamos software adaptado a tus necesidades específicas.",
    icon: "🎯"
  },
  {
    title: "Soporte Continuo",
    description: "Asistencia y mantenimiento 24/7 para tu tranquilidad.",
    icon: "🔧"
  },
  {
    title: "Resultados Medibles",
    description: "Enfoque en KPIs y mejora continua para maximizar el ROI.",
    icon: "📊"
  }
]

export default function ReasonCards(): JSX.Element {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          6 Razones para Elegirnos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ReasonCard({ reason, index }: { reason: Reason; index: number }): JSX.Element {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="text-4xl mb-4">{reason.icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
        <p className="text-gray-600">{reason.description}</p>
      </div>
      <motion.div
        className="bg-blue-600 h-1"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}