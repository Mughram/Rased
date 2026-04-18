export const items = [
  {
    id: 'home',
    label: 'الرئيسية',
    title: 'لوحة التحكم',
    description: 'متابعة مباشرة للشحنات المبردة والتنبيهات والمسارات من شاشة واحدة.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 3.2 3.8 9.7a1 1 0 0 0-.38.79v9.01c0 .83.67 1.5 1.5 1.5h4.26a.75.75 0 0 0 .75-.75v-4.38c0-.83.67-1.5 1.5-1.5h1.14c.83 0 1.5.67 1.5 1.5v4.38c0 .41.34.75.75.75h4.26c.83 0 1.5-.67 1.5-1.5v-9.01a1 1 0 0 0-.38-.79L12 3.2Z" />
      </svg>
    ),
  },
  {
    id: 'shipments',
    label: 'الشحنات',
    title: 'إدارة الشحنات',
    description: 'فلترة الشحنات الحرجة والآمنة حسب النوع والحرارة والمسار.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M2.75 6.75h10.5v9.5H2.75z" />
        <path d="M13.25 9.25h3.53l2.47 2.75v4.25h-6" />
        <path d="M16.5 9.25v2.75h2.98" />
        <circle cx="7" cy="18.25" r="1.75" />
        <circle cx="17.5" cy="18.25" r="1.75" />
      </svg>
    ),
  },
  {
    id: 'map',
    label: 'الخريطة',
    title: 'الخريطة الحية',
    description: 'تتبع حي للمسارات مع اختيار الشحنة وإظهار النقاط والتنبيهات.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M3.75 6.5 9 4.25l6 2.25 5.25-2.25v13.25L15 19.75 9 17.5l-5.25 2.25z" />
        <path d="M9 4.25V17.5" />
        <path d="M15 6.5v13.25" />
        <path d="M14.9 9.2a2.9 2.9 0 1 0-5.8 0c0 2.57 2.9 5.1 2.9 5.1s2.9-2.53 2.9-5.1Z" />
        <circle cx="12" cy="9.2" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'info',
    label: 'المعلومات',
    title: 'المؤشرات',
    description: 'تحليلات الأداء ومقارنات الفئات المبردة ومستوى السلامة التشغيلي.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.25" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.25" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.25" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.25" />
      </svg>
    ),
  },
]

export const coldChainCategories = [
  { id: 'all', label: 'كل الفئات', count: 1284 },
  { id: 'seafood', label: 'المأكولات البحرية', count: 236 },
  { id: 'pharma', label: 'الأدوية', count: 198 },
  { id: 'vaccines', label: 'اللقاحات', count: 142 },
  { id: 'red-meat', label: 'اللحوم الحمراء', count: 264 },
  { id: 'dairy', label: 'الألبان', count: 211 },
  { id: 'flowers', label: 'الزهور', count: 98 },
  { id: 'produce', label: 'الخضروات والفواكه', count: 135 },
]

export const dashboardRecommendations = [
  {
    id: 1,
    title: 'توقع تأخير بسبب الطقس',
    description:
      'القرار المقترح: تحويل شحنات الأدوية واللقاحات إلى الطريق الساحلي لتفادي العاصفة الرملية في الممر الأوسط.',
    action: 'اعتماد المسار البديل',
  },
  {
    id: 2,
    title: 'رفع أولوية فحص التبريد',
    description:
      'القرار المقترح: إرسال فريق الصيانة إلى شحنات اللحوم الحمراء ذات الحمل العالي قبل محطة التوقف التالية.',
    action: 'جدولة فحص ميداني',
  },
  {
    id: 3,
    title: 'إعادة توزيع نقاط التسليم',
    description:
      'القرار المقترح: تقديم تسليم الألبان والزهور إلى الفروع الأقرب لتخفيف زمن بقاء الأبواب مفتوحة أثناء التفريغ.',
    action: 'تحديث خطة التسليم',
  },
]

export const shipmentFilters = ['عرض الكل', 'الخطرة', 'تحت المراقبة', 'الآمنة']

export const shipmentCards = [
  {
    id: 342,
    category: 'seafood',
    categoryLabel: 'المأكولات البحرية',
    product: 'أسماك وتونة طازجة',
    tone: 'danger',
    tag: 'تنبيه حرج',
    risk: 'تجاوز حراري مرتفع',
    timeLeft: 'الوقت المتبقي قبل التلف: 14 دقيقة',
    temperature: '+8°م',
    targetTemperature: '0°م إلى +4°م',
    route: 'جدة - الرياض',
    market: 'مركز توزيع السلي',
    quantity: '132 صندوق',
    warning: 'تم رصد ارتفاع متكرر بعد فتح باب التبريد أكثر من المسموح أثناء نقطة التفريغ السابقة.',
    driver: 'عبدالله ناصر',
    status: 'تحتاج تدخلاً فورياً',
    eta: '14:20',
    humidity: '64%',
    vehicle: 'شاحنة تبريد 07',
    zone: 'الطريق السريع، جدة',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 267,
    category: 'pharma',
    categoryLabel: 'الأدوية',
    product: 'أدوية حيوية للعيادات',
    tone: 'warning',
    tag: 'مراقبة نشطة',
    risk: 'اهتزاز حراري محدود',
    timeLeft: 'آخر تحديث: قبل 3 دقائق',
    temperature: '+6°م',
    targetTemperature: '+2°م إلى +8°م',
    route: 'الدمام - القصيم',
    market: 'مستودع الرعاية الطبية',
    quantity: '86 حاوية',
    warning: 'القراءات ما تزال ضمن المدى المسموح لكن هناك تذبذب بعد تبديل مصدر الطاقة الاحتياطي.',
    driver: 'سالم فهد',
    status: 'تحت المراقبة',
    eta: '09:35',
    humidity: '39%',
    vehicle: 'مقطورة دوائية 12',
    zone: 'مخرج بريدة الشرقي',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 511,
    category: 'vaccines',
    categoryLabel: 'اللقاحات',
    product: 'لقاحات موسمية',
    tone: 'safe',
    tag: 'شحنة آمنة',
    risk: 'ثبات كامل',
    timeLeft: 'آخر تحديث: الآن',
    temperature: '+4°م',
    targetTemperature: '+2°م إلى +8°م',
    route: 'الرياض - حائل',
    market: 'مركز الإمداد الصحي',
    quantity: '64 صندوقاً',
    warning: 'جميع القراءات مستقرة مع عمل الحساسات الاحتياطية وتوافق كامل مع سلاسل التوثيق.',
    driver: 'محمد ياسر',
    status: 'تسير بشكل طبيعي',
    eta: '11:10',
    humidity: '33%',
    vehicle: 'مركبة طبية 04',
    zone: 'طريق حائل السريع',
    avatar:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 618,
    category: 'red-meat',
    categoryLabel: 'اللحوم الحمراء',
    product: 'لحوم حمراء مبردة',
    tone: 'warning',
    tag: 'ضغط تشغيلي',
    risk: 'فتح أبواب متكرر',
    timeLeft: 'توقف قادم خلال 18 دقيقة',
    temperature: '+3°م',
    targetTemperature: '-1°م إلى +3°م',
    route: 'حائل - المدينة',
    market: 'سوق الجملة المبرد',
    quantity: '118 صندوقاً',
    warning: 'يوصى بتقليل زمن التحميل في التوقف القادم لأن الباب فتح 4 مرات خلال الساعة الماضية.',
    driver: 'تركي سعد',
    status: 'تحتاج ضبط إجراءات التحميل',
    eta: '16:05',
    humidity: '58%',
    vehicle: 'مقطورة لحوم 19',
    zone: 'محطة النقل اللوجستي، القصيم',
    avatar:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 724,
    category: 'dairy',
    categoryLabel: 'الألبان',
    product: 'حليب وأجبان طازجة',
    tone: 'safe',
    tag: 'جاهزة للتسليم',
    risk: 'استقرار ممتاز',
    timeLeft: 'الوصول خلال 26 دقيقة',
    temperature: '+2°م',
    targetTemperature: '+1°م إلى +4°م',
    route: 'الطائف - مكة',
    market: 'مركز تموين الفنادق',
    quantity: '94 صندوقاً',
    warning: 'تمت المحافظة على السلسلة الباردة طوال الرحلة مع انحراف طفيف أقل من 0.3°م.',
    driver: 'هيثم سامي',
    status: 'جاهزة للتسليم',
    eta: '18:45',
    humidity: '47%',
    vehicle: 'شاحنة تبريد 03',
    zone: 'طريق الهدا',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 805,
    category: 'flowers',
    categoryLabel: 'الزهور',
    product: 'ورود وزهور تبريد خفيف',
    tone: 'safe',
    tag: 'حساسة للوقت',
    risk: 'التسليم في الموعد',
    timeLeft: 'آخر تحديث: قبل دقيقة',
    temperature: '+7°م',
    targetTemperature: '+5°م إلى +8°م',
    route: 'أبها - جدة',
    market: 'مركز تجهيز الفعاليات',
    quantity: '52 صندوقاً',
    warning: 'ينصح بالإبقاء على نسبة الرطوبة الحالية وعدم تعريض الشحنة للانتظار الخارجي عند الوصول.',
    driver: 'نوف',
    status: 'ضمن الخطة',
    eta: '20:10',
    humidity: '72%',
    vehicle: 'شاحنة تبريد خفيف 08',
    zone: 'الطريق الساحلي',
    avatar:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=240&q=80',
  },
]

export const mapShipments = [
  {
    id: 342,
    product: 'أسماك وتونة طازجة',
    categoryLabel: 'المأكولات البحرية',
    tone: 'danger',
    status: 'حرج',
    routeLabel: 'جدة - الرياض',
    origin: 'ميناء جدة الإسلامي',
    destination: 'مركز توزيع السلي',
    quantity: '132 صندوق',
    weight: '1.8 طن',
    temperature: '+8°م',
    targetTemperature: '0°م إلى +4°م',
    driver: 'عبدالله ناصر',
    lastUpdate: 'قبل دقيقة',
    progressStart: 0.18,
    stepSize: 0.018,
    points: [
      { left: 12, top: 66, label: 'جدة', progress: 0.1 },
      { left: 28, top: 61, label: 'الجموم', progress: 0.26 },
      { left: 43, top: 54, label: 'الدوادمي', progress: 0.48 },
      { left: 63, top: 38, label: 'القويعية', progress: 0.72 },
      { left: 81, top: 24, label: 'الرياض', progress: 1 },
    ],
    alert: 'تجاوز الحد الحراري الأعلى بمقدار 3°م',
    recommendation: 'تقليل محطات التوقف وتوجيه أقرب فريق تبريد متنقل.',
  },
  {
    id: 267,
    product: 'أدوية حيوية للعيادات',
    categoryLabel: 'الأدوية',
    tone: 'warning',
    status: 'مراقبة',
    routeLabel: 'الدمام - القصيم',
    origin: 'المدينة الصناعية الثانية',
    destination: 'مستودع الرعاية الطبية',
    quantity: '86 حاوية',
    weight: '940 كجم',
    temperature: '+6°م',
    targetTemperature: '+2°م إلى +8°م',
    driver: 'سالم فهد',
    lastUpdate: 'قبل 3 دقائق',
    progressStart: 0.41,
    stepSize: 0.012,
    points: [
      { left: 84, top: 72, label: 'الدمام', progress: 0.1 },
      { left: 73, top: 59, label: 'الأحساء', progress: 0.3 },
      { left: 58, top: 47, label: 'المجمعة', progress: 0.54 },
      { left: 43, top: 31, label: 'عنيزة', progress: 0.76 },
      { left: 28, top: 22, label: 'بريدة', progress: 1 },
    ],
    alert: 'تذبذب محدود بعد التحول إلى مولد احتياطي',
    recommendation: 'مراقبة الاستقرار حتى محطة التوقف التالية فقط.',
  },
  {
    id: 618,
    product: 'لحوم حمراء مبردة',
    categoryLabel: 'اللحوم الحمراء',
    tone: 'warning',
    status: 'ضغط تشغيلي',
    routeLabel: 'حائل - المدينة',
    origin: 'مسلخ حائل المركزي',
    destination: 'سوق الجملة المبرد',
    quantity: '118 صندوق',
    weight: '2.2 طن',
    temperature: '+3°م',
    targetTemperature: '-1°م إلى +3°م',
    driver: 'تركي سعد',
    lastUpdate: 'قبل دقيقتين',
    progressStart: 0.27,
    stepSize: 0.016,
    points: [
      { left: 56, top: 17, label: 'حائل', progress: 0.1 },
      { left: 47, top: 34, label: 'الغزالة', progress: 0.28 },
      { left: 38, top: 49, label: 'القصيم', progress: 0.53 },
      { left: 29, top: 62, label: 'الحناكية', progress: 0.78 },
      { left: 18, top: 75, label: 'المدينة', progress: 1 },
    ],
    alert: 'فتح أبواب التحميل 4 مرات خلال آخر ساعة',
    recommendation: 'تقليل زمن التفريغ وتثبيت جدول التسليم في المحطات الفرعية.',
  },
]

export const trackingSteps = [
  { label: 'نقطة الانطلاق', active: true },
  { label: 'توقف تفتيش', active: true },
  { label: 'توقف لوجستي', active: false },
  { label: 'نقطة الوصول', active: false },
]
