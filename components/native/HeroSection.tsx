import { StyleSheet, Text, View } from "react-native"
import { profile } from "@/components/native/data"
import { theme } from "@/components/native/theme"
import { SocialLinks } from "@/components/native/SocialLinks"

export function HeroSection() {
  return (
    <View style={styles.container} nativeID="hero">
      <View style={styles.statusPill}>
        <Text style={styles.statusText}>Open to full-time opportunities</Text>
      </View>
      <Text style={styles.headline}>{profile.summary}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.metaLabel}>Location</Text>
        <Text style={styles.metaValue}>{profile.location}</Text>
      </View>
      <SocialLinks />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  statusPill: {
    alignSelf: "flex-start",
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.accentSoft,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  statusText: {
    color: theme.colors.accent,
    fontWeight: "600",
    fontSize: 12,
  },
  headline: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "500",
  },
  metaRow: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    alignItems: "center",
  },
  metaLabel: {
    color: theme.colors.textSecondary,
    fontWeight: "500",
  },
  metaValue: {
    color: theme.colors.textPrimary,
    fontWeight: "600",
  },
})
