import { createContext, useContext, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import type { QRScanResult } from '../models/types';
import { repository } from '../services';

interface QRContextType {
  isScanning: boolean;
  error: string | null;
  startScanning: () => void;
  stopScanning: () => void;
  handleQRScan: (qrCode: string) => Promise<QRScanResult>;
}

const QRContext = createContext<QRContextType | undefined>(undefined);

interface QRProviderProps {
  children: ReactNode;
}

export function QRProvider({ children }: QRProviderProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const startScanning = () => {
    setIsScanning(true);
    setError(null);
  };

  const stopScanning = () => {
    setIsScanning(false);
    setError(null);
  };

  const handleQRScan = async (qrCode: string): Promise<QRScanResult> => {
    try {
      // Buscar el item por código QR
      const item = await repository.getItemByQRCode(qrCode);

      if (!item) {
        // Intentar extraer el ID del código QR
        const itemId = repository.extractIdFromQRCode(qrCode);
        
        if (!itemId) {
          setError('Código QR no válido');
          return {
            success: false,
            error: 'Código QR no válido. Asegúrate de escanear un código del botiquín veterinario.'
          };
        }

        // Buscar por ID
        const itemById = await repository.getItemById(itemId);
        
        if (!itemById) {
          setError('Elemento no encontrado');
          return {
            success: false,
            error: 'Elemento no encontrado en el botiquín.'
          };
        }

        // Navegar al detalle del item
        stopScanning();
        navigate(`/item/${itemById.id}`);
        
        return {
          success: true,
          itemId: itemById.id
        };
      }

      // Navegar al detalle del item
      stopScanning();
      navigate(`/item/${item.id}`);

      return {
        success: true,
        itemId: item.id
      };
    } catch (err) {
      console.error('Error al procesar código QR:', err);
      setError('Error al procesar el código QR');
      return {
        success: false,
        error: 'Error al procesar el código QR. Intenta nuevamente.'
      };
    }
  };

  const value: QRContextType = {
    isScanning,
    error,
    startScanning,
    stopScanning,
    handleQRScan
  };

  return <QRContext.Provider value={value}>{children}</QRContext.Provider>;
}

export function useQR(): QRContextType {
  const context = useContext(QRContext);
  if (context === undefined) {
    throw new Error('useQR debe ser usado dentro de un QRProvider');
  }
  return context;
}
