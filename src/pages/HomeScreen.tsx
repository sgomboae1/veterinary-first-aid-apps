import { useApp } from '../contexts';
import { ItemList } from '../components/ItemList';
import { CategoryFilter } from '../components/CategoryFilter';
import { Button, Alert } from '../components';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';

export function HomeScreen() {
  const { getFilteredItems, isLoading, error, selectedCategory, setSelectedCategory } = useApp();
  const navigate = useNavigate();
  const filteredItems = getFilteredItems();

  if (isLoading) {
    return (
      <div className="home-screen">
        <div className="container">
          <div className="loading-state">
            <p>Cargando botiquín...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-screen">
      <div className="container">
        <header className="home-header">
          <div className="home-header-content">
            <h1>🏥 Botiquín Veterinario</h1>
            <p className="home-subtitle">
              Accede rápidamente a información de medicamentos y guías de emergencia
            </p>
          </div>
          <Button 
            variant="primary" 
            size="large"
            onClick={() => navigate('/scan')}
          >
            📷 Escanear QR
          </Button>
        </header>

        {/* Sección informativa sobre la importancia del botiquín */}
        <div className="info-banner">
          <div className="info-banner-icon">🚨</div>
          <div className="info-banner-content">
            <h3>¿Por qué es importante tener un botiquín veterinario?</h3>
            <p>
              En una emergencia, cada segundo cuenta. Un botiquín veterinario bien equipado puede marcar la diferencia 
              entre la vida y la muerte de tu mascota. Tener acceso inmediato a medicamentos esenciales y conocer 
              cómo administrarlos correctamente te permite actuar rápidamente mientras llegas al veterinario, 
              estabilizando a tu mascota y evitando complicaciones graves.
            </p>
            <div className="info-highlights">
              <span className="info-highlight">⏱️ Respuesta inmediata</span>
              <span className="info-highlight">💊 Medicamentos esenciales</span>
              <span className="info-highlight">📋 Guías paso a paso</span>
            </div>
          </div>
        </div>

        {error && (
          <Alert type="danger">
            {error}
          </Alert>
        )}

        <div className="home-stats">
          <div className="stat-card">
            <span className="stat-number">{filteredItems.length}</span>
            <span className="stat-label">
              {selectedCategory ? 'Elementos filtrados' : 'Elementos disponibles'}
            </span>
          </div>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <ItemList items={filteredItems} />
      </div>
    </div>
  );
}
