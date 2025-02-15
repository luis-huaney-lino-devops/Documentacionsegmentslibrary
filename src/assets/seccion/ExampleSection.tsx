"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CodeBlock from "../components/code";
import { Code } from "lucide-react";
import LenguajeDevolvedor from "../data/DevolvedorDatosIdioma";





interface ExampleCardProps {
  title: string;
  code: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
}

const ExampleCard = ({ title, code, imageSrc, imageAlt, description }: ExampleCardProps) => (
  <div className="mb-8 space-y-4">
    <h3 className="text-xl font-semibold">{title}</h3>
    {description && <p className="text-gray-300">{description}</p>}
    <CodeBlock language="jsx" code={code} />
    <div className="mt-6 flex justify-center bg-gray-800 rounded-lg p-4">
      <LazyLoadImage
        src={imageSrc}
        alt={imageAlt}
       
        className="rounded-md max-w-full h-auto"
        wrapperClassName="w-full"
      />
    </div>
  </div>
)

export default function ExampleSection() {
  const examples = [
    {
      title:  LenguajeDevolvedor(30),
      description: LenguajeDevolvedor(31),
      code: `import React, { useState, useEffect } from 'react';
import Segments from 'segmentslibrary';

const DigitalClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const formatTime = (date) => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return \`\${hours}:\${minutes}:\${seconds}\`;
    };

    setTime(formatTime(new Date()));
    const intervalId = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Segments
      id="reloj"
      textopredefinido={time}
      pattern="##:##:##"
      width={400}
      height={200}
      colorOn="#ff5555"
      colorOff="#33333330"
      altoDisplay={30}
      anchoDisplay={18}
      distanciaEntreDigitos={3}
      anchoSegmento={3.5}
      cantidadSegmentos={7}
      anguloDisplay={7}
    />
  );
}
export default DigitalClock  
;`,
      imageSrc: "/examples/reloj.png",
      imageAlt: "Digital Clock Example"
    },
    {
      title: LenguajeDevolvedor(32),
      description: LenguajeDevolvedor(33),
      code: `import React, { useState, useEffect } from 'react'; 
import Segments from 'segmentslibrary';

const AnimatedSegments = ({
  text = "TUTEC",
  animationSpeed = 500,
  blinkCount = 2,
  id = "animated"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [blinkPhase, setBlinkPhase] = useState(0);

  useEffect(() => {
    const animate = () => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        setIndex(prev => prev + 1);
      } else if (blinkPhase < blinkCount * 2) {
        setDisplayText(blinkPhase % 2 === 0 ? '     ' : text);
        setBlinkPhase(prev => prev + 1);
      } else {
        setIndex(0);
        setBlinkPhase(0);
      }
    };

    const intervalId = setInterval(animate, animationSpeed);
    return () => clearInterval(intervalId);
  }, [text, animationSpeed, blinkCount, index, blinkPhase]);

  return (
    <Segments
      id={id}
      textopredefinido={displayText}
      pattern="#####"
      width={300}
      height={180}
      colorOn="#4d91cd"
      colorOff="#53595e45"
      cantidadSegmentos={14}
      altoDisplay={23.5}
      anchoDisplay={14.5}
      distanciaEntreDigitos={2.5}
      anchoSegmento={3}
      distanciaSegmento={0.3}
      tipoBorde={3}
      anguloDisplay={6}
    />
  );
}
export default AnimatedSegments  
;`,
      imageSrc: "/examples/animacion.png",
      imageAlt: "Animated Segments Example"
    },
    {
      title: LenguajeDevolvedor(34),
      description: LenguajeDevolvedor(35),
      code: `import React, { useState } from 'react';
import Segments from 'segmentslibrary';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <Segments
        id="counter"
        textopredefinido={count.toString().padStart(4, '0')}
        pattern="####"
        width={250}
        height={150}
        colorOn="#50c878"
        colorOff="#33333330"
        cantidadSegmentos={7}
        altoDisplay={25}
        anchoDisplay={15}
        tipoBorde={2}
      />
      <div className="flex gap-2 justify-center">
        <button 
          onClick={() => setCount(prev => Math.max(0, prev - 1))}
          className="px-4 py-2 bg-red-500 rounded"
        >
          -
        </button>
        <button 
          onClick={() => setCount(prev => Math.min(9999, prev + 1))}
          className="px-4 py-2 bg-green-500 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter  
;`,
      imageSrc: "/examples/contador.png",
      imageAlt: "Counter Example"
    },
    {
      title: LenguajeDevolvedor(36),
      description: LenguajeDevolvedor(37),
      code: `// Ejemplo 1: Corrección automática de cantidadSegmentos
<Segments cantidadSegmentos={10} />  // Se corregirá a 7

// Ejemplo 2: Validación de pattern
<Segments 
  textopredefinido="123456"
  pattern="####"  // Solo mostrará los primeros 4 dígitos
/>

// Ejemplo 3: Manejo de caracteres no válidos
<Segments 
  textopredefinido="ABC123"
  cantidadSegmentos={7}  // Solo mostrará números y algunos caracteres
/>

// Ejemplo 4: Valores por defecto
<Segments />  // Usará valores predeterminados seguros`,
      imageSrc: "/examples/default.png",
      imageAlt: "Error Handling Examples"
    }
  ]

  return (
    <motion.div 
      className="flex justify-center" 
      id="ejemplos" 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ delay: 1 }}
    >
      <Card className="mb-8 w-full max-w-2xl bg-gray-800 text-gray-100 mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Code className="mr-2" />
            {LenguajeDevolvedor(29)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              title={Array.isArray(example.title) ? example.title.join(' ') : example.title ?? ''}
              description={Array.isArray(example.description) ? example.description.join(' ') : example.description}
              code={example.code}
              imageSrc={example.imageSrc}
              imageAlt={example.imageAlt}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}