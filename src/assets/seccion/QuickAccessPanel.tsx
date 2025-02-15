"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Book, Code, Star, User, FileText, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import LenguajeDevolvedor from "../data/DevolvedorDatosIdioma";

const QuickAccessPanel = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Función auxiliar para convertir el resultado a string.
  const safeText = (pos: number): string => {
    const result = LenguajeDevolvedor(pos);
    if (typeof result === "string") return result;
    if (Array.isArray(result)) return result.join(", ");
    return "";
  };

  const menuItems = [
    { id: "descripcion", icon: Book, label: safeText(0) },
    { id: "instalacion", icon: Code, label: safeText(1) },
    { id: "props", icon: Star, label: safeText(2) },
    { id: "ejemplos", icon: Code, label: safeText(3) },
    { id: "creador", icon: User, label: safeText(4) },
    { id: "licencia", icon: FileText, label: safeText(5) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = menuItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  interface MenuItemProps {
    item: {
      id: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      label: string;
    };
    isMobile?: boolean;
  }

  const MenuItem = ({ item, isMobile = false }: MenuItemProps) => {
    const Icon = item.icon;
    return (
      <ScrollLink
        to={item.id}
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={`flex items-center px-4 py-2 rounded-lg text-emerald-400 hover:bg-gray-700/70 cursor-pointer transition-all duration-300
          ${activeSection === item.id ? "bg-gray-700/90 shadow-lg scale-105" : ""}
          ${isMobile ? "w-full justify-start" : ""}
        `}
      >
        <div className="mr-2">
          <Icon width={18} height={18} />
        </div>
        <span className="font-medium">{item.label}</span>
      </ScrollLink>
    );
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "mx-4 lg:mx-auto lg:max-w-5xl mt-4 rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-md shadow-lg"
            : "border-t-2 border-emerald-400 border-b-2"
        }
      `}
    >
      {/* Menú para escritorio */}
      <div className="hidden md:block container mx-auto px-4 py-3">
        <div className="flex justify-center gap-3 flex-wrap">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Botón para menú móvil */}
      <div className="md:hidden container mx-auto px-4 py-3">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center px-4 py-2 rounded-lg text-emerald-400 bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-300"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="ml-2 font-medium">Menu</span>
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden container mx-auto px-4 pb-3"
          >
            <div className="flex flex-col gap-2 bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg">
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} isMobile={true} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuickAccessPanel;
