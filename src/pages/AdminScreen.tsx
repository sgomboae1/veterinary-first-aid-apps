import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts';
import { repository } from '../services';
import { Button, Card, Alert } from '../components';
import { PasswordProtected } from '../components/PasswordProtected';
import type { FirstAidItem } from '../models/types';
import './AdminScreen.css';

export function AdminScreen() {
  const navigate = useNavigate();
  const { items, refreshItems } = useApp();
  const [editingItem, setEditingItem] = useState<FirstAidItem | null>(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleEdit = (item: FirstAidItem) => {
    setEditingItem(item);
    setVideoUrl(item.instructionalVideo || '');
    setMessage(null);
  };

  const handleSave = async () => {
    if (!editingItem) return;

    try {
      setSaving(true);
      setMessage(null);

      // Extraer ID de YouTube si es una URL completa
      let youtubeId = videoUrl;
      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = videoUrl.match(regExp);
        if (match && match[2].length === 11) {
          youtubeId = match[2];
        }
      }

      const fullUrl = youtubeId.includes('youtube.com') 
        ? youtubeId 
        : `https://www.youtube.com/watch?v=${youtubeId}`;

      const updatedItem: FirstAidItem = {
        ...editingItem,
        instructionalVideo: fullUrl,
        videoThumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
      };

      await repository.updateItem(updatedItem);
      await refreshItems();
      
      setMessage({ type: 'success', text: '✅ Video actualizado correctamente' });
      setEditingItem(null);
      setVideoUrl('');
    } catch (error) {
      console.error('Error al guardar:', error);
      setMessage({ type: 'error', text: '❌ Error al actualizar el video' });
    } finally {
      setSaving(false);
    }
  };

  const handleRemoveVideo = async () => {
    if (!editingItem) return;

    try {
      setSaving(true);
      const updatedItem: FirstAidItem = {
        ...editingItem,
        instructionalVideo: undefined,
        videoThumbnail: undefined
      };

      await repository.updateItem(updatedItem);
      await refreshItems();
      
      setMessage({ type: 'success', text: '✅ Video eliminado correctamente' });
      setEditingItem(null);
      setVideoUrl('');
    } catch (error) {
      console.error('Error al eliminar:', error);
      setMessage({ type: 'error', text: '❌ Error al eliminar el video' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <PasswordProtected>
      <div className="admin-screen">
        <div className="container">
          <header className="admin-header">
            <div>
              <h1>🔧 Panel de Administración</h1>
              <p>Gestiona los videos instructivos de cada medicamento</p>
            </div>
            <Button variant="secondary" onClick={() => navigate('/')}>
              ← Volver al Inicio
            </Button>
          </header>

          {message && (
            <Alert type={message.type === 'success' ? 'success' : 'danger'}>
              {message.text}
            </Alert>
          )}

          {editingItem ? (
            <Card>
              <div className="admin-edit-form">
                <h2>Editar Video: {editingItem.name}</h2>
                
                <div className="form-group">
                  <label htmlFor="videoUrl">URL del Video de YouTube</label>
                  <input
                    id="videoUrl"
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... o solo el ID"
                    className="form-input"
                  />
                  <small className="form-help">
                    Puedes pegar la URL completa o solo el ID del video (ej: dQw4w9WgXcQ)
                  </small>
                </div>

                {videoUrl && (
                  <div className="video-preview">
                    <h3>Vista Previa:</h3>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoUrl.includes('youtube.com') ? videoUrl.split('v=')[1]?.split('&')[0] : videoUrl}`}
                      title="Vista previa"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="preview-iframe"
                    ></iframe>
                  </div>
                )}

                <div className="form-actions">
                  <Button 
                    variant="primary" 
                    onClick={handleSave}
                    disabled={saving || !videoUrl}
                  >
                    {saving ? 'Guardando...' : '💾 Guardar Video'}
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={handleRemoveVideo}
                    disabled={saving}
                  >
                    🗑️ Eliminar Video
                  </Button>
                  <Button 
                    variant="secondary" 
                    onClick={() => {
                      setEditingItem(null);
                      setVideoUrl('');
                      setMessage(null);
                    }}
                    disabled={saving}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <div className="admin-items-grid">
              {items.map((item) => (
                <Card key={item.id}>
                  <div className="admin-item-card">
                    <div className="admin-item-header">
                      <h3>{item.name}</h3>
                      {item.instructionalVideo ? (
                        <span className="video-status has-video">✅ Con video</span>
                      ) : (
                        <span className="video-status no-video">⚠️ Sin video</span>
                      )}
                    </div>
                    
                    {item.instructionalVideo && (
                      <div className="current-video-info">
                        <small>Video actual:</small>
                        <code>{item.instructionalVideo}</code>
                      </div>
                    )}

                    <Button 
                      variant="primary" 
                      size="small"
                      onClick={() => handleEdit(item)}
                    >
                      ✏️ Editar Video
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <Card>
            <div className="admin-instructions">
              <h3>📋 Instrucciones</h3>
              <ol>
                <li>Haz clic en "Editar Video" en cualquier medicamento</li>
                <li>Pega la URL completa del video de YouTube o solo su ID</li>
                <li>Verifica la vista previa para asegurarte que funciona</li>
                <li>Haz clic en "Guardar Video"</li>
                <li>El video se actualizará inmediatamente en la aplicación</li>
              </ol>
              <Alert type="info">
                <strong>Nota:</strong> Algunos videos de YouTube tienen restricciones y no se pueden reproducir en sitios web externos. Si ves "Video no disponible", prueba con otro video.
              </Alert>
            </div>
          </Card>
        </div>
      </div>
    </PasswordProtected>
  );
}
