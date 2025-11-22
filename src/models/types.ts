// Tipos constantes para categorías y especies

export const Category = {
  EMETICS: 'emetics', // Eméticos
  ANTIDOTES: 'antidotes', // Antídotos
  ANTISEPTICS: 'antiseptics', // Antisépticos
  HYDRATION: 'hydration', // Rehidratación
  ANTIHISTAMINES: 'antihistamines', // Antihistamínicos
  SOLUTIONS: 'solutions', // Soluciones
  HEALING: 'healing', // Cicatrizantes
  ANTI_INFLAMMATORY: 'anti_inflammatory', // Antiinflamatorios
  ANTIPARASITICS: 'antiparasitics', // Antiparasitarios
  INSTRUMENTS: 'instruments', // Instrumentos
  BANDAGES: 'bandages' // Vendajes
} as const;

export type Category = typeof Category[keyof typeof Category];

export const Species = {
  DOG: 'dog',
  CAT: 'cat',
  BOVINE: 'bovine',
  EQUINE: 'equine',
  OVINE: 'ovine',
  CAPRINE: 'caprine',
  PORCINE: 'porcine'
} as const;

export type Species = typeof Species[keyof typeof Species];

export const AdministrationRoute = {
  ORAL: 'oral',
  TOPICAL: 'topical',
  INTRAVENOUS: 'intravenous',
  OTHER: 'other'
} as const;

export type AdministrationRoute = typeof AdministrationRoute[keyof typeof AdministrationRoute];

// Interfaces para estructuras de datos

export interface Dosage {
  general?: string;
  byWeight?: {
    amount: string;
    unit: string;
    perKg: boolean;
  };
  frequency?: string;
  maxDoses?: number;
  ageRestrictions?: string;
}

export interface Administration {
  route: AdministrationRoute;
  instructions: string[];
  duration?: string;
}

export interface EmergencyStep {
  stepNumber: number;
  title: string;
  description: string;
  warning?: string;
  image?: string;
  video?: string; // URL del video instructivo
  videoThumbnail?: string; // Miniatura del video
}

export interface FirstAidItem {
  id: string;
  name: string;
  category: Category;
  image: string; // URL o base64
  qrCode: string; // Identificador único para QR
  
  // Información general
  description: string;
  laboratory?: string;
  composition: string;
  components?: string[];
  
  // Uso médico
  function: string;
  indications: string[];
  contraindications: string[];
  benefits?: string[];
  
  // Dosificación
  dosage: Dosage;
  administration: Administration;
  
  // Seguridad
  precautions: string[];
  sideEffects: string[];
  warnings: string[];
  
  // Especies aplicables
  applicableSpecies: Species[];
  restrictedSpecies?: Species[]; // Especies en las que NO se debe usar
  
  // Guía de emergencia
  emergencyGuide: EmergencyStep[];
  
  // Videos instructivos
  instructionalVideo?: string; // URL del video principal
  videoThumbnail?: string; // Miniatura del video
  
  // Metadata
  expirationDate?: string;
  storageInstructions?: string;
}

// Tipos auxiliares para el estado de la aplicación

export interface AppState {
  items: FirstAidItem[];
  selectedCategory: Category | null;
  searchTerm: string;
}

export interface QRScanResult {
  success: boolean;
  itemId?: string;
  error?: string;
}

// Tipos para errores de la aplicación

export const AppErrorType = {
  QR_INVALID: 'QR_INVALID',
  ITEM_NOT_FOUND: 'ITEM_NOT_FOUND',
  CAMERA_ACCESS: 'CAMERA_ACCESS',
  DATABASE_ERROR: 'DATABASE_ERROR'
} as const;

export type AppErrorType = typeof AppErrorType[keyof typeof AppErrorType];

export interface AppError {
  type: AppErrorType;
  message: string;
}


