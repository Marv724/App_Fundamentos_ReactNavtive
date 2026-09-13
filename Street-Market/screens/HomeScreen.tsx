import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Product } from '../types/product';
import { PRODUCTS } from '../data/productsData';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(PRODUCTS);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0284c7" />
        <Text style={styles.loadingText}>Cargando productos del mercado...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Header title="Mercado Online" subtitle="Catálogo de productos disponibles" />}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.shortDescription}
            image={item.image}
            onPress={() => navigation.navigate('Detail', { product: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
        /* AGREGAR ESTA LÍNEA: Relleno inferior interno para que la última tarjeta no quede bajo los botones */
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
  },
  listContent: {
    paddingBottom: 30, // Espacio extra al final de la lista
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    marginTop: 12,
    color: '#64748b',
    fontSize: 14,
  },
});