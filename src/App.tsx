import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { QRProvider } from './contexts/QRContext';
import { HomeScreen } from './pages/HomeScreen';
import { QRScanScreen } from './pages/QRScanScreen';
import { ItemDetailScreen } from './pages/ItemDetailScreen';
import { EmergencyGuideScreen } from './pages/EmergencyGuideScreen';
import { QRGeneratorScreen } from './pages/QRGeneratorScreen';
import { VideoTestScreen } from './pages/VideoTestScreen';
import { AdminScreen } from './pages/AdminScreen';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <QRProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/scan" element={<QRScanScreen />} />
            <Route path="/item/:id" element={<ItemDetailScreen />} />
            <Route path="/emergency/:id" element={<EmergencyGuideScreen />} />
            <Route path="/qr-generator" element={<QRGeneratorScreen />} />
            <Route path="/video-test" element={<VideoTestScreen />} />
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </QRProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
