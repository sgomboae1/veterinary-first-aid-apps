import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { FirstAidItem, Category } from '../models/types';
import { repository, seedInitialData } from '../services';

interface AppContextType {
  items: FirstAidItem[];
  selectedCategory: Category | null;
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
  setSelectedCategory: (category: Category | null) => void;
  setSearchTerm: (term: string) => void;
  getFilteredItems: () => FirstAidItem[];
  refreshItems: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [items, setItems] = useState<FirstAidItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos iniciales al montar el componente
  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Cargar datos iniciales si la DB está vacía
      await seedInitialData();
      
      // Obtener todos los items
      const allItems = await repository.getAllItems();
      setItems(allItems);
    } catch (err) {
      console.error('Error al cargar items:', err);
      setError('Error al cargar los datos del botiquín');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshItems = async () => {
    await loadItems();
  };

  const getFilteredItems = (): FirstAidItem[] => {
    let filtered = items;

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filtrar por término de búsqueda
    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowerSearch) ||
        item.description.toLowerCase().includes(lowerSearch) ||
        item.function.toLowerCase().includes(lowerSearch)
      );
    }

    return filtered;
  };

  const value: AppContextType = {
    items,
    selectedCategory,
    searchTerm,
    isLoading,
    error,
    setSelectedCategory,
    setSearchTerm,
    getFilteredItems,
    refreshItems
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
}
