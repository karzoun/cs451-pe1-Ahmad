// App.tsx
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from './ProfileCard';

const people = [
  { name: 'Alex Johnson', role: 'Mobile Dev' },
  { name: 'Priya Singh', role: 'UI/UX Designer' },
  { name: 'Diego Martinez', role: 'QA Engineer' },
  { name: 'Mei Chen', role: 'Project Manager' },
  { name: 'Sara Lee', role: 'Frontend Dev' },
  { name: 'Omar Nasser', role: 'Backend Dev' },
];

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {people.map((p, i) => (
          <ProfileCard
            key={p.name}
            name={p.name}
            role={p.role}
            avatar={require('../../assets/images/icons8-user-50.png')}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 16 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});
