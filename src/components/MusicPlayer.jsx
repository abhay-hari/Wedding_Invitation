import { useEffect, useRef } from 'react';
import { wedding } from '../config/weddingData';

// ============================================================
// MusicPlayer — floating bottom-right control
// Supports both MP3 (HTML audio) and YouTube embed
// Music starts ONLY after user clicks "Open Invitation"
// ============================================================

export default function MusicPlayer({ isPlaying, onToggle }) {
  const audioRef = useRef(null);
  const youtubeRef = useRef(null);

  // MP3 player
  useEffect(() => {
    if (!wedding.musicSrc || wedding.musicYouTubeId) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // YouTube player
  useEffect(() => {
    if (!wedding.musicYouTubeId) return;
    const iframe = youtubeRef.current;
    if (!iframe) return;
    try {
      const cmd = isPlaying ? 'playVideo' : 'pauseVideo';
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: cmd, args: [] }),
        '*'
      );
    } catch (e) {}
  }, [isPlaying]);

  // Don't render if no music configured
  const hasMusic = wedding.musicSrc || wedding.musicYouTubeId;
  if (!hasMusic) {
    // Show disabled music button as UI placeholder
    return (
      <button
        className="music-btn"
        onClick={onToggle}
        aria-label="Music not configured"
        title="Add music in weddingData.js"
        style={{ opacity: 0.5 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3" fill="white"/>
          <circle cx="18" cy="16" r="3" fill="white"/>
        </svg>
      </button>
    );
  }

  return (
    <>
      {/* Hidden MP3 audio element */}
      {wedding.musicSrc && !wedding.musicYouTubeId && (
        <audio ref={audioRef} src={wedding.musicSrc} loop preload="metadata" />
      )}

      {/* Hidden YouTube iframe */}
      {wedding.musicYouTubeId && (
        <iframe
          ref={youtubeRef}
          style={{ display: 'none' }}
          src={`https://www.youtube.com/embed/${wedding.musicYouTubeId}?enablejsapi=1&autoplay=0&loop=1&playlist=${wedding.musicYouTubeId}`}
          allow="autoplay"
          title="Wedding Music"
        />
      )}

      {/* Floating toggle button */}
      <button
        className="music-btn"
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <div className="sound-waves">
            <div className="sound-wave-bar" />
            <div className="sound-wave-bar" />
            <div className="sound-wave-bar" />
            <div className="sound-wave-bar" />
            <div className="sound-wave-bar" />
          </div>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3" fill="white"/>
            <circle cx="18" cy="16" r="3" fill="white"/>
          </svg>
        )}
      </button>
    </>
  );
}
