
export interface Language {
    code: string;
    flag: string;
    name: string;
  }
  
  export const languages: Language[] = [
    {
      code: "zh",
      flag: "https://flagicons.lipis.dev/flags/4x3/cn.svg",
      name: "Chino",
    },
    {
      code: "en",
      flag: "https://flagicons.lipis.dev/flags/4x3/um.svg",
      name: "Inglés",
    },
    {
      code: "fr",
      flag: "https://flagicons.lipis.dev/flags/4x3/fr.svg",
      name: "Francés",
    },
    {
      code: "de",
      flag: "https://flagicons.lipis.dev/flags/4x3/de.svg",
      name: "Alemán",
    },
    {
      code: "es",
      flag: "https://flagicons.lipis.dev/flags/4x3/pe.svg",
      name: "Español",
    },
  ];
  
export  const propsData = [
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

  export const DatosEspan: string[] = [
    "Descripción",
    "Instalación",
    "Props",
    "Ejemplos",
    "Creador",
    "Licencia",
    "Documentación del Componente Segments",
"Segments Display",
"Segments es la joya de la visualización digital: combina el encanto de los displays clásicos con tecnología moderna, ofreciendo flexibilidad y estilo inigualables.",
"Características Destacadas",
"Configuración versátil: elige entre 7, 14 o 16 segmentos, adaptándose a distintos niveles de detalle.",
"Personalización avanzada: controla colores, tamaños, ángulos y espaciados para lograr el look perfecto.",
"Compatibilidad universal: ideal para dashboards, IoT, paneles de control y más.",
"Aplicaciones Prácticas",
"Perfecto para:",
"Displays de temperatura y humedad",
"Paneles de control industriales",
"Indicadores en aplicaciones web",
"Ventajas Técnicas",
"Rendimiento optimizado y fácil integración en proyectos React, con arquitectura modular para una personalización sin límites.",
"Nota: Compatible con las últimas versiones de React y optimizado para rendimiento en móviles.",
    "Para usar este componente en tu proyecto, primero instala la librería:",
    "Luego, impórtalo en tu código:",
    "Props del Componente",
    'Todos los props del componente son opcionales, excepto el "id", el cual se usa para generar múltiples instancias. Los valores predefinidos son los siguientes:',
    "Propiedad",
    "Tipo",
    "Descripción",
    "Valor Predefinido",
    "Ejemplos"
    ,"Reloj Digital",
    "Un reloj digital básico que muestra la hora actual con actualización cada segundo."
    ,"Animación de Palabra Letra por Letra"
    ,"Animación que muestra texto letra por letra con efecto de parpadeo.",
    "Contador Numérico",
    "Un contador que incrementa/decrementa valores con animación suave.",
    "Manejo de Errores y Validaciones",
    "Ejemplos de cómo el componente maneja diferentes tipos de errores y validaciones.",
    "Sobre el Creador",
    "Desarrollador Full Stack , DevOps & Creador de Segments",
    "Portafolio",
    "Creé Segments con la misión de simplificar la implementación de displays segmentados en aplicaciones web modernas, ofreciendo una solución ágil y personalizable que transforma la interfaz de usuario.",
    "Esta herramienta nació de mi pasión por desarrollar recursos innovadores que potencian la experiencia del desarrollador, permitiendo que la creatividad y la eficiencia se reflejen en cada proyecto.",
    "Licencia",
  ];
  