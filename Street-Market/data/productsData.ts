import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Audífonos Bluetooth Inalámbricos',
    category: 'Electrónica',
    price: 45.0,
    shortDescription: 'Cancelación de ruido activa y batería de 24 horas.',
    fullDescription:
      'Disfruta de una calidad de sonido superior con estos audífonos ergonómicos. Incluyen estuche de carga rápida, protección contra agua IPX4 y micrófono integrado para llamadas claras.',
    image: 'https://picsum.photos/seed/headphones/400/300',
  },
  {
    id: '2',
    title: 'Mochila Urbana Impermeable',
    category: 'Accesorios',
    price: 29.99,
    shortDescription: 'Espacio para laptop de hasta 15.6 pulgadas y puerto USB.',
    fullDescription:
      'Mochila resistente al agua ideal para uso diario o viajes. Dispone de múltiples compartimentos organizadores, puerto exterior de carga USB y respaldo acolchado transpirable.',
    image: 'https://picsum.photos/seed/backpack/400/300',
  },
  {
    id: '3',
    title: 'Teclado Mecánico RGB',
    category: 'Computación',
    price: 65.5,
    shortDescription: 'Switches azules con iluminación personalizada.',
    fullDescription:
      'Teclado mecánico diseñado para programación y gaming. Cuenta con teclas de doble inyección, construcción duradera en aluminio y compatibilidad con Windows y macOS.',
    image: 'https://picsum.photos/seed/keyboard/400/300',
  },
  {
    id: '4',
    title: 'Reloj Inteligente Deportivo',
    category: 'Electrónica',
    price: 89.9,
    shortDescription: 'Monitoreo de ritmo cardíaco, GPS y resistencia al agua.',
    fullDescription:
      'Sigue tu rendimiento físico diario con métricas avanzadas. Cuenta con pantalla AMOLED de alta resolución, más de 20 modos deportivos y autonomía de hasta 7 días por carga.',
    image: 'https://picsum.photos/seed/smartwatch/400/300',
  },
];