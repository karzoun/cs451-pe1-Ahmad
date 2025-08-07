// ProfileCard.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Platform, UIManager, LayoutAnimation } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  name: string;
  role: string;
  avatar: any; 
};

export default function ProfileCard({ name, role, avatar }: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(prev => !prev);
  };

  return (
    <Pressable onPress={toggle} style={[styles.card, expanded ? styles.cardExpanded : styles.cardThumb]}>
      <Image source={avatar} style={[styles.avatar, expanded ? styles.avatarLg : styles.avatarSm]} />
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
      <Text style={styles.role} numberOfLines={1}>{role}</Text>
      {expanded && (
        <Text style={styles.bio} numberOfLines={4}>
          Loves RN, TypeScript, and clean UI. Tap again to collapse to thumbnail.
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#222',
    borderRadius: 12,
    backgroundColor: '#00BFFF',
    margin: 8,
    padding: 12,
    alignItems: 'center',
    overflow: 'hidden'
  },
  cardThumb: {
    width: 160,
    height: 200,
  },
  cardExpanded: {
    width: 320,
    height: 260,
  },
  avatar: {
  borderRadius: 999,
  marginBottom: 8,
  borderWidth: 4,        
  borderColor: '#fff',
},
  avatarSm: { width: 64, height: 64 },
  avatarLg: { width: 96, height: 96 },
  name: { fontSize: 16, fontWeight: '700' },
  role: { fontSize: 12, color: '#666' },
  bio: { marginTop: 8, fontSize: 12, textAlign: 'center', paddingHorizontal: 8 }
});
