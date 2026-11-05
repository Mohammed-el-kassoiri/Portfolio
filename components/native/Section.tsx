import { type ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"
import { theme } from "@/components/native/theme"

type SectionProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.spacing.xl,
    gap: theme.spacing.md,
  },
  header: {
    gap: theme.spacing.xs,
  },
  subtitle: {
    color: theme.colors.accent,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 26,
    fontWeight: "700",
  },
})
