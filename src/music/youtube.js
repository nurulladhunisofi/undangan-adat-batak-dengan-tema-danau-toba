import { weddingConfig } from '../config/wedding.js';

let player = null;
let isPlaying = false;
let isInitialized = false;

export function initMusic() {
  const musicBtn = document.getElementById('music-toggle-btn');
  if (!musicBtn) return;

  musicBtn.addEventListener('click', () => {
    toggleMusic();
  });
}

export function startMusicOnOpen() {
  if (isInitialized) {
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
      setMusicState(true);
    }
    return;
  }

  isInitialized = true;
  loadYouTubeAPI();
}

function loadYouTubeAPI() {
  // Create hidden iframe container
  let container = document.getElementById('yt-player-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'yt-player-container';
    container.style.position = 'fixed';
    container.style.width = '1px';
    container.style.height = '1px';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-9999';
    document.body.appendChild(container);
  }

  const iframe = document.createElement('div');
  iframe.id = 'yt-player';
  container.appendChild(iframe);

  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    // Inject YouTube IFrame API script tag
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };
  }
}

function createPlayer() {
  const config = weddingConfig.music;
  player = new window.YT.Player('yt-player', {
    height: '1',
    width: '1',
    videoId: config.youtubeId,
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      loop: config.loop ? 1 : 0,
      playlist: config.youtubeId,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      origin: window.location.origin
    },
    events: {
      onReady: (event) => {
        event.target.setVolume(config.volume || 50);
        if (config.autoplayAfterOpening) {
          event.target.playVideo();
          setMusicState(true);
        }
      },
      onStateChange: (event) => {
        // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
        if (event.data === 1) {
          setMusicState(true);
        } else if (event.data === 2 || event.data === 0) {
          setMusicState(false);
        }
      },
      onError: (err) => {
        console.warn('YouTube Player notice (audio fallback active):', err);
      }
    }
  });
}

export function toggleMusic() {
  if (!player || typeof player.getPlayerState !== 'function') {
    if (!isInitialized) {
      startMusicOnOpen();
    }
    return;
  }

  const state = player.getPlayerState();
  if (state === 1) {
    player.pauseVideo();
    setMusicState(false);
  } else {
    player.playVideo();
    setMusicState(true);
  }
}

function setMusicState(playing) {
  isPlaying = playing;
  const musicBtn = document.getElementById('music-toggle-btn');
  if (!musicBtn) return;

  if (playing) {
    musicBtn.classList.add('playing');
    musicBtn.setAttribute('aria-label', 'Jeda Musik');
    musicBtn.title = 'Jeda Musik';
  } else {
    musicBtn.classList.remove('playing');
    musicBtn.setAttribute('aria-label', 'Putar Musik');
    musicBtn.title = 'Putar Musik';
  }
}
