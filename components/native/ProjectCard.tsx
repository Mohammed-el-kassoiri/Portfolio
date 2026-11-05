import { Linking, Pressable, StyleSheet, Text, View } from "react-native"
import { type PortfolioProject } from "@/components/native/data"
import { theme } from "@/components/native/theme"

type ProjectCardProps = {
  item: PortfolioProject
}

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.period}>{item.period}</Text>
      <Text style={styles.summary}>{item.summary}</Text>
      <View style={styles.techWrap}>
        {item.technologies.map((tech) => (
          <View key={tech} style={styles.techTag}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>
      {item.links.length > 0 ? (
        <View style={styles.linksRow}>
          {item.links.map((link) => (
            <Pressable
              key={link.url}
              onPress={() => Linking.openURL(link.url)}
              style={({ pressed }) => [styles.linkButton, pressed && styles.linkButtonPressed]}
            >
              <Text style={styles.linkText}>{link.label}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
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
  headerRow: {
    gap: theme.spacing.sm,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 24,
  },
  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: theme.radius.pill,
    backgroundColor: "rgba(34, 197, 94, 0.2)",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {
    color: theme.colors.success,
    fontSize: 11,
    fontWeight: "700",
  },
  period: {
    color: theme.colors.accent,
    fontWeight: "600",
  },
  summary: {
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  techWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.xs,
  },
  techTag: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: theme.colors.surface,
  },
  techText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
  },
  linksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  linkButton: {
    borderWidth: 1,
    borderColor: theme.colors.accentSoft,
    borderRadius: theme.radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "rgba(56, 189, 248, 0.12)",
  },
  linkButtonPressed: {
    opacity: 0.75,
  },
  linkText: {
    color: theme.colors.accent,
    fontWeight: "700",
    fontSize: 12,
  },
})
