import type { Category, Species } from './types';

// Labels en español para las categorías
export const CategoryLabels: Record<Category, string> = {
  'emetics': 'Eméticos',
  'antidotes': 'Antídotos',
  'antiseptics': 'Antisépticos',
  'hydration': 'Rehidratación',
  'antihistamines': 'Antihistamínicos',
  'solutions': 'Soluciones',
  'healing': 'Cicatrizantes',
  'anti_inflammatory': 'Antiinflamatorios',
  'antiparasitics': 'Antiparasitarios',
  'instruments': 'Instrumentos',
  'bandages': 'Vendajes'
};

// Labels en español para las especies
export const SpeciesLabels: Record<Species, string> = {
  'dog': 'Perro',
  'cat': 'Gato',
  'bovine': 'Bovino',
  'equine': 'Equino',
  'ovine': 'Ovino',
  'caprine': 'Caprino',
  'porcine': 'Porcino'
};

// Prefijo para códigos QR
export const QR_CODE_PREFIX = 'VET-AID-';

// Configuración de la base de datos
export const DB_NAME = 'VeterinaryFirstAidDB';
export const DB_VERSION = 7;
export const ITEMS_STORE_NAME = 'items';
export const PREFERENCES_STORE_NAME = 'userPreferences';
