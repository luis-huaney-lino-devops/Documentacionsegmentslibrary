"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Code } from "lucide-react";

import { motion } from "framer-motion";
import QuickAccessPanel from "../seccion/QuickAccessPanel";
import ExampleSection from "../seccion/ExampleSection";
import CreatorSection from "../seccion/CreatorSection";
import PropsTable from "../seccion/PropsTable";
import HeaderSection from "../seccion/header";
import { Button } from "@/components/ui/button";
import CodeBlock from "../components/code";
import DescriptionCard from "../seccion/Descripcion";

export default function SegmentsDocumentation() 

{
  
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto px-4 relative">
<HeaderSection/>
    

        <QuickAccessPanel />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-10"
        >
          <div className="mb-8 w-full max-w-2xl  mx-auto"><h1 className="text-4xl font-bold mb-6 tracking-tighter px-1 bg-clip-text inline-block text-transparent bg-gradient-to-r from-slate-400 to-slate-600 text-center">
            Documentación del Componente Segments
          </h1></div>
          
          <motion.div 
    className="flex flex-wrap gap-4 mb-6 justify-center bg-transparent"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <a 
      href="https://github.com/luis-huaney-lino-devops/SegmentsLibrary"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="text-sm bg-gradient-to-r from-slate-400 to-slate-600">
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
        GitHub
      </Button>
    </a>
    <a 
      href="https://www.npmjs.com/package/segmentslibrary?activeTab=readme"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="text-sm bg-gradient-to-r from-slate-400 to-slate-600">
        <Package className="mr-1 h-4 w-4 text-inherit" />
        npm
      </Button>
    </a>
  </motion.div>


          {/* Tarjeta de Descripción */}

          <DescriptionCard/>

          {/* Tarjeta de Instalación */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <Card className="mb-8 w-full max-w-2xl bg-gray-800 text-gray-100 mx-auto">
              <CardHeader>
                <CardTitle>
                  <Code className="inline-block mr-2" />
                  Instalación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Para usar este componente en tu proyecto, primero instala la librería:</p>
                <pre className="bg-gray-700 p-4 rounded-md overflow-x-auto">
                  <CodeBlock language="bash" code={`$ npm install segmentslibrary`}></CodeBlock>

                </pre>
                <p className="mt-4 mb-2">Luego, impórtalo en tu código:</p>
                <pre className="bg-gray-700 p-4 rounded-md overflow-x-auto">
                <CodeBlock language="jsx" code={`import React from 'react';

import Segments from 'segmentslibrary';
export function App(props) {
  return (
    <div className='App'>
     <Segments/>
    </div>
  );
}`} />
                </pre>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tarjeta de Props */}
          <PropsTable/>

          <ExampleSection />

          <CreatorSection />
        </motion.div>
      </div>
    </div>
  );
}
