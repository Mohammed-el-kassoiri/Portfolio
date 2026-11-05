import { Linking, Pressable, StyleSheet, Text, View } from "react-native"
import { Section } from "@/components/native/Section"
import { profile } from "@/components/native/data"
import { theme } from "@/components/native/theme"

export function ContactSection() {
  return (
    <View nativeID="contact">
      <Section title="Contact" subtitle="Let's collaborate">
        <View style={styles.card}>
          <Text style={styles.description}>
            Open to Data Science and Machine Learning Engineering opportunities.
          </Text>
          <Pressable
            onPress={() => Linking.openURL(`mailto:${profile.contact.email}`)}
            style={({ pressed }) => [styles.mailButton, pressed && styles.mailPressed]}
          >
            <Text style={styles.mailButtonText}>Email me</Text>
          </Pressable>
          <Text style={styles.footerText}>© 2026 Mohammed El Kassoiri</Text>
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
    gap: theme.spacing.md,
  },
  description: {
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
  mailButton: {
    alignSelf: "flex-start",
    borderRadius: theme.radius.sm,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#0ea5e9",
  },
  mailPressed: {
    opacity: 0.85,
  },
  mailButtonText: {
    color: "#f8fafc",
    fontWeight: "700",
    fontSize: 14,
  },
  footerText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
})
