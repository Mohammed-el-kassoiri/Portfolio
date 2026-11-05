import { Pressable, StyleSheet, Text, View } from "react-native"
import { profile } from "@/components/native/data"
import { theme } from "@/components/native/theme"

type HeaderProps = {
  compact: boolean
  onNavigate: (id: string) => void
}

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

export function Header({ compact, onNavigate }: HeaderProps) {
  return (
    <View style={[styles.container, compact && styles.containerCompact]}>
      <View style={styles.identityWrap}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
      </View>
      <View style={styles.navRow}>
        {navItems.map((item) => (
          <Pressable key={item.id} onPress={() => onNavigate(item.id)} style={styles.navButton}>
            <Text style={styles.navLabel}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  containerCompact: {
    marginBottom: theme.spacing.md,
  },
  identityWrap: {
    gap: 4,
  },
  name: {
    color: theme.colors.textPrimary,
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
  },
  title: {
    color: theme.colors.accent,
    fontSize: 17,
    fontWeight: "600",
  },
  navRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  navButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  navLabel: {
    color: theme.colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
  },
})
