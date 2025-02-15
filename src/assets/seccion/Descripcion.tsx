import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Book } from 'lucide-react';
import LenguajeDevolvedor from '../data/DevolvedorDatosIdioma';

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
  // Función auxiliar que garantiza devolver un string.
  const safeText = (pos: number): string => {
    const result = LenguajeDevolvedor(pos);
    if (typeof result === "string") return result;
    if (Array.isArray(result)) return result.join(" ");
    return "";
  };

  return (
    <motion.div
      id="descripcion"
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
            <AnimatedText text={safeText(7)} />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ExpandableSection>
            <p className="mb-4">
              <AnimatedText text={safeText(8)} />
            </p>
          </ExpandableSection>

          <ExpandableSection>
            <h3 className="text-xl mb-3 text-blue-400">
              <AnimatedText text={safeText(9)} />
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <AnimatedText text={safeText(10)} />
              </li>
              <li>
                <AnimatedText text={safeText(11)} />
              </li>
              <li>
                <AnimatedText text={safeText(12)} />
              </li>
            </ul>
          </ExpandableSection>

          <ExpandableSection>
            <h3 className="text-xl mb-3 text-blue-400">
              <AnimatedText text={safeText(13)} />
            </h3>
            <p className="mb-4">
              <AnimatedText text={safeText(14)} />
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <AnimatedText text={safeText(15)} />
              </li>
              <li>
                <AnimatedText text={safeText(16)} />
              </li>
              <li>
                <AnimatedText text={safeText(17)} />
              </li>
            </ul>
          </ExpandableSection>

          <ExpandableSection>
            <h3 className="text-xl mb-3 text-blue-400">
              <AnimatedText text={safeText(18)} />
            </h3>
            <p className="mb-4">
              <AnimatedText text={safeText(19)} />
            </p>
          </ExpandableSection>

          <ExpandableSection>
            <p className="text-sm text-gray-400 italic">
              <AnimatedText text={safeText(20)} />
            </p>
          </ExpandableSection>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DescriptionCard;
