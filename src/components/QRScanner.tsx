import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Button, Alert } from './index';
import './QRScanner.css';

interface QRScannerProps {
  onScan: (qrCode: string) => void;
  onError?: (error: string) => void;
}

export function QRScanner({ onScan, onError }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'pending' | 'granted' | 'denied'>('pending');
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const elementId = 'qr-reader';

  const requestCameraPermission = async () => {
    try {
      setIsRequestingPermission(true);
      setError(null);

      // Solicitar permiso explícito de la cámara
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      // Si llegamos aquí, el permiso fue concedido
      setPermissionStatus('granted');
      
      // Detener el stream temporal
      stream.getTracks().forEach(track => track.stop());
      
      // Iniciar el escaneo
      await startScanning();
    } catch (err: any) {
      console.error('Error al solicitar permiso de cámara:', err);
      setPermissionStatus('denied');
      
      let errorMsg = 'No se pudo acceder a la cámara.';
      
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        errorMsg = '❌ Permiso de cámara denegado. Por favor, permite el acceso a la cámara en la configuración de tu navegador.';
      } else if (err.name === 'NotFoundError') {
        errorMsg = '❌ No se encontró ninguna cámara en tu dispositivo.';
      } else if (err.name === 'NotReadableError') {
        errorMsg = '❌ La cámara está siendo usada por otra aplicación.';
      }
      
      setError(errorMsg);
      if (onError) onError(errorMsg);
    } finally {
      setIsRequestingPermission(false);
    }
  };

  const startScanning = async () => {
    try {
      setError(null);
      
      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode(elementId);
      }

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      };

      await scannerRef.current.start(
        { facingMode: 'environment' },
        config,
        (decodedText) => {
          // QR escaneado exitosamente
          onScan(decodedText);
          stopScanning();
        },
        () => {
          // Error de escaneo (normal mientras busca QR)
          // No hacer nada, es parte del proceso normal
        }
      );

      setIsScanning(true);
    } catch (err) {
      const errorMsg = 'No se pudo iniciar el escáner. Intenta nuevamente.';
      setError(errorMsg);
      if (onError) onError(errorMsg);
      console.error('Error al iniciar escáner:', err);
    }
  };

  const stopScanning = async () => {
    try {
      if (scannerRef.current && isScanning) {
        await scannerRef.current.stop();
        setIsScanning(false);
      }
    } catch (err) {
      console.error('Error al detener escáner:', err);
    }
  };

  useEffect(() => {
    return () => {
      // Limpiar al desmontar
      if (scannerRef.current) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, []);

  return (
    <div className="qr-scanner">
      {error && (
        <Alert type="danger" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {permissionStatus === 'pending' && !isScanning && (
        <div className="camera-permission-request">
          <div className="permission-icon">📷</div>
          <h3>Acceso a la Cámara</h3>
          <p>Esta aplicación necesita acceso a tu cámara para escanear códigos QR.</p>
          <p className="permission-note">
            Tu privacidad es importante. Solo usaremos la cámara para escanear códigos QR y no guardaremos ninguna imagen.
          </p>
          <Button 
            variant="primary" 
            size="large" 
            onClick={requestCameraPermission}
            disabled={isRequestingPermission}
          >
            {isRequestingPermission ? '⏳ Solicitando permiso...' : '✅ Permitir Acceso a la Cámara'}
          </Button>
        </div>
      )}

      {permissionStatus === 'denied' && (
        <div className="camera-permission-denied">
          <div className="permission-icon">🚫</div>
          <h3>Permiso Denegado</h3>
          <p>No podemos acceder a la cámara sin tu permiso.</p>
          <div className="permission-instructions">
            <h4>Para habilitar el acceso:</h4>
            <ol>
              <li>Haz clic en el ícono de candado 🔒 en la barra de direcciones</li>
              <li>Busca "Cámara" en los permisos</li>
              <li>Cambia el permiso a "Permitir"</li>
              <li>Recarga la página</li>
            </ol>
          </div>
          <Button 
            variant="primary" 
            size="large" 
            onClick={requestCameraPermission}
          >
            🔄 Intentar Nuevamente
          </Button>
        </div>
      )}

      {(permissionStatus === 'granted' || isScanning) && (
        <>
          <div id={elementId} className="qr-scanner-video"></div>

          <div className="qr-scanner-controls">
            {!isScanning ? (
              <Button variant="primary" size="large" onClick={requestCameraPermission}>
                📷 Iniciar Escaneo
              </Button>
            ) : (
              <Button variant="danger" size="large" onClick={stopScanning}>
                ⏹ Detener Escaneo
              </Button>
            )}
          </div>

          <div className="qr-scanner-instructions">
            <p>Apunta la cámara hacia el código QR del medicamento</p>
            <p className="qr-scanner-tip">
              💡 Asegúrate de tener buena iluminación y mantén el código QR dentro del cuadro
            </p>
          </div>
        </>
      )}
    </div>
  );
}
