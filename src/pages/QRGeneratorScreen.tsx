import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Alert } from '../components';
import { PasswordProtected } from '../components/PasswordProtected';
import { initialItems } from '../data/initialData';
import { generateQRCode, downloadQRCode } from '../utils/generateQRCodes';
import './QRGeneratorScreen.css';

export function QRGeneratorScreen() {
  const navigate = useNavigate();
  const [qrCodes, setQrCodes] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    generateAllQRs();
  }, []);

  const generateAllQRs = async () => {
    setIsGenerating(true);
    const codes: Record<string, string> = {};
    
    for (const item of initialItems) {
      try {
        const dataUrl = await generateQRCode(item.qrCode);
        codes[item.id] = dataUrl;
      } catch (err) {
        console.error(`Error generando QR para ${item.name}:`, err);
      }
    }
    
    setQrCodes(codes);
    setIsGenerating(false);
  };

  const handleDownload = (itemId: string) => {
    const dataUrl = qrCodes[itemId];
    if (dataUrl) {
      downloadQRCode(dataUrl, `qr-${itemId}`);
    }
  };

  const handleDownloadAll = () => {
    initialItems.forEach(item => {
      const dataUrl = qrCodes[item.id];
      if (dataUrl) {
        setTimeout(() => {
          downloadQRCode(dataUrl, `qr-${item.id}`);
        }, 100 * initialItems.indexOf(item));
      }
    });
  };

  return (
    <PasswordProtected correctPassword="botiquin2024">
      <div className="qr-generator-screen">
        <div className="container">
        <header className="qr-generator-header">
          <Button variant="secondary" onClick={() => navigate('/')}>
            ← Volver
          </Button>
          <h1>Generador de Códigos QR</h1>
        </header>

        <Alert type="info">
          <strong>📋 Instrucciones:</strong> Descarga los códigos QR e imprímelos para pegarlos 
          en los contenedores físicos de cada medicamento del botiquín.
        </Alert>

        <div className="qr-generator-actions">
          <Button 
            variant="primary" 
            size="large"
            onClick={handleDownloadAll}
            disabled={isGenerating || Object.keys(qrCodes).length === 0}
          >
            📥 Descargar Todos los QR
          </Button>
        </div>

        {isGenerating ? (
          <div className="loading-state">
            <p>Generando códigos QR...</p>
          </div>
        ) : (
          <div className="qr-grid">
            {initialItems.map(item => (
              <Card key={item.id} className="qr-card">
                <h3>{item.name}</h3>
                <div className="qr-code-container">
                  {qrCodes[item.id] ? (
                    <img src={qrCodes[item.id]} alt={`QR de ${item.name}`} />
                  ) : (
                    <div className="qr-placeholder">Generando...</div>
                  )}
                </div>
                <p className="qr-code-text">{item.qrCode}</p>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => handleDownload(item.id)}
                  disabled={!qrCodes[item.id]}
                >
                  📥 Descargar
                </Button>
              </Card>
            ))}
          </div>
        )}
        </div>
      </div>
    </PasswordProtected>
  );
}
