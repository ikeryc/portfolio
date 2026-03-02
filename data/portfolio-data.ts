export const personalInfo = {
  name: "Iker Yáñez Calderón",
  title: "Data Scientist & ML Engineer",
  tagline:
    "Transformando datos en decisiones inteligentes. Apasionado por el Machine Learning, la estadística y la creación de soluciones basadas en datos.",
  email: "ikeryanez@gmail.com",
  github: "https://github.com/ikeryc",
  linkedin: "https://linkedin.com/in/ikeryc",
  aboutText:
    "Soy un Data Scientist y Machine Learning Engineer con pasión por resolver problemas complejos utilizando datos. Me especializo en el desarrollo de modelos predictivos, análisis exploratorio de datos y la implementación de soluciones de ML en producción. Siempre busco aprender nuevas tecnologías y metodologías para mejorar mis habilidades.",
};

export const skills = [
  {
    category: "Lenguajes",
    items: ["Python", "SQL"],
  },
  {
    category: "ML / Deep Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    category: "Data & Análisis",
    items: ["Pandas", "NumPy", "Jupyter", "Power BI", "PySpark"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Git", "AWS"],
  },
];

export const projects = [
  {
    title: "Predicción de Churn de Clientes",
    description:
      "Modelo de clasificación para predecir la fuga de clientes utilizando Random Forest y XGBoost. Incluye análisis exploratorio, feature engineering y despliegue con FastAPI.",
    tags: ["Python", "Scikit-learn", "XGBoost", "FastAPI"],
    github: "https://github.com/ikeryc/churn-prediction",
    demo: "",
    image: "",
  },
  {
    title: "Análisis de Sentimiento con NLP",
    description:
      "Pipeline de NLP para análisis de sentimiento en reseñas de productos. Utiliza transformers pre-entrenados y fine-tuning con datos personalizados.",
    tags: ["Python", "Hugging Face", "PyTorch", "NLP"],
    github: "https://github.com/ikeryc/sentiment-analysis",
    demo: "",
    image: "",
  },
  {
    title: "Dashboard de Visualización de Datos",
    description:
      "Dashboard interactivo para explorar y visualizar datasets complejos. Construido con Streamlit y Plotly para análisis en tiempo real.",
    tags: ["Python", "Streamlit", "Plotly", "Pandas"],
    github: "https://github.com/ikeryc/data-dashboard",
    demo: "",
    image: "",
  },
];

export const experience = [
  {
    type: "work" as const,
    title: "Consultor Data Science",
    company: "Management Solutions",
    period: "Julio 2024 - Presente",
    description:
      "Consultoría en proyectos de Data Science para clientes del sector financiero. Desarrollo de modelos predictivos y soluciones analíticas avanzadas.",
  },
  {
    type: "work" as const,
    title: "Data Scientist",
    company: "BBVA",
    period: "Noviembre 2023 - Mayo 2024",
    description:
      "Desarrollo de modelos de Machine Learning y análisis de datos a gran escala. Creación de pipelines de datos y generación de insights para el negocio.",
  },
  {
    type: "education" as const,
    title: "Máster en Consultoría de Negocio",
    company: "Universidad Pontificia de Comillas ICAI-ICADE",
    period: "Septiembre 2024 - Junio 2026",
    description:
      "Especialización en consultoría estratégica y transformación digital de negocio.",
  },
  {
    type: "education" as const,
    title: "Máster en Ciencia de Datos & IA",
    company: "Universidad de Navarra",
    period: "Septiembre 2023 - Junio 2024",
    description:
      "Especialización en Machine Learning, Deep Learning, estadística avanzada e inteligencia artificial.",
  },
  {
    type: "education" as const,
    title: "Grado en Ingeniería Informática + Transformación Digital de la Empresa",
    company: "Universidad de Deusto",
    period: "Septiembre 2019 - Junio 2023",
    description:
      "Formación sólida en fundamentos de ingeniería informática, programación y transformación digital.",
  },
];

export const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];
