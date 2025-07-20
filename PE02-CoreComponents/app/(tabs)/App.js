import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Which course did you like? ex. CS624"
      />

      <Text style={styles.heading}>Core Requirements (24 Credits)</Text>
      <Text style={styles.text}>CS504 Software Engineering</Text>
      <Text style={styles.text}>CS506 Programming for Computing</Text>
      <Text style={styles.text}>CS519 Cloud Computing</Text>
      <Text style={styles.text}>CS533 Computer Architecture</Text>
      <Text style={styles.text}>CS547 Secure Systems and Programs</Text>
      <Text style={styles.text}>CS622 Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.text}>DS510 Artificial Intelligence for Data Science</Text>
      <Text style={styles.text}>DS620 Machine Learning & Deep Learning</Text>

      <Text style={styles.heading}>Depth of Study (6 Credits)</Text>
      <Text style={styles.text}>CS624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.text}>CS628 Full-Stack Development - Web Application</Text>

      <Text style={styles.heading}>Electives (6 Credits)</Text>
      <Text style={styles.text}>CS680 Computer Science Internship</Text>

      <Text style={styles.heading}>Capstone (3 Credits)</Text>
      <Text style={styles.text}>CS687 Computer Science Capstone</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
  },
  heading: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 6,
    marginTop: 20,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 16,
    marginVertical: 2,
  },
});
