import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CategoryBadgeProps {
  text: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ text }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText} numberOfLines={1}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#0284c7', // Un tono más visible para resaltar el texto blanco
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});