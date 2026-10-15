export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  examples: string[];
};

export const services: Service[] = [
  {
    slug: "bodas",
    title: "Bodas",
    shortDescription: "Celebraciones únicas, diseñadas alrededor de su historia.",
    description:
      "Creamos experiencias para celebrar una historia de amor, cuidando la ambientación, los detalles y la personalidad de cada pareja.",
    image: "/images/bodas.jpg",
    examples: [
      "Ambientación y decoración",
      "Detalles para una celebración personalizada",
      "Coordinación según las necesidades del evento",
    ],
  },
  {
    slug: "quinceanos",
    title: "Quinceaños",
    shortDescription: "Un día inolvidable, cuidado hasta el último detalle.",
    description:
      "Diseñamos celebraciones especiales para festejar los quince años, adaptando la propuesta al estilo y las ideas de cada familia.",
    image: "/images/quinceanos.jpg",
    examples: [
      "Decoración temática",
      "Ambientación de mesas y espacios",
      "Detalles personalizados",
    ],
  },
  {
    slug: "cumpleanos",
    title: "Cumpleaños",
    shortDescription: "Celebraciones personales para crear grandes recuerdos.",
    description:
      "Preparamos propuestas para cumpleaños y celebraciones personales, adaptadas a la ocasión y las preferencias de cada cliente.",
    image: "/images/sociales.jpg",
    examples: [
      "Decoración para cumpleaños",
      "Ambientación personalizada",
      "Celebraciones familiares y sociales",
    ],
  },
  {
    slug: "corporativos",
    title: "Eventos corporativos",
    shortDescription: "Experiencias profesionales que reúnen e inspiran.",
    description:
      "Creamos propuestas para empresas que desean organizar eventos profesionales, celebraciones de fin de año y encuentros especiales.",
    image: "/images/corporativos.jpg",
    examples: [
      "Celebraciones empresariales",
      "Eventos de fin de año",
      "Ambientación de espacios corporativos",
    ],
  },
  {
    slug: "catering",
    title: "Catering service",
    shortDescription: "Una propuesta gastronómica para acompañar cada celebración.",
    description:
      "Conversemos sobre las necesidades de alimentación y presentación de tu evento para preparar una propuesta personalizada.",
    image: "/images/sociales.jpg",
    examples: [
      "Opciones de alimentación por consultar",
      "Presentación para eventos",
      "Propuesta adaptada a cada ocasión",
    ],
  },
  {
    slug: "otros",
    title: "Otros servicios",
    shortDescription: "Cuéntanos tu idea y exploremos cómo hacerla realidad.",
    description:
      "Si tienes una celebración o necesitas un servicio que no aparece en las categorías anteriores, puedes contactarnos para conversar sobre tu idea.",
    image: "/images/galeria-01.jpg",
    examples: [
      "Solicitudes especiales",
      "Propuestas personalizadas",
      "Consulta sobre servicios complementarios",
    ],
  },
];