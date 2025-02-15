import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Star } from 'lucide-react';

const PropsTable = () => {
  const propsData = [
    { 
      prop: "id", 
      type: "String", 
      desc: 'Identificador único del display (por defecto "1").', 
      predef: "1" 
    },
    { 
      prop: "pattern", 
      type: "String", 
      desc: 'Patrón del display (ej. "#####", "##:##:##").', 
      predef: "#####" 
    },
    { 
      prop: "textopredefinido", 
      type: "String", 
      desc: "Texto inicial que se mostrará en el display.", 
      predef: "TUTEC" 
    },
    { 
      prop: "width", 
      type: "Number", 
      desc: "Ancho del canvas (px).", 
      predef: 300 
    },
    { 
      prop: "height", 
      type: "Number", 
      desc: "Alto del canvas (px).", 
      predef: 180 
    },
    { 
      prop: "colorOn", 
      type: "String", 
      desc: "Color de los segmentos activos.", 
      predef: "#4d91cd" 
    },
    { 
      prop: "colorOff", 
      type: "String", 
      desc: "Color de los segmentos inactivos.", 
      predef: "#53595e45" 
    },
    { 
      prop: "cantidadSegmentos", 
      type: "Number", 
      desc: "Cantidad de segmentos. Solo puede ser 7, 14 o 16. Con 7 segmentos, solo se pueden mostrar caracteres básicos (por ejemplo: 0-9, A, C, E, F). Con 14 o 16 segmentos se pueden representar caracteres alfanuméricos completos y símbolos (ej. letras con curvas o símbolos especiales).", 
      predef: 14 
    },
    { 
      prop: "altoDisplay", 
      type: "Number", 
      desc: "Altura de los dígitos.", 
      predef: 23.5 
    },
    { 
      prop: "anchoDisplay", 
      type: "Number", 
      desc: "Ancho de los dígitos.", 
      predef: 14.5 
    },
    { 
      prop: "distanciaEntreDigitos", 
      type: "Number", 
      desc: "Espacio entre los dígitos.", 
      predef: 2.5 
    },
    { 
      prop: "anchoSegmento", 
      type: "Number", 
      desc: "Ancho de los segmentos.", 
      predef: 3 
    },
    { 
      prop: "distanciaSegmento", 
      type: "Number", 
      desc: "Distancia entre los segmentos.", 
      predef: 0.3 
    },
    { 
      prop: "tipoBorde", 
      type: "Number", 
      desc: "Tipo de borde permitido (0, 1, 2 o 3).", 
      predef: 3 
    },
    { 
      prop: "anguloDisplay", 
      type: "Number", 
      desc: "Ángulo de inclinación del display.", 
      predef: 6 
    }
  ];

  return (
    <motion.div 
      className="flex justify-center" 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ delay: 0.8 }}
    >
      <Card className="mb-8 w-full max-w-2xl bg-gray-800 text-gray-100 mx-auto">
        <CardHeader>
          <CardTitle>
            <Star className="inline-block mr-2" />
            Props del Componente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Todos los props del componente son opcionales, excepto el "id", el cual se usa para generar múltiples instancias.
            Los valores predefinidos son los siguientes:
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">Propiedad</TableHead>
                <TableHead className="text-gray-300">Tipo</TableHead>
                <TableHead className="text-gray-300">Descripción</TableHead>
                <TableHead className="text-gray-300">Valor Predefinido</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propsData.map((row, index) => (
                <TableRow 
                  key={index} 
                  className="border-b border-gray-700 group"
                >
                  <TableCell className="bg-black font-medium text-gray-300 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.prop}
                  </TableCell>
                  <TableCell className="bg-black text-gray-400 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.type}
                  </TableCell>
                  <TableCell className="bg-black text-gray-400 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.desc}
                  </TableCell>
                  <TableCell className="bg-black text-gray-400 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.predef}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropsTable;
