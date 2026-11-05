"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  MapPin,
  Sparkles,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    availability: "Data Scientist · Machine Learning Engineer",
    description:
      "I turn complex data into reliable products — from satellite-image segmentation to multilingual NLP systems and production-ready APIs.",
    resume: "Resume",
    contact: "Contact",
  },
  fr: {
    availability: "Data Scientist · Machine Learning Engineer",
    description:
      "Je transforme des données complexes en produits fiables — de la segmentation d’images satellites aux systèmes NLP multilingues.",
    resume: "CV",
    contact: "Contact",
  },
}

export function Hero() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const { language } = useLanguage()
  const t = translations[language]

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}% ${mouseY}%, rgba(56,189,248,0.14), transparent 60%)`

  return (
    <section
      id="hero"
      className="section-container relative flex min-h-0 items-start overflow-hidden pb-16 pt-28 md:pt-32"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(((e.clientX - rect.left) / rect.width) * 100)
        mouseY.set(((e.clientY - rect.top) / rect.height) * 100)
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />

      <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7 p-2 md:p-8">
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            {t.availability}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="display-title max-w-4xl text-balance bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent"
          >
            MOHAMMED EL KASSOIRI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl font-medium leading-relaxed text-cyan-300 md:text-2xl"
          >
            Data science for decisions that matter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            {t.description}
          </motion.p>

          <div className="flex flex-wrap gap-3 pt-1">
            <motion.a
              data-magnetic
              href="/Mohammed_el_kassoiri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-5 py-3 text-sm font-semibold text-cyan-100"
            >
              <Download className="h-4 w-4" /> {t.resume}
            </motion.a>
            <motion.a
              data-magnetic
              href="#contact"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/15 px-5 py-3 text-sm font-semibold text-indigo-100"
            >
              <Mail className="h-4 w-4" /> {t.contact}
            </motion.a>
            <motion.a
              data-magnetic
              href="https://github.com/Mohammed-El-Kassoiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/70 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              <Github className="h-4 w-4" /> GitHub
            </motion.a>
            <motion.a
              data-magnetic
              href="https://linkedin.com/in/Mohammed-El-Kassoiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/70 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-7 shadow-[0_24px_65px_rgba(15,23,42,0.45)] backdrop-blur-md md:p-9"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative space-y-8">
            <div className="flex items-center justify-between border-b border-slate-700/70 pb-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Profile / 01
              </span>
              <Sparkles className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <p className="mb-3 text-sm text-slate-400">Currently focused on</p>
              <p className="text-2xl font-semibold leading-tight text-white">
                Building useful ML systems from messy, real-world data.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Python + PyTorch",
                "Computer Vision",
                "NLP + RAG",
                "FastAPI + SQL",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-700/70 bg-slate-800/50 px-3 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-cyan-300" /> Morocco · working globally
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-300/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  )
}
