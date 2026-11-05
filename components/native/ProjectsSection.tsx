import { FlatList, StyleSheet, View } from "react-native"
import { ProjectCard } from "@/components/native/ProjectCard"
import { Section } from "@/components/native/Section"
import { projects } from "@/components/native/data"

export function ProjectsSection() {
  return (
    <View nativeID="projects">
      <Section title="Projects" subtitle="Selected work">
        <FlatList
          data={projects}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <ProjectCard item={item} />}
          scrollEnabled={false}
          contentContainerStyle={styles.list}
        />
      </Section>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    gap: 16,
  },
})
