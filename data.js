const MINSHAWI_SERVER = 'https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/';
const ABDULBASET_SERVER = 'https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/';
const MINSHAWI_LIVE = 'https://archive.org/download/rabieaaa2018_yahoo_0012143513245/';
const ABDULBASET_LIVE = 'https://archive.org/download/abdulbasitabdulsamad_202101/';
const ABDULBASET_WARSH = 'https://server7.mp3quran.net/basit/Rewayat-Warsh-A-n-Nafi/';
const MINSHAWI_ECHO = 'https://server10.mp3quran.net/minsh/minh-old-with-echo/';

const RECORDINGS = [
  {
    id: 'minshawi-001',
    title: 'سورة البقرة - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}002.mp3`
  },
  {
    id: 'minshawi-002',
    title: 'سورة يس - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}036.mp3`
  },
  {
    id: 'minshawi-003',
    title: 'سورة الرحمن - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}055.mp3`
  },
  {
    id: 'minshawi-004',
    title: 'سورة الملك - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}067.mp3`
  },
  {
    id: 'minshawi-005',
    title: 'سورة الكهف - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}018.mp3`
  },
  {
    id: 'minshawi-006',
    title: 'سورة مريم - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}019.mp3`
  },
  {
    id: 'minshawi-007',
    title: 'سورة يوسف - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}012.mp3`
  },
  {
    id: 'minshawi-008',
    title: 'سورة الواقعة - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}056.mp3`
  },
  {
    id: 'minshawi-009',
    title: 'سورة هود - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}011.mp3`
  },
  {
    id: 'minshawi-010',
    title: 'سورة طه - المنشاوي',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_SERVER}020.mp3`
  },
  {
    id: 'minshawi-live-001',
    title: 'سورة طه - حفلة مباشرة',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_LIVE}001-.mp3`
  },
  {
    id: 'minshawi-live-002',
    title: 'سورة الإنسان - حفلة مباشرة',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_LIVE}002-.mp3`
  },
  {
    id: 'minshawi-live-003',
    title: 'سورة الفجر - حفلة مباشرة',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_LIVE}015-.mp3`
  },
  {
    id: 'minshawi-live-004',
    title: 'سورة يس - حفلة مباشرة',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_LIVE}018-.mp3`
  },
  {
    id: 'minshawi-live-005',
    title: 'سورة الرحمن - حفلة مباشرة',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_LIVE}040-.mp3`
  },
  {
    id: 'minshawi-live-006',
    title: 'سورة يوسف - حفلة مباشرة',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_LIVE}069-1.mp3`
  },
  {
    id: 'abdulbaset-001',
    title: 'سورة البقرة - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}002.mp3`
  },
  {
    id: 'abdulbaset-002',
    title: 'سورة يس - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}036.mp3`
  },
  {
    id: 'abdulbaset-003',
    title: 'سورة الرحمن - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}055.mp3`
  },
  {
    id: 'abdulbaset-004',
    title: 'سورة الملك - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}067.mp3`
  },
  {
    id: 'abdulbaset-005',
    title: 'سورة الكهف - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}018.mp3`
  },
  {
    id: 'abdulbaset-006',
    title: 'سورة مريم - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}019.mp3`
  },
  {
    id: 'abdulbaset-007',
    title: 'سورة يوسف - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}012.mp3`
  },
  {
    id: 'abdulbaset-008',
    title: 'سورة الواقعة - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}056.mp3`
  },
  {
    id: 'abdulbaset-009',
    title: 'سورة الحشر - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}059.mp3`
  },
  {
    id: 'abdulbaset-010',
    title: 'سورة المزمل - عبد الباسط',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_SERVER}073.mp3`
  },
  {
    id: 'abdulbaset-live-001',
    title: 'سورة طارق - تسجيل نادر',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_LIVE}036.mp3`
  },
  {
    id: 'abdulbaset-live-002',
    title: 'سورة الفجر - تسجيل نادر',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_LIVE}089.mp3`
  },
  {
    id: 'abdulbaset-warsh-001',
    title: 'سورة يس - عبد الباسط برواية ورش',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_WARSH}036.mp3`
  },
  {
    id: 'abdulbaset-warsh-002',
    title: 'سورة الرحمن - عبد الباسط برواية ورش',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_WARSH}055.mp3`
  },
  {
    id: 'abdulbaset-warsh-003',
    title: 'سورة الملك - عبد الباسط برواية ورش',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_WARSH}067.mp3`
  },
  {
    id: 'abdulbaset-warsh-004',
    title: 'سورة الكهف - عبد الباسط برواية ورش',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_WARSH}018.mp3`
  },
  {
    id: 'abdulbaset-warsh-005',
    title: 'سورة المزمل - عبد الباسط برواية ورش',
    reciter: 'الشيخ عبد الباسط عبد الصمد',
    url: `${ABDULBASET_WARSH}073.mp3`
  },
  {
    id: 'minshawi-echo-001',
    title: 'سورة يس - المنشاوي تسجيل قديم',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_ECHO}036.mp3`
  },
  {
    id: 'minshawi-echo-002',
    title: 'سورة الرحمن - المنشاوي تسجيل قديم',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_ECHO}055.mp3`
  },
  {
    id: 'minshawi-echo-003',
    title: 'سورة الملك - المنشاوي تسجيل قديم',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_ECHO}067.mp3`
  },
  {
    id: 'minshawi-echo-004',
    title: 'سورة الكهف - المنشاوي تسجيل قديم',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_ECHO}018.mp3`
  },
  {
    id: 'minshawi-echo-005',
    title: 'سورة المزمل - المنشاوي تسجيل قديم',
    reciter: 'الشيخ محمد صديق المنشاوي',
    url: `${MINSHAWI_ECHO}073.mp3`
  }
];
