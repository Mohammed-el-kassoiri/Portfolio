import { FlatList, StyleSheet, Text, View } from "react-native"
import { Section } from "@/components/native/Section"
import { experience } from "@/components/native/data"
import { theme } from "@/components/native/theme"

export function ExperienceSection() {
  return (
    <View nativeID="experience">
      <Section title="Experience" subtitle="Industry and research">
        <FlatList
          data={experience}
          keyExtractor={(item) => `${item.role}-${item.period}`}
          scrollEnabled={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.role}>{item.role}</Text>
              <Text style={styles.organization}>{item.organization}</Text>
              <Text style={styles.period}>{item.period}</Text>
              {item.status ? <Text style={styles.status}>{item.status}</Text> : null}
              {item.details.map((detail) => (
                <Text key={detail} style={styles.detail}>
                  • {detail}
                </Text>
              ))}
            </View>
          )}
        />
      </Section>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
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
  role: {
    color: theme.colors.textPrimary,
    fontSize: 17,
    fontWeight: "700",
  },
  organization: {
    color: theme.colors.accent,
    fontWeight: "600",
  },
  period: {
    color: theme.colors.textSecondary,
    fontWeight: "500",
  },
  status: {
    color: theme.colors.success,
    fontWeight: "700",
  },
  detail: {
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
})
