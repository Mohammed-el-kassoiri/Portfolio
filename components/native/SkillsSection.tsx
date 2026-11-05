import { FlatList, StyleSheet, Text, View } from "react-native"
import { Section } from "@/components/native/Section"
import { skillGroups } from "@/components/native/data"
import { theme } from "@/components/native/theme"

type SkillsSectionProps = {
  compact: boolean
}

export function SkillsSection({ compact }: SkillsSectionProps) {
  return (
    <View nativeID="skills">
      <Section title="Skills" subtitle="Core strengths">
        <FlatList
          data={skillGroups}
          keyExtractor={(item) => item.title}
          scrollEnabled={false}
          numColumns={compact ? 1 : 2}
          columnWrapperStyle={compact ? undefined : styles.columnGap}
          contentContainerStyle={styles.gridGap}
          renderItem={({ item }) => (
            <View style={[styles.groupCard, compact && styles.groupCardCompact]}>
              <Text style={styles.groupTitle}>{item.title}</Text>
              <View style={styles.tagsWrap}>
                {item.skills.map((skill) => (
                  <View key={skill} style={styles.tag}>
                    <Text style={styles.tagText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        />
      </Section>
    </View>
  )
}

const styles = StyleSheet.create({
  gridGap: {
    gap: theme.spacing.md,
  },
  columnGap: {
    gap: theme.spacing.md,
  },
  groupCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  groupCardCompact: {
    flexBasis: "100%",
  },
  groupTitle: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  tagsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.xs,
  },
  tag: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: theme.colors.surface,
  },
  tagText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
  },
})
