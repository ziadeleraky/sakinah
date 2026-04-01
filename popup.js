const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const statusEl = document.getElementById('status');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

let isPlaying = false;

const statusText = {
  paused: 'متوقف',
  playing: 'يعمل الآن',
  loading: 'جاري التحميل...',
  error: 'خطأ في الاتصال'
};

function updateUI(state, volume) {
  isPlaying = state === 'playing';
  playIcon.classList.toggle('hidden', isPlaying);
  pauseIcon.classList.toggle('hidden', !isPlaying);

  statusEl.className = 'status' + (state !== 'paused' ? ` ${state}` : '');
  statusEl.textContent = statusText[state] || statusText.paused;

  if (volume !== undefined) {
    volumeSlider.value = volume;
    volumeValue.textContent = `${volume}%`;
  }
}

playPauseBtn.addEventListener('click', () => {
  const type = isPlaying ? 'PAUSE' : 'PLAY';
  chrome.runtime.sendMessage({ target: 'background', type });
});

volumeSlider.addEventListener('input', () => {
  const vol = parseInt(volumeSlider.value);
  volumeValue.textContent = `${vol}%`;
  chrome.runtime.sendMessage({ target: 'background', type: 'SET_VOLUME', volume: vol });
});

chrome.storage.local.get(['state', 'volume'], (result) => {
  updateUI(result.state || 'paused', result.volume);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.state || changes.volume) {
    chrome.storage.local.get(['state', 'volume'], (result) => {
      updateUI(result.state || 'paused', result.volume);
    });
  }
});
