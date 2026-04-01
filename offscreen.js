const audio = new Audio();
audio.preload = 'none';

let currentState = 'paused';

function setState(state) {
  currentState = state;
  chrome.runtime.sendMessage({ target: 'background', type: 'STATE_UPDATE', state });
}

if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'إذاعة القرآن الكريم',
    artist: 'القاهرة 98.2 FM',
    album: 'Egyptian Quran Radio'
  });

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
      audio.src = message.url;
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

  return true;
});

chrome.storage.local.get(['volume'], (result) => {
  if (result.volume !== undefined) {
    audio.volume = result.volume / 100;
  }
});
