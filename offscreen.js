const audio = new Audio();
audio.preload = 'none';

function setState(state) {
  chrome.runtime.sendMessage({ target: 'background', type: 'STATE_UPDATE', state });
}

function updateMediaSession(metadata) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: metadata.title || 'Sakinah',
      artist: metadata.artist || 'Quran Recitation',
      album: metadata.album || 'Sakinah'
    });
  }
}

if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => {
    audio.play();
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    audio.pause();
  });
}

audio.addEventListener('playing', () => setState('playing'));
audio.addEventListener('pause', () => setState('paused'));
audio.addEventListener('error', () => setState('error'));
audio.addEventListener('waiting', () => setState('loading'));

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.target !== 'offscreen') return;

  switch (message.type) {
    case 'PLAY':
      if (audio.src !== message.url) {
        audio.src = message.url;
        if (message.metadata) {
          updateMediaSession(message.metadata);
        }
      }
      audio.play().catch(() => setState('error'));
      sendResponse({ success: true });
      break;

    case 'PAUSE':
      audio.pause();
      sendResponse({ success: true });
      break;

    case 'SET_VOLUME':
      audio.volume = message.volume / 100;
      sendResponse({ success: true });
      break;

    default:
      sendResponse({ success: false });
  }
});

chrome.storage.local.get(['volume'], (result) => {
  if (result.volume !== undefined) {
    audio.volume = result.volume / 100;
  }
});
