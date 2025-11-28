import { useState } from 'react';
import './VideoPlayer.css';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail?: string;
  title?: string;
}

type VideoType = 'youtube' | 'tiktok' | 'facebook' | 'instagram' | 'unknown';

export function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Detectar tipo de video
  const detectVideoType = (url: string): VideoType => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('tiktok.com')) return 'tiktok';
    if (url.includes('facebook.com') || url.includes('fb.watch')) return 'facebook';
    if (url.includes('instagram.com')) return 'instagram';
    return 'unknown';
  };

  // Extraer ID de YouTube (videos normales, shorts, reels)
  const getYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^#&?]*)/,
      /youtube\.com\/shorts\/([^#&?]*)/,
      /youtube\.com\/embed\/([^#&?]*)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) return match[1];
    }
    return null;
  };

  // Extraer ID de TikTok
  const getTikTokId = (url: string): string | null => {
    const match = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/);
    return match ? match[1] : null;
  };

  // Extraer ID de Facebook
  const getFacebookId = (url: string): string | null => {
    const patterns = [
      /facebook\.com\/reel\/(\d+)/,
      /facebook\.com\/watch\/?\?v=(\d+)/,
      /fb\.watch\/([^/?]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) return match[1];
    }
    return null;
  };

  // Extraer ID de Instagram
  const getInstagramId = (url: string): string | null => {
    const match = url.match(/instagram\.com\/(?:p|reel)\/([^/?]+)/);
    return match ? match[1] : null;
  };

  // Generar URL de embed según la plataforma
  const getEmbedUrl = (): string => {
    const videoType = detectVideoType(videoUrl);

    switch (videoType) {
      case 'youtube': {
        const id = getYouTubeId(videoUrl);
        return id ? `https://www.youtube.com/embed/${id}` : videoUrl;
      }
      case 'tiktok': {
        const id = getTikTokId(videoUrl);
        return id ? `https://www.tiktok.com/embed/v2/${id}` : videoUrl;
      }
      case 'facebook': {
        const id = getFacebookId(videoUrl);
        if (id) {
          const encodedUrl = encodeURIComponent(videoUrl);
          return `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false`;
        }
        return videoUrl;
      }
      case 'instagram': {
        const id = getInstagramId(videoUrl);
        return id ? `https://www.instagram.com/p/${id}/embed` : videoUrl;
      }
      default:
        return videoUrl;
    }
  };

  // Generar thumbnail según la plataforma
  const getThumbnail = (): string => {
    if (thumbnail) return thumbnail;

    const videoType = detectVideoType(videoUrl);
    
    if (videoType === 'youtube') {
      const id = getYouTubeId(videoUrl);
      return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : 'https://via.placeholder.com/640x360?text=Video';
    }

    // Para otras plataformas, usar placeholder genérico
    return 'https://via.placeholder.com/640x360?text=Video';
  };

  const embedUrl = getEmbedUrl();
  const defaultThumbnail = getThumbnail();
  const videoType = detectVideoType(videoUrl);

  // Plataformas que no soportan embed bien - abrir en nueva pestaña
  const shouldOpenInNewTab = videoType === 'tiktok' || videoType === 'instagram' || videoType === 'facebook';

  const handleClick = () => {
    if (shouldOpenInNewTab) {
      window.open(videoUrl, '_blank', 'noopener,noreferrer');
    } else {
      setIsPlaying(true);
    }
  };

  if (!isPlaying) {
    return (
      <div className="video-player-preview" onClick={handleClick}>
        <img 
          src={defaultThumbnail} 
          alt={title || 'Video instructivo'}
          className="video-thumbnail"
        />
        <div className="video-play-button">
          {shouldOpenInNewTab ? (
            // Icono de enlace externo para redes sociales
            <svg width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          ) : (
            // Icono de play para YouTube
            <svg width="68" height="48" viewBox="0 0 68 48">
              <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          )}
        </div>
        {title && <div className="video-title">{title}</div>}
        <div className="video-platform-badge">
          {videoType.toUpperCase()}
          {shouldOpenInNewTab && ' ↗'}
        </div>
      </div>
    );
  }

  // Solo YouTube se reproduce en iframe
  return (
    <div className="video-player-container">
      <iframe
        src={`${embedUrl}?autoplay=1`}
        title={title || 'Video instructivo'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="video-iframe"
        scrolling="no"
      ></iframe>
    </div>
  );
}
