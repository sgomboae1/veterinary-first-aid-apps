import QRCode from 'qrcode';
import { initialItems } from '../data/initialData';

/**
 * Genera códigos QR para todos los medicamentos
 */
export async function generateAllQRCodes(): Promise<void> {
  console.log('Generando códigos QR para todos los medicamentos...');
  
  for (const item of initialItems) {
    try {
      const qrDataUrl = await QRCode.toDataURL(item.qrCode, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      
      console.log(`✓ QR generado para: ${item.name}`);
      console.log(`  Código: ${item.qrCode}`);
      console.log(`  Data URL: ${qrDataUrl.substring(0, 50)}...`);
    } catch (err) {
      console.error(`✗ Error generando QR para ${item.name}:`, err);
    }
  }
  
  console.log('\n✓ Generación de códigos QR completada');
}

/**
 * Genera un código QR individual
 */
export async function generateQRCode(qrCode: string): Promise<string> {
  return await QRCode.toDataURL(qrCode, {
    width: 300,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    }
  });
}

/**
 * Descarga un código QR como imagen
 */
export function downloadQRCode(dataUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `${filename}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
