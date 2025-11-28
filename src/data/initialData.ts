import type { FirstAidItem } from '../models/types';
import { Category, Species, AdministrationRoute } from '../models/types';
import { QR_CODE_PREFIX } from '../models/constants';

export const initialItems: FirstAidItem[] = [
  // 1. Peróxido de Hidrógeno
  {
    id: 'peroxide-hydrogen',
    name: 'Peróxido de Hidrógeno (Agua Oxigenada 3%)',
    category: Category.EMETICS,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop',
    qrCode: `${QR_CODE_PREFIX}peroxide-hydrogen`,
    description: 'Solución emética de uso veterinario al 3% para inducir el vómito en casos de ingestión accidental de sustancias tóxicas no corrosivas en perros.',
    composition: 'Peróxido de hidrógeno (H₂O₂) al 3% en solución acuosa estabilizada',
    function: 'Induce el vómito mediante irritación de la mucosa gástrica, provocando la expulsión del contenido estomacal en 10-15 minutos. Útil en intoxicaciones recientes (menos de 2 horas) por sustancias no corrosivas.',
    indications: [
      'Ingestión de alimentos tóxicos (chocolate, uvas, xilitol)',
      'Ingestión de plantas tóxicas',
      'Ingestión de medicamentos humanos',
      'Ingestión de objetos pequeños no cortantes',
      'Intoxicación por raticidas anticoagulantes'
    ],
    contraindications: [
      'NUNCA usar en gatos (puede causar gastritis hemorrágica severa)',
      'No usar si el animal está inconsciente o con convulsiones',
      'No usar si ingirió sustancias corrosivas (lejía, ácidos, bases)',
      'No usar si ingirió objetos cortantes o punzantes',
      'No usar si ingirió derivados del petróleo (gasolina, queroseno)',
      'No usar en animales con problemas cardíacos o respiratorios',
      'No usar si han pasado más de 2 horas desde la ingestión'
    ],
    dosage: { 
      byWeight: { amount: '1-2', unit: 'ml', perKg: true }, 
      maxDoses: 2,
      frequency: 'Esperar 15 minutos entre dosis si es necesaria una segunda'
    },
    administration: {
      route: AdministrationRoute.ORAL,
      instructions: [
        'Administrar por vía oral con jeringa sin aguja',
        'Dar lentamente por el costado de la boca',
        'Solo si el animal está completamente consciente y alerta',
        'El vómito debe ocurrir en 10-15 minutos',
        'Si no vomita después de 15 minutos, puede dar una segunda dosis',
        'NO dar más de 2 dosis',
        'Llevar al veterinario inmediatamente después del vómito'
      ]
    },
    precautions: [
      'Usar solo si el animal está consciente y puede tragar',
      'No ha ingerido sustancias corrosivas o cortantes',
      'No repetir más de dos veces (riesgo de gastritis)',
      'Mantener al perro en movimiento después de administrar',
      'Llevar al veterinario después del vómito para evaluación',
      'Guardar una muestra del vómito para mostrar al veterinario',
      'No usar en razas braquicéfalas (Bulldog, Pug) sin supervisión veterinaria'
    ],
    sideEffects: [
      'Salivación excesiva',
      'Gastritis leve temporal',
      'Diarrea transitoria',
      'Letargo temporal después del vómito'
    ],
    warnings: [
      '⚠️ EXCLUSIVO PARA PERROS - NUNCA EN GATOS',
      '⚠️ NO usar si han pasado más de 2 horas',
      '⚠️ Consultar SIEMPRE con veterinario antes de usar',
      '⚠️ Llevar al veterinario después de inducir el vómito'
    ],
    applicableSpecies: [Species.DOG],
    restrictedSpecies: [Species.CAT],
    instructionalVideo: 'https://vt.tiktok.com/ZSyb3obNj/',
    emergencyGuide: [
      { 
        stepNumber: 1, 
        title: 'Evaluar la situación', 
        description: 'Identifica qué ingirió el perro, cuánto y hace cuánto tiempo. Si han pasado más de 2 horas, NO uses peróxido.',
        warning: 'NO inducir vómito si ingirió sustancias corrosivas, cortantes o derivados del petróleo'
      },
      { 
        stepNumber: 2, 
        title: 'Verificar consciencia', 
        description: 'Asegúrate de que el perro esté completamente despierto, alerta y pueda tragar sin problemas.',
        warning: 'NUNCA administrar a un perro inconsciente, con convulsiones o dificultad respiratoria'
      },
      { 
        stepNumber: 3, 
        title: 'Calcular la dosis', 
        description: 'Usa 1-2 ml por kg de peso corporal. Ejemplo: perro de 10 kg = 10-20 ml de peróxido al 3%.'
      },
      { 
        stepNumber: 4, 
        title: 'Administrar correctamente', 
        description: 'Con jeringa sin aguja, administra lentamente por el costado de la boca. Deja que trague entre pequeñas cantidades.'
      },
      { 
        stepNumber: 5, 
        title: 'Mantener en movimiento', 
        description: 'Camina con el perro durante 10-15 minutos. El movimiento ayuda a que el peróxido actúe más rápido.'
      },
      { 
        stepNumber: 6, 
        title: 'Observar el vómito', 
        description: 'El vómito debe ocurrir en 10-15 minutos. Guarda una muestra para mostrar al veterinario.',
        warning: 'Si no vomita en 15 minutos, puedes dar UNA segunda dosis. NO más de 2 dosis total'
      },
      { 
        stepNumber: 7, 
        title: 'Acudir al veterinario', 
        description: 'Después del vómito, lleva al perro al veterinario inmediatamente para evaluación y tratamiento adicional.',
        warning: 'El vómito NO elimina todas las toxinas. Se necesita atención veterinaria'
      }
    ],
    storageInstructions: 'Guardar en envase opaco, bien tapado, en lugar fresco y oscuro. La luz degrada el peróxido. Verificar fecha de caducidad regularmente.'
  },

  // 2. Carbón Activado
  {
    id: 'activated-charcoal',
    name: 'Carbón Activado',
    category: Category.ANTIDOTES,
    image: 'https://ecovalle.pe/wp-content/uploads/2020/04/CARBON-ACTIVADO-45G-1.jpg',
    qrCode: `${QR_CODE_PREFIX}activated-charcoal`,
    description: 'Antídoto que absorbe toxinas en el estómago.',
    composition: 'Carbón activado en polvo',
    function: 'Absorbe las toxinas en el estómago en casos de envenenamiento.',
    indications: ['Envenenamiento', 'Ingestión de sustancias tóxicas'],
    contraindications: ['No usar si el gato está débil', 'No usar con químicos corrosivos'],
    dosage: { byWeight: { amount: '1', unit: 'g', perKg: true } },
    administration: {
      route: AdministrationRoute.ORAL,
      instructions: ['Disolver en agua (1:5)', 'Dar con jeringa sin aguja']
    },
    precautions: ['Solo en gatos conscientes', 'Llevar al veterinario si presenta convulsiones'],
    sideEffects: ['Heces negras (normal)'],
    warnings: ['SOLO PARA GATOS', 'NO usar con sustancias corrosivas'],
    applicableSpecies: [Species.CAT],
    instructionalVideo: 'https://www.youtube.com/shorts/xgDpsCuHM1w',
    emergencyGuide: [
      { stepNumber: 1, title: 'Verificar consciencia', description: 'El gato debe poder tragar.' },
      { stepNumber: 2, title: 'Preparar mezcla', description: 'Disolver 1 parte en 5 de agua.' }
    ]
  },

  // 3. Clorhexidina
  {
    id: 'chlorhexidine',
    name: 'Clorhexidina',
    category: Category.ANTISEPTICS,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop',
    qrCode: `${QR_CODE_PREFIX}chlorhexidine`,
    description: 'Antiséptico de uso tópico para desinfectar heridas.',
    composition: 'Clorhexidina',
    function: 'Desinfectar heridas, cortes, mordidas o raspones.',
    indications: ['Heridas superficiales', 'Cortes', 'Mordidas'],
    contraindications: ['No usar en heridas profundas sin diluir'],
    dosage: { general: 'Solución diluida (1:10 si es concentrado)' },
    administration: {
      route: AdministrationRoute.TOPICAL,
      instructions: ['Limpiar la herida con gasas', 'Aplicar solución diluida']
    },
    precautions: ['No dejar que el animal lama la zona'],
    sideEffects: ['Irritación leve en piel sensible'],
    warnings: ['NO usar en heridas profundas sin diluir'],
    applicableSpecies: [Species.DOG, Species.CAT],
    instructionalVideo: 'https://www.youtube.com/watch?v=evHeNTmbLGY',
    emergencyGuide: [
      { stepNumber: 1, title: 'Limpiar herida', description: 'Lavar con agua limpia.' },
      { stepNumber: 2, title: 'Aplicar con gasa', description: 'Usar gasa estéril.' }
    ]
  },

  // 4. Suero Oral
  {
    id: 'oral-rehydration',
    name: 'Suero Oral / Solución de Rehidratación',
    category: Category.HYDRATION,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
    qrCode: `${QR_CODE_PREFIX}oral-rehydration`,
    description: 'Solución para rehidratar en casos de vómitos, diarrea o golpe de calor.',
    composition: 'Electrolitos (sodio, potasio, cloruros), glucosa',
    function: 'Rehidratar en casos de vómitos, diarrea o golpe de calor.',
    indications: ['Deshidratación', 'Vómitos', 'Diarrea', 'Golpe de calor'],
    contraindications: ['No dar si el animal está inconsciente'],
    dosage: { byWeight: { amount: '5-10', unit: 'ml', perKg: true }, frequency: 'Cada 2-3 horas' },
    administration: {
      route: AdministrationRoute.ORAL,
      instructions: ['Administrar con jeringa sin aguja', 'Dar lentamente']
    },
    precautions: ['Llevar al veterinario si los síntomas persisten'],
    sideEffects: [],
    warnings: ['Si no mejora en 24 horas, consultar veterinario'],
    applicableSpecies: [Species.DOG, Species.CAT],
    instructionalVideo: 'https://www.youtube.com/shorts/r37IPqVdTnA',
    emergencyGuide: [
      { stepNumber: 1, title: 'Evaluar deshidratación', description: 'Verificar encías secas.' },
      { stepNumber: 2, title: 'Administrar', description: 'Usar 5-10 ml por kg.' }
    ]
  },

  // 5. Antihistamínico
  {
    id: 'antihistamine',
    name: 'Antihistamínico (Difenhidramina/Clorfenamina)',
    category: Category.ANTIHISTAMINES,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    qrCode: `${QR_CODE_PREFIX}antihistamine`,
    description: 'Medicamento para reacciones alérgicas leves y picaduras.',
    composition: 'Difenhidramina o Clorfenamina',
    function: 'Tratar reacciones alérgicas leves, picaduras de insectos.',
    indications: ['Reacciones alérgicas leves', 'Picaduras de insectos', 'Urticaria'],
    contraindications: ['Glaucoma', 'Problemas cardíacos', 'Animales preñados'],
    dosage: { general: 'Difenhidramina: 2-4 mg/kg cada 8h. Clorfenamina: 0.2-0.4 mg/kg cada 12h' },
    administration: {
      route: AdministrationRoute.ORAL,
      instructions: ['Administrar por vía oral', 'Puede darse con comida']
    },
    precautions: ['Puede causar somnolencia', 'Consultar veterinario antes de usar'],
    sideEffects: ['Somnolencia', 'Boca seca'],
    warnings: ['Consultar veterinario antes de usar'],
    applicableSpecies: [Species.DOG, Species.CAT],
    instructionalVideo: 'https://www.youtube.com/watch?v=ZcH4UVveRGI',
    emergencyGuide: [
      { stepNumber: 1, title: 'Identificar alergia', description: 'Buscar hinchazón, urticaria.' },
      { stepNumber: 2, title: 'Administrar dosis', description: 'Seguir indicaciones de dosificación.' }
    ]
  },

  // 6. Suero Fisiológico FISIOVET
  {
    id: 'fisiovet-saline',
    name: 'Suero Fisiológico FISIOVET (250 ml)',
    category: Category.SOLUTIONS,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
    qrCode: `${QR_CODE_PREFIX}fisiovet-saline`,
    description: 'Solución isotónica para higiene ocular y limpieza de heridas.',
    laboratory: 'B.BRAUN VETCARE, S.A.',
    composition: 'Cloruro sódico 0.9 g por 100 ml',
    function: 'Higiene ocular, limpieza de heridas, higiene bucal.',
    indications: ['Limpieza ocular', 'Limpieza de heridas', 'Higiene bucal'],
    contraindications: ['Retención hidrosalina', 'Insuficiencia cardíaca'],
    dosage: { general: 'Según necesidad para limpieza' },
    administration: {
      route: AdministrationRoute.TOPICAL,
      instructions: ['Aplicar directamente sobre la zona', 'Para ojos: usar gasa estéril']
    },
    precautions: ['No usar si la solución está turbia'],
    sideEffects: ['Acidosis en casos raros', 'Hipopotasemia'],
    warnings: ['Administración IV solo por veterinarios'],
    applicableSpecies: [Species.DOG, Species.CAT, Species.BOVINE, Species.EQUINE, Species.OVINE, Species.CAPRINE, Species.PORCINE],
    instructionalVideo: 'https://www.youtube.com/shorts/teW9F1kpetM',
    emergencyGuide: [
      { stepNumber: 1, title: 'Limpieza ocular', description: 'Humedecer gasa y limpiar desde el lagrimal.' },
      { stepNumber: 2, title: 'Limpieza de heridas', description: 'Irrigar abundantemente.' }
    ]
  },

  // 7. Blastoestimulina
  {
    id: 'blastoestimulina',
    name: 'Pomada Cicatrizante (Blastoestimulina)',
    category: Category.HEALING,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop',
    qrCode: `${QR_CODE_PREFIX}blastoestimulina`,
    description: 'Pomada cicatrizante con acción antibiótica para heridas infectadas.',
    composition: 'Extracto de Centella Asiática, Neomicina (Sulfato)',
    function: 'Tratar heridas infectadas, úlceras, quemaduras, heridas quirúrgicas.',
    indications: ['Heridas infectadas', 'Úlceras', 'Quemaduras', 'Heridas quirúrgicas'],
    contraindications: ['No usar en heridas menores', 'No usar con alergia previa'],
    dosage: { frequency: '1-3 veces al día', general: 'Según gravedad de la herida' },
    administration: {
      route: AdministrationRoute.TOPICAL,
      instructions: ['Limpiar y desinfectar herida', 'Aplicar capa fina']
    },
    precautions: ['Evitar que el perro ingiera', 'Usar collar isabelino si es necesario'],
    sideEffects: ['Reacción alérgica en casos raros'],
    warnings: ['SOLO PARA PERROS', 'Peligroso si se ingiere'],
    applicableSpecies: [Species.DOG],
    instructionalVideo: 'https://www.youtube.com/shorts/35ICosXHlZg',
    emergencyGuide: [
      { stepNumber: 1, title: 'Evaluar herida', description: 'Si es grave, ir al veterinario primero.' },
      { stepNumber: 2, title: 'Limpiar y aplicar', description: 'Extender capa fina sobre la lesión.' }
    ]
  },

  // 8. Compresas Frías
  {
    id: 'cold-compress',
    name: 'Antiinflamatorios (Compresas Frías)',
    category: Category.ANTI_INFLAMMATORY,
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400&h=400&fit=crop',
    qrCode: `${QR_CODE_PREFIX}cold-compress`,
    description: 'Compresas frías para reducir inflamación y dolor.',
    composition: 'Bolsa de hielo o compresa fría',
    function: 'Reducir inflamación, dolor, hinchazón. Refrescar en golpes de calor.',
    indications: ['Picaduras', 'Quemaduras', 'Dolor articular', 'Golpe de calor'],
    contraindications: ['No aplicar directamente sin protección'],
    dosage: { frequency: 'Cada 2-3 horas', general: '10-20 minutos por aplicación' },
    administration: {
      route: AdministrationRoute.TOPICAL,
      instructions: ['Envolver en toalla', 'Aplicar 10-20 minutos', 'Supervisar al perro']
    },
    precautions: ['Usar toalla de protección', 'No más de 20 minutos', 'Evitar bolsas con gel tóxico'],
    sideEffects: ['Enfriamiento excesivo si se aplica sin protección'],
    warnings: ['SIEMPRE usar toalla', 'Máximo 20 minutos'],
    applicableSpecies: [Species.DOG, Species.CAT],
    instructionalVideo: 'https://www.youtube.com/watch?v=fOvLrmNwSvM',
    emergencyGuide: [
      { stepNumber: 1, title: 'Preparar compresa', description: 'Envolver en toalla limpia.' },
      { stepNumber: 2, title: 'Aplicar y supervisar', description: 'Mantener 10-20 minutos máximo.' }
    ]
  },

];
