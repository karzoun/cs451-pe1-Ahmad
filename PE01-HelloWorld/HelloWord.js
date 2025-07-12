import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelloWord() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ahmad Al-Karzoun</Text>
      <Text style={styles.text}>PE 1</Text>
      <Text style={styles.text}>CS 451</Text>
      <Text style={styles.text}>CSU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
