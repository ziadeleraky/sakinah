const OFFSCREEN_URL = chrome.runtime.getURL('offscreen.html');
const STREAM_URL = 'https://stream.radiojar.com/8s5u5tpdtwzuv';

let offscreenCreated = false;

chrome.runtime.onInstalled.addListener(async () => {
  const saved = await chrome.storage.local.get(['volume']);
  if (saved.volume === undefined) {
    await chrome.storage.local.set({ volume: 80 });
  }
});

async function ensureOffscreen() {
  if (offscreenCreated) return;
  const existing = await chrome.offscreen.hasDocument();
  if (existing) {
    offscreenCreated = true;
    return;
  }
  await chrome.offscreen.createDocument({
    url: OFFSCREEN_URL,
    reasons: ['AUDIO_PLAYBACK'],
    justification: 'Play Egyptian Quran Radio'
  });
  offscreenCreated = true;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.target === 'background') {
    handleMessage(message).then(sendResponse);
    return true;
  }
});

async function handleMessage(message) {
  switch (message.type) {
    case 'PLAY':
      await ensureOffscreen();
      return sendMessageToOffscreen({ type: 'PLAY', url: STREAM_URL });

    case 'PAUSE':
      if (offscreenCreated) {
        return sendMessageToOffscreen({ type: 'PAUSE' });
      }
      return { success: true };

    case 'SET_VOLUME':
      if (offscreenCreated) {
        sendMessageToOffscreen({ type: 'SET_VOLUME', volume: message.volume });
      }
      await chrome.storage.local.set({ volume: message.volume });
      return { success: true };

    case 'STATE_UPDATE':
      await chrome.storage.local.set({ state: message.state });
      return { success: true };

    case 'CLOSE_OFFSCREEN':
      if (offscreenCreated) {
        await chrome.offscreen.closeDocument();
        offscreenCreated = false;
      }
      return { success: true };

    default:
      return { success: false, error: 'Unknown message type' };
  }
}

function sendMessageToOffscreen(message) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ target: 'offscreen', ...message }, (response) => {
      resolve(response || { success: false });
    });
  });
}
