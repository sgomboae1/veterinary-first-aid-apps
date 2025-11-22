import { getDatabase } from './database';
import { ITEMS_STORE_NAME, QR_CODE_PREFIX } from '../models/constants';
import type { FirstAidItem, Category } from '../models/types';

/**
 * Repositorio para gestionar los elementos del botiquín
 */
export class FirstAidRepository {
  /**
   * Obtiene todos los elementos del botiquín
   */
  async getAllItems(): Promise<FirstAidItem[]> {
    const db = await getDatabase();
    return await db.getAll(ITEMS_STORE_NAME);
  }

  /**
   * Obtiene un elemento por su ID
   */
  async getItemById(id: string): Promise<FirstAidItem | undefined> {
    const db = await getDatabase();
    return await db.get(ITEMS_STORE_NAME, id);
  }

  /**
   * Obtiene un elemento por su código QR
   */
  async getItemByQRCode(qrCode: string): Promise<FirstAidItem | undefined> {
    const db = await getDatabase();
    const index = db.transaction(ITEMS_STORE_NAME).store.index('qrCode');
    return await index.get(qrCode);
  }

  /**
   * Obtiene elementos filtrados por categoría
   */
  async getItemsByCategory(category: Category): Promise<FirstAidItem[]> {
    const db = await getDatabase();
    const index = db.transaction(ITEMS_STORE_NAME).store.index('category');
    return await index.getAll(category);
  }

  /**
   * Busca elementos por término de búsqueda
   */
  async searchItems(query: string): Promise<FirstAidItem[]> {
    const allItems = await this.getAllItems();
    const lowerQuery = query.toLowerCase();
    
    return allItems.filter(item => 
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.function.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Guarda un elemento en la base de datos
   */
  async saveItem(item: FirstAidItem): Promise<void> {
    const db = await getDatabase();
    await db.put(ITEMS_STORE_NAME, item);
  }

  /**
   * Actualiza un elemento existente en la base de datos
   */
  async updateItem(item: FirstAidItem): Promise<void> {
    const db = await getDatabase();
    await db.put(ITEMS_STORE_NAME, item);
  }

  /**
   * Guarda múltiples elementos en la base de datos
   */
  async saveItems(items: FirstAidItem[]): Promise<void> {
    const db = await getDatabase();
    const tx = db.transaction(ITEMS_STORE_NAME, 'readwrite');
    
    await Promise.all([
      ...items.map(item => tx.store.put(item)),
      tx.done
    ]);
  }

  /**
   * Elimina un elemento por su ID
   */
  async deleteItem(id: string): Promise<void> {
    const db = await getDatabase();
    await db.delete(ITEMS_STORE_NAME, id);
  }

  /**
   * Elimina todos los elementos
   */
  async clearAllItems(): Promise<void> {
    const db = await getDatabase();
    await db.clear(ITEMS_STORE_NAME);
  }

  /**
   * Verifica si la base de datos tiene datos
   */
  async hasData(): Promise<boolean> {
    const db = await getDatabase();
    const count = await db.count(ITEMS_STORE_NAME);
    return count > 0;
  }

  /**
   * Genera un código QR para un elemento
   */
  generateQRCode(itemId: string): string {
    return `${QR_CODE_PREFIX}${itemId}`;
  }

  /**
   * Extrae el ID de un código QR
   */
  extractIdFromQRCode(qrCode: string): string | null {
    if (!qrCode.startsWith(QR_CODE_PREFIX)) {
      return null;
    }
    return qrCode.replace(QR_CODE_PREFIX, '');
  }
}

// Exportar una instancia singleton
export const repository = new FirstAidRepository();
