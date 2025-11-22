import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { repository } from '../services';
import { Button, Badge, Alert, Card } from '../components';
import { VideoPlayer } from '../components/VideoPlayer';
import { CategoryLabels, SpeciesLabels } from '../models/constants';
import type { FirstAidItem } from '../models/types';
import './ItemDetailScreen.css';

export function ItemDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<FirstAidItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadItem();
  }, [id]);

  const loadItem = async () => {
    if (!id) {
      setError('ID de elemento no válido');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const foundItem = await repository.getItemById(id);
      
      if (!foundItem) {
        setError('Elemento no encontrado');
      } else {
        setItem(foundItem);
      }
    } catch (err) {
      console.error('Error al cargar elemento:', err);
      setError('Error al cargar la información del elemento');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="item-detail-screen">
        <div className="container">
          <div className="loading-state">
            <p>Cargando información...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="item-detail-screen">
        <div className="container">
          <Alert type="danger">{error || 'Elemento no encontrado'}</Alert>
          <Button onClick={() => navigate('/')}>← Volver al inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-screen">
      <div className="container">
        <header className="item-detail-header">
          <Button variant="secondary" onClick={() => navigate('/')}>
            ← Volver
          </Button>
          <Button 
            variant="primary" 
            onClick={() => navigate(`/emergency/${item.id}`)}
          >
            🚨 Ver Guía de Emergencia
          </Button>
        </header>

        <div className="item-detail-content">
          <div className="item-detail-main">
            <div className="item-detail-image">
              <img 
                src={item.image} 
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400?text=Sin+Imagen';
                }}
              />
            </div>

            <div className="item-detail-info">
              <h1>{item.name}</h1>
              <div className="item-detail-badges">
                <Badge variant="info">{CategoryLabels[item.category]}</Badge>
                {item.laboratory && <Badge variant="default">{item.laboratory}</Badge>}
              </div>
              <p className="item-detail-description">{item.description}</p>
            </div>
          </div>

          <div className="item-detail-sections">
            {/* Video Instructivo */}
            {item.instructionalVideo && (
              <Card>
                <h2>📹 Video Instructivo</h2>
                <p>Aprende cómo usar este medicamento correctamente</p>
                <VideoPlayer 
                  videoUrl={item.instructionalVideo}
                  thumbnail={item.videoThumbnail}
                  title={`Cómo usar ${item.name}`}
                />
              </Card>
            )}

            {/* Función */}
            <Card>
              <h2>🎯 Función</h2>
              <p>{item.function}</p>
            </Card>

            {/* Composición */}
            <Card>
              <h2>🧪 Composición</h2>
              <p>{item.composition}</p>
              {item.components && item.components.length > 0 && (
                <ul className="item-detail-list">
                  {item.components.map((component, index) => (
                    <li key={index}>{component}</li>
                  ))}
                </ul>
              )}
            </Card>

            {/* Especies Aplicables */}
            <Card>
              <h2>🐾 Especies Aplicables</h2>
              <div className="species-badges">
                {item.applicableSpecies.map((species) => (
                  <Badge key={species} variant="success">
                    {SpeciesLabels[species]}
                  </Badge>
                ))}
              </div>
              {item.restrictedSpecies && item.restrictedSpecies.length > 0 && (
                <Alert type="danger">
                  <strong>NO usar en:</strong>{' '}
                  {item.restrictedSpecies.map(s => SpeciesLabels[s]).join(', ')}
                </Alert>
              )}
            </Card>

            {/* Indicaciones */}
            <Card>
              <h2>✅ Indicaciones</h2>
              <ul className="item-detail-list">
                {item.indications.map((indication, index) => (
                  <li key={index}>{indication}</li>
                ))}
              </ul>
            </Card>

            {/* Contraindicaciones */}
            <Card>
              <h2>⛔ Contraindicaciones</h2>
              <ul className="item-detail-list warning-list">
                {item.contraindications.map((contraindication, index) => (
                  <li key={index}>{contraindication}</li>
                ))}
              </ul>
            </Card>

            {/* Dosificación */}
            <Card>
              <h2>💊 Dosificación</h2>
              {item.dosage.general && <p>{item.dosage.general}</p>}
              {item.dosage.byWeight && (
                <p>
                  <strong>Por peso:</strong> {item.dosage.byWeight.amount} {item.dosage.byWeight.unit}
                  {item.dosage.byWeight.perKg ? ' por kg de peso corporal' : ''}
                </p>
              )}
              {item.dosage.frequency && (
                <p><strong>Frecuencia:</strong> {item.dosage.frequency}</p>
              )}
              {item.dosage.maxDoses && (
                <p><strong>Dosis máximas:</strong> {item.dosage.maxDoses}</p>
              )}
              {item.dosage.ageRestrictions && (
                <p><strong>Restricciones de edad:</strong> {item.dosage.ageRestrictions}</p>
              )}
            </Card>

            {/* Administración */}
            <Card>
              <h2>💉 Administración</h2>
              <p><strong>Vía:</strong> {item.administration.route}</p>
              <ul className="item-detail-list">
                {item.administration.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
              {item.administration.duration && (
                <p><strong>Duración:</strong> {item.administration.duration}</p>
              )}
            </Card>

            {/* Precauciones */}
            <Card>
              <h2>⚠️ Precauciones</h2>
              <ul className="item-detail-list">
                {item.precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
              </ul>
            </Card>

            {/* Efectos Secundarios */}
            {item.sideEffects.length > 0 && (
              <Card>
                <h2>🔔 Efectos Secundarios</h2>
                <ul className="item-detail-list">
                  {item.sideEffects.map((effect, index) => (
                    <li key={index}>{effect}</li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Advertencias */}
            {item.warnings.length > 0 && (
              <Card>
                <h2>🚨 Advertencias Importantes</h2>
                <div className="warnings-box">
                  {item.warnings.map((warning, index) => (
                    <Alert key={index} type="warning">
                      {warning}
                    </Alert>
                  ))}
                </div>
              </Card>
            )}

            {/* Almacenamiento */}
            {item.storageInstructions && (
              <Card>
                <h2>📦 Almacenamiento</h2>
                <p>{item.storageInstructions}</p>
              </Card>
            )}
          </div>

          <div className="item-detail-footer">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => navigate(`/emergency/${item.id}`)}
            >
              🚨 Ver Guía de Emergencia Completa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
