const OFFSCREEN_URL = chrome.runtime.getURL('offscreen.html');

chrome.runtime.onInstalled.addListener(async () => {
  const saved = await chrome.storage.local.get(['volume']);
  if (saved.volume === undefined) {
    await chrome.storage.local.set({ volume: 80 });
  }
});

async function ensureOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;
  await chrome.offscreen.createDocument({
    url: OFFSCREEN_URL,
    reasons: ['AUDIO_PLAYBACK'],
    justification: 'Play Sakinah - Quran recitations'
  });
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
      return sendMessageToOffscreen({
        type: 'PLAY',
        url: message.url,
        metadata: message.metadata || null
      });

    case 'PAUSE':
      if (await chrome.offscreen.hasDocument()) {
        return sendMessageToOffscreen({ type: 'PAUSE' });
      }
      return { success: true };

    case 'SET_VOLUME':
      if (await chrome.offscreen.hasDocument()) {
        sendMessageToOffscreen({ type: 'SET_VOLUME', volume: message.volume });
      }
      await chrome.storage.local.set({ volume: message.volume });
      return { success: true };

    case 'STATE_UPDATE':
      await chrome.storage.local.set({ state: message.state });
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
