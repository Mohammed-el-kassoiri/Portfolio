import { Linking, Pressable, StyleSheet, Text, View } from "react-native"
import { profile } from "@/components/native/data"
import { theme } from "@/components/native/theme"

const links = [
  { label: "GitHub", url: profile.contact.github },
  { label: "LinkedIn", url: profile.contact.linkedin },
  { label: "Email", url: `mailto:${profile.contact.email}` },
  { label: "Resume", url: profile.contact.resume },
]

export function SocialLinks() {
  return (
    <View style={styles.container}>
      {links.map((item) => (
        <Pressable
          key={item.label}
          onPress={() => Linking.openURL(item.url)}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  button: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: theme.colors.textPrimary,
    fontWeight: "600",
    fontSize: 13,
  },
})
