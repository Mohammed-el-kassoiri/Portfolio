export type SkillGroup = {
  title: string
  skills: string[]
}

export type PortfolioProject = {
  title: string
  period: string
  status: string
  summary: string
  technologies: string[]
  links: { label: string; url: string }[]
}

export type ExperienceItem = {
  role: string
  organization: string
  period: string
  status?: string
  details: string[]
  technologies: string[]
}

export const profile = {
  name: "Mohammed El Kassoiri",
  title: "Data Scientist | Machine Learning Engineer",
  location: "Morocco",
  summary:
    "Data Scientist and Machine Learning Engineer focused on building reliable ML systems in computer vision, NLP, and geospatial intelligence.",
  contact: {
    email: "mohammed.kassoiri@gmail.com",
    github: "https://github.com/Mohammed-El-Kassoiri",
    linkedin: "https://linkedin.com/in/Mohammed-El-Kassoiri",
    resume: "/Mohammed_el_kassoiri.pdf",
  },
} as const

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Semantic Segmentation",
      "Edge Detection",
      "Multi-task Learning",
    ],
  },
  {
    title: "Geospatial ML & Remote Sensing",
    skills: [
      "Geospatial Machine Learning",
      "Remote Sensing",
      "Google Earth Engine",
      "Sentinel-1",
      "Sentinel-2",
      "Attention U-Net",
    ],
  },
  {
    title: "Engineering & Deployment",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "SQL",
      "FastAPI",
      "Data Engineering",
      "Cloud Geospatial Processing",
    ],
  },
]

export const projects: PortfolioProject[] = [
  {
    title: "Automatic Agricultural Parcelization (Final Year Project)",
    period: "Feb 2026 - 01/07/2026",
    status: "Completed on 01/07/2026",
    summary:
      "Deep Learning system for automatic agricultural parcel delineation from satellite imagery, combining semantic segmentation and edge detection in a unified workflow.",
    technologies: [
      "Deep Learning",
      "Computer Vision",
      "Remote Sensing",
      "TensorFlow",
      "PyTorch",
      "Google Earth Engine",
      "QGIS",
    ],
    links: [],
  },
  {
    title: "Water Stress & Agricultural Adaptation Mapping (Taroudant)",
    period: "Research Project",
    status: "Published",
    summary:
      "Multi-source Attention U-Net pipeline for agricultural segmentation and water-stress mapping to support evidence-based planning.",
    technologies: [
      "Remote Sensing",
      "Attention U-Net",
      "Semantic Segmentation",
      "Sentinel-1",
      "Sentinel-2",
      "SMAP",
      "Google Earth Engine",
    ],
    links: [
      {
        label: "Code",
        url: "https://github.com/Mohammed-El-Kassoiri/Mapping-Water-Stress-and-Agricultural-Adaptation-Potential",
      },
      {
        label: "Paper",
        url: "https://www.researchgate.net/publication/399089388_Mapping_Water_Stress_and_Agricultural_Adaptation_Potential_Using_Multi-Source_16-Band_Attention_U-Net_Case_of_Taroudant_Morocco",
      },
    ],
  },
  {
    title: "English to Darija Translation System",
    period: "NLP Project",
    status: "Deployed",
    summary:
      "Transformer-based machine translation pipeline with model and interactive demo deployment.",
    technologies: ["NLP", "Transformers", "Deep Learning", "Hugging Face"],
    links: [
      {
        label: "Code",
        url: "https://github.com/Mohammed-El-Kassoiri/English-to-Darija-Translator",
      },
      {
        label: "Model",
        url: "https://huggingface.co/NeoAivara/English_to_Darija_translator",
      },
      {
        label: "Demo",
        url: "https://huggingface.co/spaces/NeoAivara/English_to_Darija_translator",
      },
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: "Data Science and Machine Learning Intern",
    organization: "XAI Morocco",
    period: "Aug 2025 - Oct 2025",
    details: [
      "Contributed to X-EdTech modules for intelligent forms, quiz generation, and educational data analysis.",
      "Worked across AI-assisted product features with practical delivery focus.",
    ],
    technologies: ["Data Science", "Machine Learning", "Python"],
  },
  {
    role: "Final Year Project - Automatic Agricultural Parcelization",
    organization:
      "Pôle Digital de l'Agriculture, de la Forêt et Observatoire de la Sécheresse",
    period: "Feb 2026 - 01/07/2026",
    status: "Completed on 01/07/2026",
    details: [
      "Designed and delivered an end-to-end geospatial ML pipeline for parcel delineation.",
      "Integrated segmentation and edge detection for improved boundary precision.",
    ],
    technologies: [
      "Deep Learning",
      "Computer Vision",
      "Remote Sensing",
      "Google Earth Engine",
      "QGIS",
    ],
  },
]

export const education = [
  {
    title: "State Engineer in Data Science, Big Data and AI",
    institution: "ENSIASD, Taroudant",
    period: "2023 - 2026",
    detail:
      "Advanced engineering program in AI systems, ML pipelines, data engineering, and decision-support analytics.",
  },
  {
    title: "Core Scientific Foundation",
    institution: "Morocco",
    period: "Before 2023",
    detail:
      "Strong mathematical and algorithmic background supporting machine learning and research-driven engineering.",
  },
] as const
