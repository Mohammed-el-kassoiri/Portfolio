"use client"

import { motion } from "framer-motion"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { PortfolioCommandPalette } from "@/components/command-palette"
import { CommandPaletteProvider } from "@/components/command-palette-provider"

export default function Portfolio() {
  return (
    <CommandPaletteProvider>
      <div className="relative min-h-screen overflow-x-hidden text-slate-100">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <ScrollProgress />
        <Navigation />
        <PortfolioCommandPalette />

        <main id="main-content" className="relative isolate">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Hero />
            <div className="section-divider hero-divider">
              <About />
            </div>
            <div className="section-divider">
              <Experience />
            </div>
            <div className="section-divider">
              <Projects />
            </div>
            <div className="section-divider">
              <Skills />
            </div>
            <div className="section-divider">
              <Contact />
            </div>
          </motion.div>
        </main>
      </div>
    </CommandPaletteProvider>
  )
}
