import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CategoryBadge } from './CategoryBadge';

interface ProductCardProps {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  onPress: (color: string) => void;
}

const CARD_COLORS = ['#f0fdf4', '#e0f2fe', '#fefce8'];

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  category,
  description,
  image,
  onPress,
}) => {
  const cardColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * CARD_COLORS.length);
    return CARD_COLORS[randomIndex];
  }, []);

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: cardColor }]}
      onPress={() => onPress(cardColor)}
      activeOpacity={0.85}
    >
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <CategoryBadge text={category} />
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
    lineHeight: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#15803d',
  },
});