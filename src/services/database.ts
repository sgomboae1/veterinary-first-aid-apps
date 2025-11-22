import { openDB, type IDBPDatabase } from 'idb';
import { DB_NAME, DB_VERSION, ITEMS_STORE_NAME, PREFERENCES_STORE_NAME } from '../models/constants';

let dbInstance: IDBPDatabase | null = null;

/**
 * Inicializa la base de datos IndexedDB
 */
export async function initDatabase(): Promise<IDBPDatabase> {
  if (dbInstance) {
    return dbInstance;
  }

  let needsDataReload = false;

  dbInstance = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion, newVersion) {
      // Crear object store para items si no existe
      if (!db.objectStoreNames.contains(ITEMS_STORE_NAME)) {
        const itemsStore = db.createObjectStore(ITEMS_STORE_NAME, {
          keyPath: 'id'
        });
        
        // Crear índices
        itemsStore.createIndex('category', 'category', { unique: false });
        itemsStore.createIndex('qrCode', 'qrCode', { unique: true });
      }

      // Crear object store para preferencias si no existe
      if (!db.objectStoreNames.contains(PREFERENCES_STORE_NAME)) {
        db.createObjectStore(PREFERENCES_STORE_NAME, {
          keyPath: 'key'
        });
      }

      // Si se actualiza la versión, marcar que necesitamos recargar datos
      if (oldVersion > 0 && newVersion && newVersion > oldVersion) {
        needsDataReload = true;
        console.log(`Base de datos actualizada de v${oldVersion} a v${newVersion}`);
      }
    }
  });

  // Si necesitamos recargar datos, hacerlo después de la actualización
  if (needsDataReload) {
    console.log('Actualizando datos del botiquín...');
    // Importar dinámicamente para evitar dependencias circulares
    const { reloadAllData } = await import('./seedData');
    await reloadAllData();
  }

  return dbInstance;
}

/**
 * Obtiene la instancia de la base de datos
 */
export async function getDatabase(): Promise<IDBPDatabase> {
  if (!dbInstance) {
    return await initDatabase();
  }
  return dbInstance;
}

/**
 * Cierra la conexión a la base de datos
 */
export function closeDatabase(): void {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
}
