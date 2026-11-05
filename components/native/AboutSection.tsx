import { StyleSheet, Text, View } from "react-native"
import { Section } from "@/components/native/Section"
import { theme } from "@/components/native/theme"

export function AboutSection() {
  return (
    <View nativeID="about">
      <Section title="About" subtitle="Professional profile">
        <View style={styles.card}>
          <Text style={styles.text}>
            I build production-minded machine learning solutions with strong focus on
            reliability, maintainability, and measurable impact.
          </Text>
          <Text style={styles.text}>
            Main final year project status: <Text style={styles.bold}>Completed on 01/07/2026</Text>.
          </Text>
        </View>
      </Section>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
  },
  bold: {
    color: theme.colors.success,
    fontWeight: "700",
  },
})
