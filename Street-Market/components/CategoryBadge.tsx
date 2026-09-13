import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CategoryBadgeProps {
  text: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ text }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  badgeText: {
    color: '#0369a1',
    fontSize: 12,
    fontWeight: '600',
  },
});