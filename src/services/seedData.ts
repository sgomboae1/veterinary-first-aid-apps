import { repository } from './repository';
import { initialItems } from '../data/initialData';

/**
 * Carga los datos iniciales en la base de datos si está vacía
 */
export async function seedInitialData(): Promise<void> {
  const hasData = await repository.hasData();
  
  if (!hasData) {
    console.log('Cargando datos iniciales del botiquín...');
    await repository.saveItems(initialItems);
    console.log(`${initialItems.length} elementos cargados exitosamente`);
  } else {
    console.log('La base de datos ya contiene datos');
  }
}

/**
 * Fuerza la recarga de todos los datos (útil para actualizaciones)
 */
export async function reloadAllData(): Promise<void> {
  console.log('Recargando todos los datos...');
  await repository.clearAllItems();
  await repository.saveItems(initialItems);
  console.log(`${initialItems.length} elementos recargados exitosamente`);
}
