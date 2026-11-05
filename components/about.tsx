"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"
import { Briefcase, Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useMounted } from "@/hooks/use-mounted"
import { SectionHeader } from "@/components/section-header"

const translations = {
  en: {
    sectionTitle: "About Me",
    name: "Mohammed El Kassoiri",
    role: "Data Scientist & Machine Learning Engineer",
    bio1: "Data Scientist and Machine Learning Engineer specializing in applied ML, deep learning, computer vision, and NLP. I enjoy taking a model from a clear problem statement to a useful, maintainable product.",
    location: "Location:",
    locationVal: "Morocco 🇲🇦",
    missionTitle: "Mission",
    missionText:
      "I care about the full path from data quality and evaluation to deployment. My goal is to build systems that are measurable, explainable, and genuinely useful to the people who rely on them.",
  },
  fr: {
    sectionTitle: "À propos",
    name: "Mohammed El Kassoiri",
    role: "Data Scientist & Ingénieur IA",
    bio1: "Data Scientist & Ingénieur IA spécialisé en Machine Learning, Deep Learning et Computer Vision. J'ai récemment développé un système IA pour la parcellisation automatique des terres agricoles.",
    location: "Localisation :",
    locationVal: "Maroc 🇲🇦",
    missionTitle: "Mission",
    missionText:
      "Ingénieur IA & Data prêt pour l'industrie — à la recherche d'un poste en IA, Data Science ou Ingénierie Logicielle, pour mettre en œuvre des compétences ML de pointe au service de projets à fort impact réel.",
  },
}

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  const { language } = useLanguage()
  const mounted = useMounted()
  const isCyber = mounted && theme === "cyber"
  const t = translations[language]

  const cardBase = `backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border ${
    isCyber
      ? "bg-black/60 border-red-900/40 hover:border-red-600/60"
      : "bg-slate-800/50 border-slate-700/60 hover:border-blue-500/50"
  }`

  const iconBg = isCyber ? "bg-red-700/20" : "bg-blue-500/20"
  const iconColor = isCyber ? "text-red-400" : "text-blue-400"
  const titleColor = isCyber ? "text-red-100" : "text-slate-100"
  const textColor = isCyber ? "text-red-200/70" : "text-slate-300"
  const accentColor = isCyber ? "text-red-300" : "text-blue-400"

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="relative section-container" ref={ref}>
      <div className="container mx-auto max-w-7xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <SectionHeader
            eyebrow={language === "en" ? "Who I am" : "Qui je suis"}
            title={t.sectionTitle}
            isCyber={isCyber}
          />

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Main Bio Card */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.01 }}
              className={`lg:col-span-2 ${cardBase} p-8`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${
                    isCyber ? "from-red-700 to-red-500" : "from-blue-600 to-cyan-400"
                  } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${titleColor}`}>{t.name}</h3>
                  <p className={`font-medium ${accentColor}`}>{t.role}</p>
                </div>
              </div>

              <div className={`space-y-3 leading-relaxed ${textColor}`}>
                <p>{t.bio1}</p>
                <p>
                  🌍 <span className={`font-semibold ${titleColor}`}>{t.location}</span>{" "}
                  {t.locationVal}
                </p>
              </div>

              {/* Code snippet */}
              <div
                className={`mt-6 rounded-xl p-5 border font-mono text-sm overflow-x-auto ${
                  isCyber
                    ? "bg-black/80 border-red-900/30 text-red-300/80"
                    : "bg-slate-900/60 border-slate-700/50 text-slate-300"
                }`}
              >
                <pre>{`class AI:
  def __init__(self):
    self.name    = "Mohammed El Kassoiri"
    self.role    = "Data Scientist & AI Engineer"
    self.location = "Morocco 🇲🇦"
    self.focus   = ["ML", "Deep Learning",
                    "Data Science", "NLP"]

  def say_hi(self):
    print("Let's build the future! 🚀")

me = AI()
me.say_hi()`}</pre>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.01 }}
              className={`lg:col-span-1 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 border ${
                isCyber
                  ? "bg-gradient-to-br from-red-700/10 to-red-900/5 border-red-700/30 hover:border-red-600/50"
                  : "bg-gradient-to-br from-blue-600/10 to-cyan-400/5 border-blue-500/30 hover:border-blue-500/50"
              }`}
            >
              <div
                className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}
              >
                <Briefcase className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${titleColor}`}>
                {t.missionTitle}
              </h3>
              <p className={`leading-relaxed ${textColor}`}>{t.missionText}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
