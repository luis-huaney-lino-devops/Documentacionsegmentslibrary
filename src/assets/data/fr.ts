export interface Language {
    code: string;
    flag: string;
    name: string;
}

export const languagesFr: Language[] = [
    {
        code: "zh",
        flag: "https://flagicons.lipis.dev/flags/4x3/cn.svg",
        name: "Chinois",
    },
    {
        code: "en",
        flag: "https://flagicons.lipis.dev/flags/4x3/um.svg",
        name: "Anglais",
    },
    {
        code: "fr",
        flag: "https://flagicons.lipis.dev/flags/4x3/fr.svg",
        name: "Français",
    },
    {
        code: "de",
        flag: "https://flagicons.lipis.dev/flags/4x3/de.svg",
        name: "Allemand",
    },
    {
        code: "es",
        flag: "https://flagicons.lipis.dev/flags/4x3/pe.svg",
        name: "Espagnol",
    },
];

export const propsDataFr = [
    {
        prop: "id",
        type: "String",
        desc: 'Identifiant unique de l\'affichage (par défaut "1").',
        predef: "1",
    },
    {
        prop: "pattern",
        type: "String",
        desc: 'Modèle d\'affichage (ex: "#####", "##:##:##").',
        predef: "#####",
    },
    {
        prop: "textopredefinido",
        type: "String",
        desc: "Texte initial affiché à l'écran.",
        predef: "TUTEC",
    },
    {
        prop: "width",
        type: "Number",
        desc: "Largeur du canvas (px).",
        predef: 300,
    },
    {
        prop: "height",
        type: "Number",
        desc: "Hauteur du canvas (px).",
        predef: 180,
    },
    {
        prop: "colorOn",
        type: "String",
        desc: "Couleur des segments actifs.",
        predef: "#4d91cd",
    },
    {
        prop: "colorOff",
        type: "String",
        desc: "Couleur des segments inactifs.",
        predef: "#53595e45",
    },
    {
        prop: "cantidadSegmentos",
        type: "Number",
        desc: "Nombre de segments. Valeurs autorisées : 7, 14 ou 16. Avec 7 segments, seuls les caractères de base peuvent être affichés (ex: 0-9, A, C, E, F). Avec 14 ou 16 segments, les caractères alphanumériques et symboles spéciaux peuvent être représentés.",
        predef: 14,
    },
    {
        prop: "altoDisplay",
        type: "Number",
        desc: "Hauteur des chiffres.",
        predef: 23.5,
    },
    {
        prop: "anchoDisplay",
        type: "Number",
        desc: "Largeur des chiffres.",
        predef: 14.5,
    },
    {
        prop: "distanciaEntreDigitos",
        type: "Number",
        desc: "Espacement entre les chiffres.",
        predef: 2.5,
    },
    {
        prop: "anchoSegmento",
        type: "Number",
        desc: "Largeur des segments.",
        predef: 3,
    },
    {
        prop: "distanciaSegmento",
        type: "Number",
        desc: "Espacement entre les segments.",
        predef: 0.3,
    },
    {
        prop: "tipoBorde",
        type: "Number",
        desc: "Type de bordure autorisé (0, 1, 2 ou 3).",
        predef: 3,
    },
    {
        prop: "anguloDisplay",
        type: "Number",
        desc: "Angle d'inclinaison de l'affichage.",
        predef: 6,
    },
];


export const FrenchData: string[] = [
    "Description",
    "Installation",
    "Props",
    "Exemples",
    "Créateur",
    "Licence",
    "Documentation du composant Segments",
    "Affichage Segments",
    "Segments est le joyau de la visualisation numérique : il combine le charme des affichages classiques avec la technologie moderne, offrant une flexibilité et un style inégalés.",
    "Caractéristiques Clés",
    "Configuration polyvalente : choisissez entre 7, 14 ou 16 segments, s’adaptant à différents niveaux de détail.",
    "Personnalisation avancée : contrôlez les couleurs, tailles, angles et espacements pour obtenir l’apparence parfaite.",
    "Compatibilité universelle : idéal pour les tableaux de bord, l'IoT, les panneaux de contrôle et bien plus encore.",
    "Applications Pratiques",
    "Parfait pour :",
    "Affichages de température et d'humidité",
    "Panneaux de contrôle industriels",
    "Indicateurs dans les applications web",
    "Avantages Techniques",
    "Performance optimisée et intégration facile dans les projets React, avec une architecture modulaire pour une personnalisation sans limites.",
    "Remarque : Compatible avec les dernières versions de React et optimisé pour les performances mobiles.",
    "Pour utiliser ce composant dans votre projet, installez d'abord la bibliothèque :",
    "Puis, importez-le dans votre code :",
    "Props du Composant",
    'Toutes les props du composant sont facultatives, sauf "id", qui est utilisé pour générer plusieurs instances. Les valeurs par défaut sont les suivantes :',
    "Propriété",
    "Type",
    "Description",
    "Valeur par Défaut",
    "Exemples",
    "Horloge Numérique",
    "Une horloge numérique de base affichant l'heure actuelle, mise à jour chaque seconde.",
    "Animation de Texte Lettre par Lettre",
    "Animation affichant du texte lettre par lettre avec un effet de clignotement.",
    "Compteur Numérique",
    "Un compteur qui augmente/diminue les valeurs avec une animation fluide.",
    "Gestion des Erreurs et Validation",
    "Exemples de la gestion des erreurs et des validations par le composant.",
    "À propos du Créateur",
    "Développeur Full Stack, DevOps & Créateur de Segments",
    "Portfolio",
    "J’ai créé Segments avec la mission de simplifier l’implémentation des affichages segmentés dans les applications web modernes, offrant une solution agile et personnalisable qui transforme l'interface utilisateur.",
    "Cet outil est né de ma passion pour le développement de ressources innovantes qui améliorent l'expérience des développeurs, permettant à la créativité et à l'efficacité de se refléter dans chaque projet.",
    "Licence",
];
