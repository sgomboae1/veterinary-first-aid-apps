import { useNavigate } from 'react-router-dom';
import { useQR } from '../contexts';
import { QRScanner } from '../components/QRScanner';
import { Button, Alert } from '../components';
import './QRScanScreen.css';

export function QRScanScreen() {
  const navigate = useNavigate();
  const { handleQRScan, error } = useQR();

  const onScan = async (qrCode: string) => {
    const result = await handleQRScan(qrCode);
    
    if (!result.success && result.error) {
      // El error se muestra en el contexto
      console.error('Error al escanear:', result.error);
    }
    // Si es exitoso, el contexto navega automáticamente
  };

  return (
    <div className="qr-scan-screen">
      <div className="container">
        <header className="qr-scan-header">
          <Button variant="secondary" onClick={() => navigate('/')}>
            ← Volver
          </Button>
          <h1>Escanear Código QR</h1>
        </header>

        {error && (
          <Alert type="danger">
            {error}
          </Alert>
        )}

        <div className="qr-scan-content">
          <QRScanner onScan={onScan} />
        </div>

        <div className="qr-scan-help">
          <h3>¿Cómo usar el escáner?</h3>
          <ol>
            <li>Presiona "Iniciar Escaneo" y permite el acceso a la cámara</li>
            <li>Apunta la cámara hacia el código QR del medicamento</li>
            <li>Mantén el código dentro del cuadro hasta que se escanee</li>
            <li>Serás redirigido automáticamente a la información del medicamento</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
