"use client"

import { useEffect, useRef, useState } from "react"
import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  type LayoutChangeEvent,
} from "react-native"
import { AboutSection } from "@/components/native/AboutSection"
import { ContactSection } from "@/components/native/ContactSection"
import { EducationSection } from "@/components/native/EducationSection"
import { ExperienceSection } from "@/components/native/ExperienceSection"
import { Header } from "@/components/native/Header"
import { HeroSection } from "@/components/native/HeroSection"
import { ProjectsSection } from "@/components/native/ProjectsSection"
import { SkillsSection } from "@/components/native/SkillsSection"
import { theme } from "@/components/native/theme"

export function PortfolioScreen() {
  const { width } = useWindowDimensions()
  const compact = width < 960
  const scrollRef = useRef<ScrollView | null>(null)
  const [sectionOffsets] = useState<Record<string, number>>(() => ({}))
  const [fadeAnim] = useState(() => new Animated.Value(0))

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 420,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  const onSectionLayout =
    (id: string) =>
    ({ nativeEvent }: LayoutChangeEvent) => {
      sectionOffsets[id] = nativeEvent.layout.y
    }

  const handleNavigate = (id: string) => {
    const y = sectionOffsets[id]
    if (scrollRef.current && typeof y === "number") {
      scrollRef.current.scrollTo({ y: Math.max(0, y - 12), animated: true })
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={[styles.animatedRoot, { opacity: fadeAnim }]}>
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={[styles.content, compact ? styles.contentCompact : styles.contentWide]}
          showsVerticalScrollIndicator={false}
        >
          <Header compact={compact} onNavigate={handleNavigate} />
          <HeroSection />

          <View onLayout={onSectionLayout("about")}>
            <AboutSection />
          </View>
          <View onLayout={onSectionLayout("skills")}>
            <SkillsSection compact={compact} />
          </View>
          <View onLayout={onSectionLayout("projects")}>
            <ProjectsSection />
          </View>
          <View onLayout={onSectionLayout("experience")}>
            <ExperienceSection />
          </View>
          <View onLayout={onSectionLayout("education")}>
            <EducationSection />
          </View>
          <View onLayout={onSectionLayout("contact")}>
            <ContactSection />
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  animatedRoot: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    width: "100%",
    alignSelf: "center",
    paddingTop: 24,
    paddingBottom: 56,
    gap: theme.spacing.md,
  },
  contentCompact: {
    paddingHorizontal: 16,
    maxWidth: 760,
  },
  contentWide: {
    paddingHorizontal: 28,
    maxWidth: 1120,
  },
})
