import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { repository } from '../services';
import { Button, Alert, Card } from '../components';
import { VideoPlayer } from '../components/VideoPlayer';
import type { FirstAidItem } from '../models/types';
import './EmergencyGuideScreen.css';

export function EmergencyGuideScreen() {
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
      <div className="emergency-guide-screen">
        <div className="container">
          <div className="loading-state">
            <p>Cargando guía de emergencia...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="emergency-guide-screen">
        <div className="container">
          <Alert type="danger">{error || 'Elemento no encontrado'}</Alert>
          <Button onClick={() => navigate('/')}>← Volver al inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="emergency-guide-screen">
      <div className="container">
        <header className="emergency-guide-header">
          <Button variant="secondary" onClick={() => navigate(`/item/${item.id}`)}>
            ← Volver al Detalle
          </Button>
        </header>

        <div className="emergency-guide-title">
          <h1>🚨 Guía de Emergencia</h1>
          <h2>{item.name}</h2>
        </div>

        <Alert type="warning">
          <strong>⚠️ Importante:</strong> Esta guía es para situaciones de emergencia. 
          Siempre consulta con un veterinario lo antes posible.
        </Alert>

        {item.instructionalVideo && (
          <Card className="video-section">
            <h3>📹 Video Instructivo</h3>
            <p>Aprende cómo usar este medicamento correctamente</p>
            <VideoPlayer 
              videoUrl={item.instructionalVideo}
              thumbnail={item.videoThumbnail}
              title={`Cómo usar ${item.name}`}
            />
          </Card>
        )}

        {item.warnings.length > 0 && (
          <div className="emergency-warnings">
            <h3>⚠️ Advertencias Críticas</h3>
            {item.warnings.map((warning, index) => (
              <Alert key={index} type="danger">
                {warning}
              </Alert>
            ))}
          </div>
        )}

        <div className="emergency-steps">
          {item.emergencyGuide.map((step) => (
            <Card key={step.stepNumber} className="emergency-step">
              <div className="step-number">
                <span>{step.stepNumber}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.warning && (
                  <Alert type="warning">
                    <strong>⚠️ Advertencia:</strong> {step.warning}
                  </Alert>
                )}
                {step.video && (
                  <div className="step-video">
                    <VideoPlayer 
                      videoUrl={step.video}
                      thumbnail={step.videoThumbnail}
                      title={step.title}
                    />
                  </div>
                )}
                {step.image && !step.video && (
                  <div className="step-image">
                    <img src={step.image} alt={step.title} />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="emergency-footer">
          <Alert type="info">
            <strong>📞 Recuerda:</strong> Después de administrar primeros auxilios, 
            lleva a tu mascota al veterinario para una evaluación completa.
          </Alert>
          
          <div className="emergency-actions">
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => navigate(`/item/${item.id}`)}
            >
              Ver Información Completa
            </Button>
            <Button 
              variant="primary" 
              size="large"
              onClick={() => navigate('/')}
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
