import { useState } from 'react';
import './VideoPlayer.css';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail?: string;
  title?: string;
}

export function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Detectar si es un video de YouTube
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  
  // Extraer ID de YouTube
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = isYouTube ? getYouTubeId(videoUrl) : null;
  const embedUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : videoUrl;
  const defaultThumbnail = youtubeId 
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : thumbnail;

  if (!isPlaying) {
    return (
      <div className="video-player-preview" onClick={() => setIsPlaying(true)}>
        <img 
          src={defaultThumbnail || 'https://via.placeholder.com/640x360?text=Video'} 
          alt={title || 'Video instructivo'}
          className="video-thumbnail"
        />
        <div className="video-play-button">
          <svg width="68" height="48" viewBox="0 0 68 48">
            <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
          </svg>
        </div>
        {title && <div className="video-title">{title}</div>}
      </div>
    );
  }

  return (
    <div className="video-player-container">
      <iframe
        src={`${embedUrl}?autoplay=1`}
        title={title || 'Video instructivo'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="video-iframe"
      ></iframe>
    </div>
  );
}
