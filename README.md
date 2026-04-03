# Sakinah (سكينة)

> Find tranquility through Quran recitations by Sheikh Al-Minshawi and Sheikh Abdulbaset.

A Chrome extension that shuffles between curated Quran recordings from two of the most beloved reciters, featuring multiple recitation styles including Mojawwad, Warsh 'an Nafi', live concerts, and rare vintage recordings.

## Features

- **One-click shuffle** - Hit play and enjoy a curated mix of recitations
- **Multiple recitation styles** - Mojawwad, Warsh 'an Nafi', live concerts, and vintage echo recordings
- **Two legendary reciters** - Sheikh Mohammed Siddiq Al-Minshawi and Sheikh Abdulbaset Abdulsamad
- **38 curated recordings** - Carefully selected surahs for a calming listening experience
- **Media session support** - Control playback from your OS media controls
- **Volume control** - Adjustable volume slider
- **Auto-skip on error** - Automatically moves to the next recording if one fails to load
- **Offline-friendly** - No accounts, no ads, no tracking

## Recitation Styles

| Style | Description |
|-------|-------------|
| **Mojawwad** | Melodic, measured recitation with full tajweed rules |
| **Warsh 'an Nafi'** | North African recitation style with distinct pronunciation |
| **Live Concerts** | Authentic live recordings with audience atmosphere |
| **Vintage Echo** | Rare 2008 recordings with atmospheric echo effect |

## Installation

### From Chrome Web Store (Coming Soon)

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore)
2. Search for **Sakinah**
3. Click **Add to Chrome**
4. Click the extension icon in your toolbar and press play

### Manual Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the extension folder
6. The Sakinah icon will appear in your extensions toolbar

## Usage

1. Click the **Sakinah** extension icon in your Chrome toolbar
2. Press the **play button** to start listening
3. Press the **shuffle button** to skip to a random recording
4. Adjust volume using the **slider** at the bottom

The extension shuffles between all 38 recordings, never repeating the same track twice in a row.

## File Structure

```
├── manifest.json          # Extension configuration
├── popup.html             # Extension popup UI
├── popup.css              # Popup styles
├── popup.js               # Popup logic and event handlers
├── background.js          # Service worker for message routing
├── offscreen.js           # Audio playback in offscreen document
├── offscreen.html         # Offscreen document wrapper
├── data.js                # Recording library (URLs and metadata)
├── icons/                 # Extension icons (16, 48, 128px)
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md              # This file
```

## Architecture

The extension uses Chrome's **Manifest V3** architecture:

- **Popup** (`popup.html/js/css`) - User interface with play/shuffle/volume controls
- **Service Worker** (`background.js`) - Routes messages between popup and offscreen document
- **Offscreen Document** (`offscreen.js/html`) - Handles actual audio playback using the HTML5 Audio API

This separation allows audio to continue playing even when the popup is closed, while keeping the extension lightweight.

### Message Flow

```
Popup → Background → Offscreen → Audio Playback
  ↑          ↑
  └──────────┘ (state updates via chrome.storage)
```

## Audio Sources

All audio is streamed from these reliable sources:

- **mp3quran.net** - Primary source for studio recordings
  - Server 10: Minshawi Mojawwad & Vintage Echo
  - Server 7: Abdulbaset Mojawwad & Warsh 'an Nafi
- **archive.org** - Secondary source for live concert recordings

## Privacy

Sakinah does **not**:
- Collect any personal data
- Track your activity
- Show ads
- Require an account
- Send analytics

The only permissions used are:
- `storage` - To remember your volume preference
- `offscreen` - To play audio in the background

## Contributing

Contributions are welcome! Here's how you can help:

1. **Add more recordings** - Update `data.js` with new recording URLs
2. **Improve the UI** - Submit a PR with design improvements
3. **Report bugs** - Open an issue with details
4. **Suggest features** - Share your ideas

### Adding New Recordings

Edit `data.js` and add a new entry to the `RECORDINGS` array:

```javascript
{
  id: 'unique-id',
  title: 'سورة الاسم - وصف',
  reciter: 'الشيخ اسم الشيخ',
  url: 'https://example.com/recording.mp3'
}
```

## License & Copyright

This project is provided as-is for the benefit of the Muslim community.

**Audio recordings** are streamed directly from their original sources and are not hosted, modified, or redistributed by this extension:
- **mp3quran.net** - All recitations are property of their respective reciters and publishers
- **archive.org** - Live recordings are sourced from their public collections

**This extension does not:**
- Host, store, or distribute any audio files
- Modify or alter any recordings
- Claim ownership of any recitation
- Generate revenue from the audio content

---

**سكينة** - *هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ* — سورة الفتح:٤
