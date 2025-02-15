"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Github, Link2 } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const CreatorSection = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const apiUrl = "https://api.github.com/users/luis-huaney-lino-devops";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        setAvatarUrl(data.avatar_url);
      })
      .catch((error) => {
        console.error("Error al consumir la API:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="w-full border-4 border-gray-300 bg-gray-800 text-gray-100 shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <User className="mr-2 h-6 w-6" />
            Sobre el Creador
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Contenedor responsivo: imagen arriba en móvil y a la izquierda en desktop */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              {loading ? (
                <div className="w-32 h-32 flex items-center justify-center">
                  <span className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 w-12 h-12"></span>
                </div>
              ) : (
                <LazyLoadImage
                  src={avatarUrl || ""}
                  alt="Avatar del creador"
                  width={128}
                  height={128}
                  className={`rounded-full transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  afterLoad={() => setImageLoaded(true)}
                />
              )}
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-xl font-semibold">Luis Huaney Lino</h3>
              <p className="text-gray-400 text-base">
                Desarrollador Full Stack , DevOps & Creador de Segments
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a
                    href="mailto:martinlinohuaney@gmail.com"
                    className="text-blue-400 hover:underline text-base"
                  >
                    martinlinohuaney@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-5 w-5 text-gray-400" />
                  <a
                    href="https://github.com/luis-huaney-lino-devops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-base"
                  >
                    @luis-huaney-lino-devops
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Link2 className="h-5 w-5 text-green-400" />
                  <a
                    href="https://portafolio.tutec.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-base"
                  >
                    Portafolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Descripción */}
          <div className="mt-6">
  <p className="text-base">
    Creé Segments con la misión de simplificar la implementación de displays segmentados en aplicaciones web modernas, ofreciendo una solución ágil y personalizable que transforma la interfaz de usuario.
  </p>
  <p className="mt-3 text-base">
    Esta herramienta nació de mi pasión por desarrollar recursos innovadores que potencian la experiencia del desarrollador, permitiendo que la creatividad y la eficiencia se reflejen en cada proyecto.
  </p>
</div>

        </CardContent>
      </Card>
    </motion.div>
  );
};

const LicenseSection = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="w-full border-4 border-gray-300 bg-gray-900 text-gray-100 shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-2xl">Licencia</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-xs">
            <code>{`MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}</code>
          </pre>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function MainSection() {
  return (
    <div className="mb-8 w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <CreatorSection />
      <LicenseSection />
    </div>
  );
}
