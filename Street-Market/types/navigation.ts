import { Product } from './product';

// Parámetros que acepta cada pantalla en el Stack StackNavigator
export type RootStackParamList = {
  Home: undefined; // No recibe parámetros
  Detail: { product: Product }; // Requiere recibir un objeto Product completo
  Profile: undefined; // No recibe parámetros
};