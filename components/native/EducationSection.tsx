import { StyleSheet, Text, View } from "react-native"
import { Section } from "@/components/native/Section"
import { education } from "@/components/native/data"
import { theme } from "@/components/native/theme"

export function EducationSection() {
  return (
    <View nativeID="education">
      <Section title="Education" subtitle="Academic background">
        <View style={styles.stack}>
          {education.map((item) => (
            <View key={item.title} style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.institution}>{item.institution}</Text>
              <Text style={styles.period}>{item.period}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          ))}
        </View>
      </Section>
    </View>
  )
}

const styles = StyleSheet.create({
  stack: {
    gap: theme.spacing.md,
  },
  card: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  institution: {
    color: theme.colors.accent,
    fontWeight: "600",
  },
  period: {
    color: theme.colors.textSecondary,
    fontWeight: "600",
  },
  detail: {
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
})
