import { Product } from './product';

export type RootStackParamList = {
  Home: undefined;
  Detail: { product: Product; cardColor?: string };
  Profile: undefined;
};