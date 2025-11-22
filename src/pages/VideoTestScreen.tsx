import { VideoPlayer } from '../components/VideoPlayer';
import { Card } from '../components';
import './VideoTestScreen.css';

export function VideoTestScreen() {
  // Videos de prueba con IDs públicos que permiten embed
  const testVideos = [
    {
      id: 'test1',
      title: 'Video de Prueba 1 - Ejemplo YouTube',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Video de prueba para verificar reproducción'
    },
    {
      id: 'test2',
      title: 'Video de Prueba 2 - Ejemplo YouTube',
      url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
      description: 'Segundo video de prueba'
    },
    {
      id: 'test3',
      title: 'Video de Prueba 3 - Ejemplo YouTube',
      url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      description: 'Tercer video de prueba'
    }
  ];

  return (
    <div className="video-test-screen">
      <div className="container">
        <header className="test-header">
          <h1>🎬 Prueba de Videos</h1>
          <p>Esta página prueba la funcionalidad de reproducción de videos de YouTube</p>
        </header>

        <div className="test-videos-grid">
          {testVideos.map((video) => (
            <Card key={video.id}>
              <h3>{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <div className="video-wrapper">
                <VideoPlayer 
                  videoUrl={video.url}
                  title={video.title}
                />
              </div>
              <div className="video-info">
                <small>URL: {video.url}</small>
              </div>
            </Card>
          ))}
        </div>

        <div className="test-instructions">
          <Card>
            <h3>📋 Instrucciones de Prueba</h3>
            <ol>
              <li>Haz clic en cualquier miniatura de video</li>
              <li>El video debería comenzar a reproducirse automáticamente</li>
              <li>Si ves un mensaje de error, anota cuál es</li>
              <li>Prueba con los 3 videos para verificar consistencia</li>
            </ol>
          </Card>
        </div>
      </div>
    </div>
  );
}
