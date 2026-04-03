const playPauseBtn = document.getElementById('playPauseBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const statusEl = document.getElementById('status');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const currentTrack = document.getElementById('currentTrack');
const currentReciter = document.getElementById('currentReciter');

let isPlaying = false;
let currentRecording = null;
let lastPlayedIndex = -1;
let errorRetryCount = 0;
const MAX_ERROR_RETRIES = 3;

const statusText = {
  paused: 'متوقف',
  playing: 'يعمل الآن',
  loading: 'جاري التحميل...',
  error: 'خطأ في الاتصال'
};

function getRandomRecording() {
  let index;
  do {
    index = Math.floor(Math.random() * RECORDINGS.length);
  } while (index === lastPlayedIndex && RECORDINGS.length > 1);
  lastPlayedIndex = index;
  return RECORDINGS[index];
}

function playRecording(recording) {
  currentRecording = recording;
  currentTrack.textContent = recording.title;
  currentReciter.textContent = recording.reciter;
  errorRetryCount = 0;

  chrome.runtime.sendMessage({
    target: 'background',
    type: 'PLAY',
    url: recording.url,
    metadata: {
      title: recording.title,
      artist: recording.reciter,
      album: 'Sakinah'
    }
  });
}

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
  if (isPlaying) {
    isPlaying = false;
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    statusEl.textContent = statusText.paused;
    statusEl.className = 'status';
    chrome.runtime.sendMessage({ target: 'background', type: 'PAUSE' });
  } else {
    isPlaying = true;
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    statusEl.textContent = statusText.loading;
    statusEl.className = 'status loading';
    if (currentRecording) {
      playRecording(currentRecording);
    } else {
      playRecording(getRandomRecording());
    }
  }
});

shuffleBtn.addEventListener('click', () => {
  playRecording(getRandomRecording());
});

volumeSlider.addEventListener('input', () => {
  const vol = parseInt(volumeSlider.value);
  volumeValue.textContent = `${vol}%`;
  chrome.runtime.sendMessage({ target: 'background', type: 'SET_VOLUME', volume: vol });
});

chrome.storage.local.get(['volume'], (result) => {
  updateUI('paused', result.volume);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.state || changes.volume) {
    chrome.storage.local.get(['state', 'volume'], (result) => {
      updateUI(result.state || 'paused', result.volume);
      if (result.state === 'error' && currentRecording && errorRetryCount < MAX_ERROR_RETRIES) {
        errorRetryCount++;
        playRecording(getRandomRecording());
      }
    });
  }
});
