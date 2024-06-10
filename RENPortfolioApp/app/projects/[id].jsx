import { View, Text, StyleSheet, Linking } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function ProjectDetails() {
  const { id } = useLocalSearchParams();
  const projectDetails = {
    RNEPortfolioApp: {
      title: 'RNEPortfolioApp',
      description: 'A React Native portfolio application.',
      link: 'https://github.com/jonathonkindle/RNEPortfolioApp'
    },
    RNENavigation: {
      title: 'RNENavigation',
      description: 'A React Native application demonstrating navigation.',
      link: 'https://github.com/jonathonkindle/RNENavigation'
    },
    RNETaskManager: {
      title: 'RNETaskManager',
      description: 'A task manager application built with React Native.',
      link: 'https://github.com/jonathonkindle/RNETaskManager'
    }
  };

  const project = projectDetails[id];

  return (
    <View style={styles.container}>
      <Link href="/projects" style={styles.button}>
        <Text style={styles.buttonText}>Back to Projects</Text>
      </Link>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(project.link)}>
          View on GitHub
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    color: '#555555',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
