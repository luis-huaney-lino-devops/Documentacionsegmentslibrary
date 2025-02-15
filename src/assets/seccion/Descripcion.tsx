import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Book } from 'lucide-react';

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          whileHover={{ 
            scale: 1.5,
            color: '#60A5FA',
            rotate: 5,
            transition: { 
              duration: 0.3,
              type: "spring",
              stiffness: 300
            }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

const ExpandableSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ height: "auto" }}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: "rgba(96, 165, 250, 0.1)",
        transition: { duration: 0.3 }
      }}
      className="p-4 rounded-lg"
    >
      {children}
    </motion.div>
  );
};

const DescriptionCard = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="mb-8 w-full max-w-2xl bg-gray-800 text-gray-100 mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Book className="text-blue-400" />
            </motion.div>
            <AnimatedText text="Segments Display" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ExpandableSection>
            <p className="mb-4">
              <AnimatedText 
                text="Segments es la joya de la visualización digital: combina el encanto de los displays clásicos con tecnología moderna, ofreciendo flexibilidad y estilo inigualables."
              />
            </p>
          </ExpandableSection>

          <ExpandableSection>
            <h3 className="text-xl mb-3 text-blue-400">
              <AnimatedText text="Características Destacadas" />
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <AnimatedText 
                  text="Configuración versátil: elige entre 7, 14 o 16 segmentos, adaptándose a distintos niveles de detalle."
                />
              </li>
              <li>
                <AnimatedText 
                  text="Personalización avanzada: controla colores, tamaños, ángulos y espaciados para lograr el look perfecto."
                />
              </li>
              <li>
                <AnimatedText 
                  text="Compatibilidad universal: ideal para dashboards, IoT, paneles de control y más."
                />
              </li>
            </ul>
          </ExpandableSection>

          <ExpandableSection>
            <h3 className="text-xl mb-3 text-blue-400">
              <AnimatedText text="Aplicaciones Prácticas" />
            </h3>
            <p className="mb-4">
              <AnimatedText text="Perfecto para:" />
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <AnimatedText text="Displays de temperatura y humedad" />
              </li>
              <li>
                <AnimatedText text="Paneles de control industriales" />
              </li>
              <li>
                <AnimatedText text="Indicadores en aplicaciones web" />
              </li>
            </ul>
          </ExpandableSection>

          <ExpandableSection>
            <h3 className="text-xl mb-3 text-blue-400">
              <AnimatedText text="Ventajas Técnicas" />
            </h3>
            <p className="mb-4">
              <AnimatedText 
                text="Rendimiento optimizado y fácil integración en proyectos React, con arquitectura modular para una personalización sin límites."
              />
            </p>
          </ExpandableSection>

          <ExpandableSection>
            <p className="text-sm text-gray-400 italic">
              <AnimatedText 
                text="Nota: Compatible con las últimas versiones de React y optimizado para rendimiento en móviles."
              />
            </p>
          </ExpandableSection>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DescriptionCard;
