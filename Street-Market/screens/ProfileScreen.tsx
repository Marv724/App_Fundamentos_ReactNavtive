import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';

export const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Mi Perfil" subtitle="Información general de la aplicación" />
      <View style={styles.card}>
        <Text style={styles.label}>Aplicación:</Text>
        <Text style={styles.value}>Mercado Online App</Text>

        <Text style={styles.label}>Estado:</Text>
        <Text style={styles.value}>Cliente Autenticado</Text>

        <Text style={styles.label}>Tecnología:</Text>
        <Text style={styles.value}>React Native + TypeScript</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#0f172a',
    marginTop: 2,
  },
});