import { View, Text, StyleSheet, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to My Portfolio</Text>
        <Image source={require('../assets/images/profile.jpeg')} style={styles.profileImage} />
        <Link href="/projects" style={styles.link}>
          <Text style={styles.linkText}>Projects (Push)</Text>
        </Link>
        <Text style={styles.navigationButton} onPress={() => router.replace('/skills')}>
          Skills (Replace)
        </Text>
        <Link href="/contact" style={styles.link}>
          <Text style={styles.linkText}>Contact</Text>
        </Link>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  link: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
    width: '100%',
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  navigationButton: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#F2F2F5',
    borderRadius: 8,
    width: '100%',
  },
});
