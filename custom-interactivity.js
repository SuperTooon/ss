/**
 * Custom Interactivity & Language Switcher Script for Super Ton (سوبر تون)
 * Features:
 * 1. Bilingual Support (Arabic RTL & English LTR) with dynamic DOM update & localStorage persistence
 * 2. Typewriter animation for Services section ("How Super Ton Works")
 * 3. Pixel-perfect View Details Modal matching Super Ton branding
 * 4. Mobile Navigation Drawer toggle & smooth scrolling
 */

// --- Bilingual Projects Data ---
const PROJECTS_DATA_AR = [
  {
    "id": "1",
    "title": "منصة الوساطة والضمان الآمن (Super Ton Escrow)",
    "shortDescription": "نظام الوساطة المعتمد المخصص لضمان عمليات البيع والشراء عبر الإنترنت وحماية حق الطرفين.",
    "fullDescription": "منصة الوساطة الآمنة من سوبر تون (Super Ton Escrow) هي النظام الرئيسي المخصص لضمان وحماية جميع عمليات البيع والشراء الرقمية عبر الإنترنت.\n\nتتيح المنصة إمكانية تنفيذ الصفقات بين البائع والمشتري تحت إشراف وسطاء معتمدين وموثوقين، حيث يتم إيداع المبلغ أو الأصول في حساب الوساطة حتى يتأكد المشتري من استلام الطلب كاملاً وبالواصفات المطلوبة، ثم يتم تحويل المستحقات للبائع فوراً.\n\nتتضمن المنصة أيضاً نظام فحص النصابين، وقناة تقييم السوبر لضمان أعلى مستويات الأمان والشفافية في السوق العربي.",
    "features": [
      "وساطة معتمدة بضمان 100% للطرفين",
      "قناة تقييم السوبر وسجل التقييمات",
      "نظام البحث والتحقق من النصابين",
      "إشعارات وسجل صفقات موثق",
      "دعم الفحص والتحقق من الحسابات",
      "حماية الأموال حتى اكتمال التسليم"
    ],
    "highlights": [
      "ضمان كامل لجميع الصفقات الرقمية",
      "إشراف نخبة من الوسطاء المعتمدين",
      "قنوات ثقة ومراجعات حقيقية",
      "تكامل مباشر مع تليجرام"
    ],
    "images": [
      {"url": "images/ProjectProtifolio/ProtifolioInterface.jpg", "description": "واجهة منصة الوساطة الرئيسية"},
      {"url": "images/Cubecahrm/Cubecharmthumnale.png", "description": "لوحة تحكم الصفقات والوسطاء"}
    ],
    "tools": ["React", "TON Blockchain", "Tailwind CSS", "Node.js", "Telegram API"],
    "liveUrl": "https://www.supertonapp.com/",
    "isFreelance": true
  },
  {
    "id": "2",
    "title": "منصة مزادات سوبر تون (Super Ton Auctions)",
    "shortDescription": "نظام مزادات ذكي ومتكامل لإجراء المزادات المباشرة على الأصول الرقمية مع ربط آلي بالبوت.",
    "fullDescription": "منصة مزادات سوبر تون هي البيئة المتكاملة لإدارة وعرض المزادات الحية والمباشرة على الأصول الرقمية، المعرفات، والقنوات بأعلى قدر من التنافسية والشفافية.\n\nيتصل النظام مباشرة ببوت المزادات الذكي، مما يتيح للمستخدمين تقديم المزايدات فورياً، وتتبع حركة الأسعار في الوقت الفعلي، وتلقي إشعارات المزايدة الفائزة، مع إمكانية تحويل الصفقة مباشرة لنظام الوساطة لضمان التسليم.",
    "features": [
      "مزادات حية ومباشرة في الوقت الفعلي",
      "ربط آلي مع بوت المزاد التليجرام",
      "إشعارات وتنبيهات مزايدة فورية",
      "نظام المزايدة الآمنة والضمان",
      "عرض وتتبع أعلى المزايدات"
    ],
    "highlights": [
      "مزايدات فورية شفافة",
      "ربط متكامل مع البوت والتليجرام",
      "تسليم مباشر عبر الوسيط المعتمد"
    ],
    "images": [
      {"url": "images/technoair/thumnalekeda.jpg", "description": "شاشة المزادات الحية والمباشرة"},
      {"url": "images/technoair/Hero.png", "description": "تفاصيل المزاد وبوت المزايدات"}
    ],
    "tools": ["Next.js", "TypeScript", "Tailwind CSS", "Telegram Bot API"],
    "liveUrl": "https://www.supertonapp.com/",
    "isFreelance": true
  },
  {
    "id": "3",
    "title": "دليل الوسطاء وقنوات الثقة (Super Ton Trust & Brokers)",
    "shortDescription": "سجل موثق يضم نخبة الوسطاء المعتمدين مع إمكانية التحقق من الهوية والتقييمات.",
    "fullDescription": "دليل الوسطاء المعتمدين وقنوات الثقة هو المرجع المعتمد في منصة سوبر تون لتأكيد موثوقية الوسطاء والمجموعات الرسمية.\n\nيحتوي الدليل على قائمة الوسطاء المعتمدين (مثل مازن ياسر، كاسبر، ليو، حازم، ستيفن، وغيرهم)، مع عرض روابط قنواتهم الرسمية، وحالة الاعتماد، وسجل تقييمات متعامليهم لضمان عدم الوقوع في فخ الحسابات المزيفة.",
    "features": [
      "دليل الوسطاء المعتمدين الرسمي",
      "روابط قنوات وجروبات الثقة الموثقة",
      "التحقق من معرفات وشخصيات الوسطاء",
      "سجل تقييمات وآراء المتعاملين",
      "تحديثات دورية وضمان السلامة"
    ],
    "highlights": [
      "وسطاء معتمدين ومجربين",
      "حماية كاملة من انتحال الشخصيات",
      "قنوات ومجموعات رسمية"
    ],
    "images": [
      {"url": "images/QuizApp/Quiz thumnale.jpg", "description": "دليل الوسطاء وقنوات الثقة"}
    ],
    "tools": ["React", "Context API", "Tailwind CSS", "Vite"],
    "liveUrl": "https://www.supertonapp.com/",
    "isInternship": true
  },
  {
    "id": "4",
    "title": "أدوات وحاسبة سوبر تون الذكية (Super Ton Tools & Calculator)",
    "shortDescription": "مجموعة أدوات حاسبة أسعار TON، محول العملات، فاحص المحافظ والمعرفات لحظياً.",
    "fullDescription": "تطبيق أدوات سوبر تون يوفر للمتعاملين والمستثمرين حاسبة أسعار عملة Toncoin اللحظية، محول العملات، وأدوات البحث الفوري عن عناوين المحافظ ومعرفات التليجرام لمتابعة حركة السوق بدقة وسهولة.",
    "features": [
      "حاسبة أسعار TON والتحويل الفوري",
      "فحص عناوين المحافظ والمعرفات",
      "متابعة أسعار العملات لحظة بلحظة",
      "واجهة سريعة وسهلة الاستخدام"
    ],
    "highlights": [
      "حاسبة أسعار وحساب عمولات فوري",
      "متابعة حية لأسعار السوق",
      "أدوات تحقق وفحص لحظية"
    ],
    "images": [
      {"url": "images/FoodApp/interface.jpg", "description": "حاسبة سوبر تون وأدوات التحويل"}
    ],
    "tools": ["React", "TON Web3 API", "Bootstrap", "React Hook Form"],
    "liveUrl": "https://www.supertonapp.com/"
  },
  {
    "id": "5",
    "title": "البوابة الرسمية والتطبيق (Super Ton Official Hub)",
    "shortDescription": "المركز الرئيسي لمنصة وتطبيق سوبر تون لإدارة وتسهيل الصفقات والخدمات الرقمية.",
    "fullDescription": "المركز والتطبيق الرسمي لمنصة سوبر تون، المصمم بأحدث المعايير التقنية ليجمع كافة خدمات المنصة من وساطة، مزادات، قنوات ثقة، وأدوات ذكية في مكان واحد مع تجربة مستخدم سريعة وفخمة.",
    "features": [
      "تطبيق ويب سريع ومتجاوب كامل",
      "دعم كامل للغة العربية والتصميم الحديث",
      "ربط مباشر مع مجتمعات وبوتات التليجرام"
    ],
    "highlights": [
      "تصميم حديث وأداء فائق السرعة",
      "دعم كامل للغة العربية والوضع الداكن",
      "تكامل شامل لجميع خدمات المنصة"
    ],
    "images": [
      {"url": "images/ProjectProtifolio/ProtifolioInterface.jpg", "description": "المركز الرئيسي لسوبر تون"}
    ],
    "tools": ["Next.js", "Tailwind CSS", "PWA", "Vite"],
    "liveUrl": "https://www.supertonapp.com/"
  }
];

const PROJECTS_DATA_EN = [
  {
    "id": "1",
    "title": "Super Ton Escrow & Protection Platform",
    "shortDescription": "Certified escrow system guaranteeing safe online trading and buyer/seller protection.",
    "fullDescription": "Super Ton Escrow is the primary platform designed to secure all digital buying and selling transactions online.\n\nTransactions are executed under the supervision of certified and verified brokers, where funds or assets are held securely in escrow until the buyer confirms receipt of the order in full condition. Funds are then immediately released to the seller.\n\nIncludes scammer checking system and Super reviews channel for ultimate transparency.",
    "features": [
      "100% Guaranteed Escrow Protection",
      "Super Review Channel & Ratings",
      "Scammer Lookup & Verification System",
      "Documented Transaction History",
      "Account & Asset Verification",
      "Funds Held Securely Until Delivery"
    ],
    "highlights": [
      "Full Digital Trade Guarantee",
      "Supervised by Certified Brokers",
      "Verified Community Trust Channels",
      "Direct Telegram Bot Integration"
    ],
    "images": [
      {"url": "images/ProjectProtifolio/ProtifolioInterface.jpg", "description": "Main Escrow Platform Interface"},
      {"url": "images/Cubecahrm/Cubecharmthumnale.png", "description": "Broker Dashboard & Deals Control"}
    ],
    "tools": ["React", "TON Blockchain", "Tailwind CSS", "Node.js", "Telegram API"],
    "liveUrl": "https://www.supertonapp.com/",
    "isFreelance": true
  },
  {
    "id": "2",
    "title": "Super Ton Live Auctions Platform",
    "shortDescription": "Smart real-time auction platform for digital assets linked directly to Telegram bots.",
    "fullDescription": "Super Ton Auctions provides a complete environment for managing live auctions on digital assets, handles, and channels with maximum transparency.\n\nDirectly connected to our Telegram auction bot, users can place real-time bids, track price movements, receive instant notifications, and transfer winning bids straight to escrow.",
    "features": [
      "Real-time Live Bidding Auctions",
      "Automated Telegram Bot Linkage",
      "Instant Bid & Price Change Alerts",
      "Secure Guarantee Bidding System",
      "Highest Bid Tracking & History"
    ],
    "highlights": [
      "Transparent Real-time Bidding",
      "Full Telegram Bot Integration",
      "Direct Delivery via Certified Escrow"
    ],
    "images": [
      {"url": "images/technoair/thumnalekeda.jpg", "description": "Live Bidding Auction Screen"},
      {"url": "images/technoair/Hero.png", "description": "Auction Details & Bot Linkage"}
    ],
    "tools": ["Next.js", "TypeScript", "Tailwind CSS", "Telegram Bot API"],
    "liveUrl": "https://www.supertonapp.com/",
    "isFreelance": true
  },
  {
    "id": "3",
    "title": "Super Ton Verified Brokers Directory & Trust Channels",
    "shortDescription": "Official directory of certified brokers with identity verification and reputation scores.",
    "fullDescription": "The Certified Brokers Directory & Trust Channels is Super Ton's official reference for verifying broker authenticity and official community groups.\n\nContains verified brokers (Mazen Yaser, Casper, Leo, Hazem, Steven, etc.), links to their official channels, certification status, and real user review logs to prevent fake accounts.",
    "features": [
      "Official Certified Brokers List",
      "Verified Trust Group & Channel Links",
      "Broker Identity & Handle Verification",
      "Client Ratings & Feedback Archive",
      "Regular Security Updates"
    ],
    "highlights": [
      "Tested & Certified Brokers",
      "Impersonation Protection",
      "Official Groups & Communities"
    ],
    "images": [
      {"url": "images/QuizApp/Quiz thumnale.jpg", "description": "Brokers Directory & Trust Channels"}
    ],
    "tools": ["React", "Context API", "Tailwind CSS", "Vite"],
    "liveUrl": "https://www.supertonapp.com/",
    "isInternship": true
  },
  {
    "id": "4",
    "title": "Super Ton Tools & Escrow Calculator",
    "shortDescription": "Smart utilities including TON rate converter, wallet checker, and escrow fee calculator.",
    "fullDescription": "Super Ton Tools provides essential digital helpers for community members, such as the Escrow Fee Calculator (calculating exact percentages for deal values) and the Scammer Check Database (searching IDs and wallets before trading).",
    "features": [
      "Instant Escrow Fee Calculator",
      "Wallet & Telegram ID Lookup",
      "Real-Time Market Rate Monitoring",
      "Fast & Intuitive Interface"
    ],
    "highlights": [
      "Instant Fee Calculation",
      "Proactive Fraud Prevention",
      "Free Community Tools"
    ],
    "images": [
      {"url": "images/FoodApp/interface.jpg", "description": "Super Ton Tools & Calculator Interface"}
    ],
    "tools": ["React", "TON Web3 API", "Bootstrap", "React Hook Form"],
    "liveUrl": "https://www.supertonapp.com/"
  },
  {
    "id": "5",
    "title": "Super Ton Official Hub & Community Portal",
    "shortDescription": "Main landing portal connecting all Super Ton services, channels, and support.",
    "fullDescription": "Super Ton Official Hub serves as the unified entry point for all platform services, connecting users to official Telegram bots, auction channels, feedback channels, and 24/7 customer support.",
    "features": [
      "Unified Fast Web Application",
      "Full Modern Dark-Mode Design",
      "Direct Linkage with Telegram Ecosystem"
    ],
    "highlights": [
      "Modern & High-Performance Design",
      "Full English & Arabic Support",
      "Comprehensive Service Integration"
    ],
    "images": [
      {"url": "images/ProjectProtifolio/ProtifolioInterface.jpg", "description": "Super Ton Central Hub"}
    ],
    "tools": ["Next.js", "Tailwind CSS", "PWA", "Vite"],
    "liveUrl": "https://www.supertonapp.com/"
  }
];

let PROJECTS_DATA = PROJECTS_DATA_AR;

// --- Bilingual Services Typewriter Config ---
const SERVICES_CONFIG_AR = [
  {
    titleElId: 'service-title-1',
    descElId: 'service-desc-1',
    title: 'الوساطة والضمان الآمن',
    descHtml: 'ضمان كامل وحماية بـ 100% لكل عمليات البيع والشراء. <span class="text-accent font-medium" style="color:#0098EA;">وسطاء معتمدون</span>، حفظ الأموال لحين الاستلام، ونظام فحص النصابين.',
    plainDesc: 'ضمان كامل وحماية بـ 100% لكل عمليات البيع والشراء. وسطاء معتمدون، حفظ الأموال لحين الاستلام، ونظام فحص النصابين.',
    highlightWord: 'وسطاء معتمدون'
  },
  {
    titleElId: 'service-title-2',
    descElId: 'service-desc-2',
    title: 'المزادات والأنظمة الذكية',
    descHtml: 'مزادات مباشرة وحية مع ربط كامل ببوتات التليجرام. <span class="text-accent font-medium" style="color:#0098EA;">مزايدات فورية</span> وشفافية مطلقة في تسليم الأصول والقنوات.',
    plainDesc: 'مزادات مباشرة وحية مع ربط كامل ببوتات التليجرام. مزايدات فورية وشفافية مطلقة في تسليم الأصول والقنوات.',
    highlightWord: 'مزايدات فورية'
  },
  {
    titleElId: 'service-title-3',
    descElId: 'service-desc-3',
    title: 'الأمان وسرعة الأداء',
    descHtml: 'بنية تحتية مشفرة وسريعة جداً. <span class="text-accent font-medium" style="color:#0098EA;">حماية الحسابات والبيانات</span> ودعم فني متواصل لحماية حقوق الطرفين.',
    plainDesc: 'بنية تحتية مشفرة وسريعة جداً. حماية الحسابات والبيانات ودعم فني متواصل لحماية حقوق الطرفين.',
    highlightWord: 'حماية الحسابات والبيانات'
  }
];

const SERVICES_CONFIG_EN = [
  {
    titleElId: 'service-title-1',
    descElId: 'service-desc-1',
    title: 'Secure Escrow & Guarantee',
    descHtml: '100% full guarantee for all digital buying & selling. <span class="text-accent font-medium" style="color:#0098EA;">Certified brokers</span>, funds held safely until delivery, scammer lookup system.',
    plainDesc: '100% full guarantee for all digital buying & selling. Certified brokers, funds held safely until delivery, scammer lookup system.',
    highlightWord: 'Certified brokers'
  },
  {
    titleElId: 'service-title-2',
    descElId: 'service-desc-2',
    title: 'Live Auctions & Smart Bots',
    descHtml: 'Real-time live auctions linked directly to Telegram bots. <span class="text-accent font-medium" style="color:#0098EA;">Instant bidding</span> and complete transparency in asset delivery.',
    plainDesc: 'Real-time live auctions linked directly to Telegram bots. Instant bidding and complete transparency in asset delivery.',
    highlightWord: 'Instant bidding'
  },
  {
    titleElId: 'service-title-3',
    descElId: 'service-desc-3',
    title: 'Security & High Performance',
    descHtml: 'Encrypted and lightning-fast architecture. <span class="text-accent font-medium" style="color:#0098EA;">Data & account protection</span> with 24/7 technical support.',
    plainDesc: 'Encrypted and lightning-fast architecture. Data & account protection with 24/7 technical support.',
    highlightWord: 'Data & account protection'
  }
];

let SERVICES_CONFIG = SERVICES_CONFIG_AR;

// --- Bilingual Translation Dictionary ---
const TRANSLATIONS = {
  ar: {
    // Meta & Title
    title: "سوبر تون | Super Ton - منصة الشراء والبيع الآمن عبر الوسيط",
    meta_desc: "سوبر تون - منصة مصرية عربية للبيع والشراء الآمن عبر وسيط معتمد. حماية الطرفين، مزادات، قنوات ثقة، وسطاء معتمدون.",
    
    // Navbar
    nav_about: "عن المنصة",
    nav_services: "الخدمات",
    nav_projects: "الأنظمة",
    nav_contact: "تواصل معنا",
    nav_visit: "زيارة المنصة",
    lang_btn_text: "English",

    // Hero
    hero_badge: "منصة الوساطة والمزادات المعتمدة",
    hero_title: 'SUPER<br/><span class="text-foreground/90">TON</span>',
    hero_desc: "سوبر للبيع والشراء عبر وسيط معتمد لضمان حق الطرفين 🛡️. منصة عربية آمنة لحماية المشتري والبائع، المزادات المباشرة، وقنوات الثقة الموثقة.",
    hero_btn_services: "استكشف الخدمات",
    hero_btn_contact: "تواصل معنا",
    hero_avail: "منصة آمنة بضمان 100% 🛡️",

    // Services
    services_tag: "خدمات سوبر تون",

    // Stack
    stack_tag: "التقنيات والأنظمة",
    stack_title: "الأدوات والأنظمة<br/>الداعمة للعمل.",

    // Projects Section
    projects_tag: "أنظمة سوبر تون",
    projects_sub: 'الخدمات والأنظمة<br/>المعتمدة',
    view_details: "عرض التفاصيل",

    // Process Section
    process_tag: "آلية العمل",
    process_title: "خطوات شفافة<br/>من البداية للنهاية.",
    process_step1_title: "التواصل والأهداف",
    process_step1_desc: "مناقشة تفاصيل الصفقة، تحديد المتطلبات، والتحقق من الحسابات أو الأصول المطلوبة.",
    process_step2_title: "التخطيط والضمان",
    process_step2_desc: "تحديد حساب الوساطة، إيداع المبلغ أو الأصول، وتجهيز شروط التسليم لضمان حق الطرفين.",
    process_step3_title: "الفحص والتسليم",
    process_step3_desc: "فحص الطلب من قبل المشتري والتأكد من مطابقة المواصفات تحت إشراف وسيط معتمد.",
    process_step4_title: "إتمام الصفقة والتحويل",
    process_step4_desc: "تحويل المستحقات فورياً للبائع وتأكيد نجاح الصفقة بضمان وأمان 100%.",

    // Contact Section
    contact_tag: "تواصل معنا",
    contact_title: "تواصل مع إدارة سوبر تون",
    contact_desc: "سواء كنت تريد تنفيذ صفقة وساطة، الاستفسار عن المزادات، أو التواصل مع إدارة المنصة، نحن هنا لخدمتك ودعمك بضمان وأمان كامل.",
    card_email: "البريد الإلكتروني / معرف التليجرام",
    card_whatsapp: "واتساب الدعم",
    card_linkedin: "لينكد إن",
    card_github: "جيت هاب",

    // Contact Form
    label_name: "الاسم الكامل",
    label_email: "البريد الإلكتروني / معرف التليجرام",
    label_phone: "رقم الهاتف / الواتساب",
    label_message: "رسالتك أو تفاصيل الصفقة",
    btn_send: "إرسال الرسالة",

    // Footer
    footer_copy: "© 2026 سوبر تون | Super Ton - جميع الحقوق محفوظة. بإدارة مازن ياسر.",
    placeholder_name: "اسمك الكامل",
    placeholder_email: "you@email.com أو @username",
    placeholder_phone: "+20 100 000 0000",
    placeholder_message: "اكتب تفاصيل استفسارك أو طلب الصفقة..."
  },
  en: {
    // Title & Meta
    title: "Super Ton | Secure Escrow & Auction Platform",
    meta_desc: "Super Ton - Official digital escrow & auction platform. Guaranteed buyer/seller protection, live auctions, trusted brokers list.",
    
    // Navbar
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Systems",
    nav_contact: "Contact",
    nav_visit: "Visit Platform",
    lang_btn_text: "العربية",

    // Hero
    hero_badge: "Certified Escrow & Auction Platform",
    hero_title: 'SUPER<br/><span class="text-foreground/90">TON</span>',
    hero_desc: "Super Ton for safe buying & selling via certified escrow to guarantee both parties' rights 🛡️. Secure platform protecting buyers & sellers, direct auctions, and verified trust channels.",
    hero_btn_services: "Explore Services",
    hero_btn_contact: "Contact Us",
    hero_avail: "100% Guaranteed Secure Platform 🛡️",

    // Services
    services_tag: "SUPER TON SERVICES",

    // Stack
    stack_tag: "TECH STACK",
    stack_title: "The tools behind<br/>the work.",

    // Projects Section
    projects_tag: "SUPER TON SYSTEMS",
    projects_sub: 'Certified<br/>Services & Systems',
    view_details: "View Details",

    // Process Section
    process_tag: "OUR PROCESS",
    process_title: "Straightforward<br/>start to finish.",
    process_step1_title: "Talk & Scope",
    process_step1_desc: "We discuss deal details, clarify requirements, and verify the accounts or assets involved.",
    process_step2_title: "Escrow & Plan",
    process_step2_desc: "Set up escrow terms, deposit funds/assets safely, and define clear delivery conditions.",
    process_step3_title: "Verify & Deliver",
    process_step3_desc: "Buyer inspects the order under certified broker supervision to ensure full spec compliance.",
    process_step4_title: "Payout & Hand Off",
    process_step4_desc: "Immediate funds payout to the seller with 100% deal completion confirmation.",

    // Contact Section
    contact_tag: "CONTACT US",
    contact_title: "Contact Super Ton Management",
    contact_desc: "Whether you want to execute an escrow deal, inquire about auctions, or contact platform management, we are here to assist you with full guarantee.",
    card_email: "Email / Telegram Handle",
    card_whatsapp: "WhatsApp Support",
    card_linkedin: "LinkedIn",
    card_github: "GitHub",

    // Contact Form
    label_name: "Full Name",
    label_email: "Email / Telegram Handle",
    label_phone: "Phone / WhatsApp",
    label_message: "Your Message or Deal Details",
    btn_send: "Send Message",

    // Footer
    footer_copy: "© 2026 Super Ton. All rights reserved. Managed by Mazen Yaser.",
    placeholder_name: "Your full name",
    placeholder_email: "you@email.com or @username",
    placeholder_phone: "+20 100 000 0000",
    placeholder_message: "Describe your inquiry or deal details..."
  }
};

let currentLang = localStorage.getItem('superton_lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('superton_lang', lang);

  const isAr = (lang === 'ar');
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  const dict = TRANSLATIONS[lang] || TRANSLATIONS['ar'];
  PROJECTS_DATA = isAr ? PROJECTS_DATA_AR : PROJECTS_DATA_EN;
  SERVICES_CONFIG = isAr ? SERVICES_CONFIG_AR : SERVICES_CONFIG_EN;

  // Title & Meta
  document.title = dict.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.meta_desc);

  // Update text of elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update Language Toggle Button Label
  const langLabel = document.getElementById('lang-toggle-label');
  if (langLabel) {
    langLabel.textContent = dict.lang_btn_text;
  }

  // Update Placeholders
  const nameInput = document.getElementById('name');
  if (nameInput) nameInput.placeholder = dict.placeholder_name;
  const emailInput = document.getElementById('email');
  if (emailInput) emailInput.placeholder = dict.placeholder_email;
  const phoneInput = document.getElementById('phone');
  if (phoneInput) phoneInput.placeholder = dict.placeholder_phone;
  const msgInput = document.getElementById('message');
  if (msgInput) msgInput.placeholder = dict.placeholder_message;

  // Update Project Cards on page if rendered statically
  updateProjectCardsDOM();

  // Re-run typewriter animation for new language
  initTypewriter();
}

function updateProjectCardsDOM() {
  const cards = document.querySelectorAll('#projects .group');
  cards.forEach((card, index) => {
    const pData = PROJECTS_DATA[index];
    if (!pData) return;

    const titleEl = card.querySelector('h3');
    if (titleEl) titleEl.textContent = pData.title;

    const descEl = card.querySelector('p');
    if (descEl) descEl.textContent = pData.shortDescription;

    const btnEl = card.querySelector('button');
    if (btnEl) btnEl.textContent = (currentLang === 'ar' ? 'عرض التفاصيل' : 'View Details');
  });
}

// Global active typewriter loop control
let typewriterRunId = 0;

function initTypewriter() {
  typewriterRunId++;
  const currentRunId = typewriterRunId;

  SERVICES_CONFIG.forEach((config) => {
    const titleEl = document.getElementById(config.titleElId);
    const descEl = document.getElementById(config.descElId);

    if (titleEl) {
      titleEl.innerHTML = `<span class="typewriter-title-content"></span><span class="inline-block w-[2px] h-[1.1em] align-middle bg-[#0098EA] ${currentLang==='ar'?'ml-0.5':'mr-0.5'} animate-pulse cursor-bar"></span>`;
    }
    if (descEl) {
      descEl.innerHTML = `<span class="typewriter-desc-content"></span><span class="inline-block w-[2px] h-[1.1em] align-middle bg-[#0098EA] ${currentLang==='ar'?'ml-0.5':'mr-0.5'} animate-pulse cursor-bar hidden"></span>`;
    }
  });

  runSequentialTypewriter(currentRunId);
}

async function runSequentialTypewriter(runId) {
  for (let i = 0; i < SERVICES_CONFIG.length; i++) {
    if (runId !== typewriterRunId) return;

    const config = SERVICES_CONFIG[i];
    const titleEl = document.getElementById(config.titleElId);
    const descEl = document.getElementById(config.descElId);
    
    if (!titleEl || !descEl) continue;

    const titleContent = titleEl.querySelector('.typewriter-title-content');
    const titleCursor = titleEl.querySelector('.cursor-bar');
    const descContent = descEl.querySelector('.typewriter-desc-content');
    const descCursor = descEl.querySelector('.cursor-bar');

    if (titleCursor) titleCursor.classList.remove('hidden');
    if (titleContent) titleContent.textContent = '';
    
    for (let char of config.title) {
      if (runId !== typewriterRunId) return;
      if (titleContent) titleContent.textContent += char;
      await sleep(30);
    }
    if (titleCursor) titleCursor.classList.add('hidden');

    if (descCursor) descCursor.classList.remove('hidden');
    if (descContent) descContent.textContent = '';
    const text = config.plainDesc;
    
    for (let j = 0; j <= text.length; j++) {
      if (runId !== typewriterRunId) return;
      const currentText = text.substring(0, j);
      if (descContent) {
        if (currentText.includes(config.highlightWord)) {
          const parts = currentText.split(config.highlightWord);
          descContent.innerHTML = `${escapeHtml(parts[0])}<span class="text-accent font-medium" style="color:#0098EA;">${escapeHtml(config.highlightWord)}</span>${escapeHtml(parts[1] || '')}`;
        } else {
          descContent.textContent = currentText;
        }
      }
      await sleep(15);
    }

    if (descCursor) descCursor.classList.add('hidden');
    await sleep(200);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// --- Pixel-Perfect View Details Modal ---
let activeModalOverlay = null;

function initModal() {
  document.querySelectorAll('#projects button, #projects .group').forEach((element, index) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const projIndex = index % PROJECTS_DATA.length;
      const project = PROJECTS_DATA[projIndex];
      if (project) {
        openModal(project.id);
      }
    });
  });
}

function openModal(projectId) {
  closeModal();

  const project = PROJECTS_DATA.find(p => p.id === projectId) || PROJECTS_DATA[0];
  const isAr = (currentLang === 'ar');

  const overlay = document.createElement('div');
  overlay.id = 'custom-project-modal';
  overlay.className = 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn';
  overlay.style.backgroundColor = 'rgba(4, 7, 13, 0.85)';
  overlay.style.backdropFilter = 'blur(12px)';

  const activeImage = project.images && project.images[0] ? project.images[0].url : 'images/ProjectProtifolio/ProtifolioInterface.jpg';
  const activeImageDesc = project.images && project.images[0] ? project.images[0].description : project.title;

  const labels = {
    features: isAr ? 'أبرز مميزات النظام' : 'Key Features & Capabilities',
    highlights: isAr ? 'نقاط القوة والأمان' : 'Security & Highlights',
    tools: isAr ? 'التقنيات المستخدمة' : 'Tech Stack & Tools',
    live: isAr ? 'زيارة المنصة الرسمية 🚀' : 'Visit Official Platform 🚀',
    certified: isAr ? 'نظام رسمي معتمد' : 'Certified Official System',
    close: isAr ? 'إغلاق' : 'Close'
  };

  overlay.innerHTML = `
    <div class="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#080d17] text-white shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col transition-all transform duration-300 scale-100" style="border-color: rgba(0, 152, 234, 0.3);">
      
      <!-- Modal Header Bar -->
      <div class="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#0b121e]">
        <div class="flex items-center gap-2">
          <span class="inline-block h-3 w-3 rounded-full bg-[#0098EA]"></span>
          <span class="text-xs font-semibold uppercase tracking-wider text-[#0098EA]">${labels.certified}</span>
        </div>
        <button id="modal-close-btn" aria-label="${labels.close}" class="rounded-full p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <!-- Modal Body (Scrollable) -->
      <div class="overflow-y-auto p-5 sm:p-6 space-y-6">
        
        <!-- Main Image Preview -->
        <div class="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b121e]" style="aspect-ratio: 16/9;">
          <img id="modal-main-img" src="${activeImage}" alt="${escapeHtml(activeImageDesc)}" class="h-full w-full object-cover transition-all duration-300" />
          ${project.images && project.images.length > 1 ? `
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 overflow-x-auto p-1.5 rounded-lg bg-black/60 backdrop-blur-md">
              ${project.images.map((img, i) => `
                <img src="${img.url}" alt="${escapeHtml(img.description || '')}" onclick="changeModalImage('${img.url}')" class="h-10 w-16 object-cover rounded cursor-pointer border border-white/20 hover:border-[#0098EA] transition-all" />
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Title & Badges -->
        <div>
          <h2 class="text-xl sm:text-2xl font-semibold text-white tracking-tight">${escapeHtml(project.title)}</h2>
          <p class="mt-2 text-sm text-gray-300 leading-relaxed">${escapeHtml(project.shortDescription)}</p>
        </div>

        <!-- Full Description -->
        <div class="rounded-xl border border-white/10 bg-[#0b121e]/60 p-4">
          <p class="text-sm text-gray-300 leading-relaxed whitespace-pre-line">${escapeHtml(project.fullDescription)}</p>
        </div>

        <!-- Features & Highlights Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Features -->
          <div class="rounded-xl border border-white/10 bg-[#0b121e]/60 p-4">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#0098EA] mb-3">${labels.features}</h3>
            <ul class="space-y-2 text-xs text-gray-300">
              ${(project.features || []).map(f => `
                <li class="flex items-start gap-2">
                  <span class="text-[#0098EA] font-bold">✓</span>
                  <span>${escapeHtml(f)}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Highlights -->
          <div class="rounded-xl border border-white/10 bg-[#0b121e]/60 p-4">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#0098EA] mb-3">${labels.highlights}</h3>
            <ul class="space-y-2 text-xs text-gray-300">
              ${(project.highlights || []).map(h => `
                <li class="flex items-start gap-2">
                  <span class="text-[#0098EA] font-bold">🛡️</span>
                  <span>${escapeHtml(h)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Tools & Tech Stack -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">${labels.tools}</h3>
          <div class="flex flex-wrap gap-2">
            ${(project.tools || []).map(t => `
              <span class="rounded-full border border-white/10 bg-[#0b121e] px-3 py-1 text-xs text-gray-300 font-medium">${escapeHtml(t)}</span>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="flex items-center justify-between border-t border-white/10 px-5 py-4 bg-[#0b121e]">
        <button onclick="closeModal()" class="rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-gray-300 hover:bg-white/10 transition-colors">
          ${labels.close}
        </button>
        <a href="${project.liveUrl || 'https://www.supertonapp.com/'}" target="_blank" rel="noopener noreferrer" class="rounded-full bg-[#0098EA] px-6 py-2 text-xs font-semibold text-white transition-all hover:bg-[#0088d4] shadow-lg hover:shadow-[#0098EA]/30">
          ${labels.live}
        </a>
      </div>

    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  activeModalOverlay = overlay;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);

  window.addEventListener('keydown', handleEscKey);
}

function changeModalImage(url) {
  const img = document.getElementById('modal-main-img');
  if (img) img.src = url;
}

function handleEscKey(e) {
  if (e.key === 'Escape') closeModal();
}

function closeModal() {
  if (activeModalOverlay) {
    activeModalOverlay.remove();
    activeModalOverlay = null;
    document.body.style.overflow = '';
    window.removeEventListener('keydown', handleEscKey);
  }
}

// --- Initialize Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = (currentLang === 'ar' ? 'en' : 'ar');
      setLanguage(nextLang);
    });
  }

  setLanguage(currentLang);
  initModal();
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn && !langBtn.getAttribute('data-bound')) {
    langBtn.setAttribute('data-bound', 'true');
    langBtn.addEventListener('click', () => {
      const nextLang = (currentLang === 'ar' ? 'en' : 'ar');
      setLanguage(nextLang);
    });
  }
  setLanguage(currentLang);
  initModal();
}


// ============================================================================
// --- SUPER TON DYNAMIC MULTI-LEVEL SYSTEMS NAVIGATION TREE ENGINE ---
// ============================================================================

let SUPER_TON_NAV_DATA = {
  main: {
    title: { ar: 'روابط وأنظمة سوبر تون المعتمدة', en: 'Super Ton Official Links & Systems' },
    subtitle: { ar: 'اختر الفئة للاستكشاف والتحول بين الأقسام', en: 'Select a category to explore & navigate' },
    items: [
      { id: 'trust', icon: 'shieldCheck', title: { ar: 'قسم الثقة سوبر تون', en: 'Super Ton Trust Section' }, desc: { ar: 'قناة تقييم السوبر والمناقشات الموثقة', en: 'Super Review Channel & Verified Discussions' }, type: 'category' },
      { id: 'channels', icon: 'tv', title: { ar: 'قسم قنوات ومجموعات سوبر تون', en: 'Super Ton Channels & Groups' }, desc: { ar: 'قنوات الرسمية والمزادات والخدمات والهدايا', en: 'Official Channels, Auctions, Services & Gifts' }, type: 'category' },
      { id: 'brokers', icon: 'usersCheck', title: { ar: 'قسم الوسطاء المعتمدون', en: 'Certified Brokers Section' }, desc: { ar: 'قائمة الوسطاء المعتمدين بضمان سوبر تون', en: 'List of Certified Brokers with Super Guarantee' }, type: 'category' },
      { id: 'owners', icon: 'crown', title: { ar: 'قسم مالكين سوبر تون', en: 'Super Ton Owners Section' }, desc: { ar: 'الإدارة العليا ومؤسسو منصة سوبر تون', en: 'Executive Management & Founders' }, type: 'category' }
    ]
  },
  trust: {
    parent: 'main',
    title: { ar: 'قسم الثقة سوبر تون', en: 'Super Ton Trust Section' },
    subtitle: { ar: 'القنوات الرسمية لتقييم وآراء العملاء الموثقة', en: 'Official Channels for Verified Reviews & Feedback' },
    items: [
      { id: 'trust_tooon', icon: 'star', title: { ar: 'قناة تقييم السوبر', en: 'Super Review Channel' }, subtitle: { ar: 'تقييمات صفقات الوساطة المعتمدة', en: 'Certified Escrow Deal Reviews' }, href: 'https://t.me/trust_tooon', type: 'link' },
      { id: 'SuperTon_Reviews', icon: 'messageSquare', title: { ar: 'جروب تقييم السوبر', en: 'Super Review Group' }, subtitle: { ar: 'مناقشات وآراء المتعاملين المباشرة', en: 'Direct Client Feedback & Discussions' }, href: 'https://t.me/SuperTon_Reviews', type: 'link' }
    ]
  },
  channels: {
    parent: 'main',
    title: { ar: 'قسم قنوات ومجموعات سوبر تون', en: 'Super Ton Channels & Groups' },
    subtitle: { ar: 'استكشف القنوات والمزادات والخدمات', en: 'Explore Channels, Auctions & Bot Services' },
    items: [
      { id: 'superton', icon: 'sparkles', title: { ar: 'قسم سوبر تون الرسمي', en: 'Official Super Ton Category' }, desc: { ar: 'القناة والجروب الرسمي لسوبر تون', en: 'Official Channel & Group of Super Ton' }, type: 'category' },
      { id: 'auction', icon: 'gavel', title: { ar: 'قسم مزادات سوبر تون', en: 'Super Ton Auction Category' }, desc: { ar: 'مزادات الأصول، اليوزرات، والقنوات', en: 'Asset, Username & Channel Auctions' }, type: 'category' },
      { id: 'gifts', icon: 'gift', title: { ar: 'قسم هدايا سوبر تون', en: 'Super Ton Gifts Category' }, desc: { ar: 'قناة الهدايا والمسابقات الرسمية', en: 'Official Gifts & Giveaways Channel' }, type: 'category' },
      { id: 'FragmentTooonBot', icon: 'bot', title: { ar: 'بوت فراجمنت سوبر تون', en: 'Fragment Super Ton Bot' }, desc: { ar: 'شراء وبيع اليوزرات والأرقام المميزة عبر فراجمنت', en: 'Buy & Sell Telegram Usernames & Numbers via Fragment' }, href: 'https://t.me/FragmentTooonBot', type: 'link' },
      { id: 'NSB3_BOT', icon: 'shieldAlert', title: { ar: 'بوت فاحص النصابين', en: 'Scammer Inspector Bot' }, desc: { ar: 'التحقق الفوري من المعرفات والمحافظ المحظورة', en: 'Instant Lookup for Blacklisted IDs & Wallets' }, href: 'https://t.me/NSB3_BOT', type: 'link' }
    ]
  },
  superton: {
    parent: 'channels',
    title: { ar: 'قسم سوبر تون الرسمي', en: 'Official Super Ton Category' },
    subtitle: { ar: 'القناة الرسمية والجروب الرئيسي للمناقشات', en: 'Official Channel & Main Discussion Group' },
    items: [
      { id: 'Tooon_Channel', icon: 'send', title: { ar: 'قناة سوبر تون الرسمية', en: 'Super Ton Official Channel' }, subtitle: { ar: 'الإعلانات والأخبار الرسمية', en: 'Official Announcements & Updates' }, href: 'https://t.me/Tooon_Channel', type: 'link' },
      { id: 'chat_tooon', icon: 'messageCircle', title: { ar: 'جروب سوبر تون الرئيسي', en: 'Super Ton Main Group' }, subtitle: { ar: 'مجتمع سوبر تون للمناقشات والصفقات', en: 'Community Chat & Trading Discussions' }, href: 'https://t.me/chat_tooon', type: 'link' }
    ]
  },
  auction: {
    parent: 'channels',
    title: { ar: 'قسم مزادات سوبر تون', en: 'Super Ton Auction Category' },
    subtitle: { ar: 'مزادات مباشرة وبوت المزايدات الآلي', en: 'Live Auctions & Automated Bidding Bot' },
    items: [
      { id: 'Tooon_Auction', icon: 'gavel', title: { ar: 'قناة مزادات سوبر تون', en: 'Super Ton Auctions Channel' }, subtitle: { ar: 'عروض المزادات الحية والمباشرة', en: 'Live Bidding Listings & Auctions' }, href: 'https://t.me/Tooon_Auction', type: 'link' },
      { id: 'AuctionTonGroup', icon: 'users', title: { ar: 'جروب مزادات سوبر تون', en: 'Super Ton Auctions Group' }, subtitle: { ar: 'مجموعة المزايدات والنقاشات', en: 'Bidding Group & Community' }, href: 'https://t.me/AuctionTonGroup', type: 'link' },
      { id: 'ToonAuctionBot', icon: 'bot', title: { ar: 'بوت مزادات سوبر تون', en: 'Super Ton Auction Bot' }, subtitle: { ar: 'بوت تقديم وتتبع المزايدات الآلي', en: 'Automated Bidding & Management Bot' }, href: 'https://t.me/ToonAuctionBot', type: 'link' }
    ]
  },
  gifts: {
    parent: 'channels',
    title: { ar: 'قسم هدايا سوبر تون', en: 'Super Ton Gifts Category' },
    subtitle: { ar: 'جوائز وهدايا للمتعاملين والمجتمع', en: 'Community Giveaways & Rewards' },
    items: [
      { id: 'gift_toon', icon: 'gift', title: { ar: 'قناة هدايا سوبر تون', en: 'Super Ton Gifts Channel' }, subtitle: { ar: 'المسابقات والهدايا الدورية', en: 'Periodic Contests & Gift Drops' }, href: 'https://t.me/gift_toon', type: 'link' }
    ]
  },
  brokers: {
    parent: 'main',
    title: { ar: 'قسم الوسطاء المعتمدون', en: 'Certified Brokers Section' },
    subtitle: { ar: 'اختر فئة الوسطاء لعرض الحسابات المعتمدة', en: 'Select a broker category to view verified accounts' },
    items: [
      { id: 'superBrokers', icon: 'userCheck', title: { ar: 'وسطاء سوبر تون المعتمدون', en: 'Super Ton Certified Brokers' }, desc: { ar: 'نخبة الوسطاء المعتمدين لضمان الصفقات العامة', en: 'Top Verified Brokers for Escrow Deals' }, type: 'category' },
      { id: 'auctionBrokers', icon: 'gavel', title: { ar: 'وسطاء مزادات سوبر تون', en: 'Super Ton Auction Brokers' }, desc: { ar: 'الوسطاء المتخصصون في إدارة وتنفيذ المزادات', en: 'Specialized Brokers for Auction Execution' }, type: 'category' }
    ]
  },
  superBrokers: {
    parent: 'brokers',
    title: { ar: 'وسطاء سوبر تون المعتمدون', en: 'Super Ton Certified Brokers' },
    subtitle: { ar: 'تواصل مباشر مع الوسطاء المعتمدين بضمان المنصة', en: 'Direct contact with verified escrow brokers' },
    items: [
      { id: 't_e_r', username: 't_e_r', title: { ar: 'كاسبر | Casper', en: 'Casper' }, subtitle: { ar: 'وسيط معتمد بضمان سوبر تون 🛡️', en: 'Super Ton Verified Broker 🛡️' }, href: 'https://t.me/t_e_r', type: 'broker' },
      { id: 'ccmca', username: 'ccmca', title: { ar: 'ليو | Leo', en: 'Leo' }, subtitle: { ar: 'وسيط معتمد بضمان سوبر تون 🛡️', en: 'Super Ton Verified Broker 🛡️' }, href: 'https://t.me/ccmca', type: 'broker' },
      { id: 'H_A_Z_M', username: 'H_A_Z_M', title: { ar: 'حازم | Hazem', en: 'Hazem' }, subtitle: { ar: 'وسيط معتمد بضمان سوبر تون 🛡️', en: 'Super Ton Verified Broker 🛡️' }, href: 'https://t.me/H_A_Z_M', type: 'broker' },
      { id: 'c_o_a', username: 'c_o_a', title: { ar: 'ستيفن | Steven', en: 'Steven' }, subtitle: { ar: 'وسيط معتمد بضمان سوبر تون 🛡️', en: 'Super Ton Verified Broker 🛡️' }, href: 'https://t.me/c_o_a', type: 'broker' }
    ]
  },
  auctionBrokers: {
    parent: 'brokers',
    title: { ar: 'وسطاء مزادات سوبر تون', en: 'Super Ton Auction Brokers' },
    subtitle: { ar: 'وسطاء معتمدون لإدارة صفقات المزادات', en: 'Certified brokers managing auction transactions' },
    items: [
      { id: 'Mahmuod', username: 'Mahmuod', title: { ar: 'محمود | Mahmoud', en: 'Mahmoud' }, subtitle: { ar: 'وسيط مزادات معتمد 🛡️', en: 'Certified Auction Broker 🛡️' }, href: 'https://t.me/Mahmuod', type: 'broker' },
      { id: 'FAZ3a', username: 'FAZ3a', title: { ar: 'فزعة | Faz3a', en: 'Faz3a' }, subtitle: { ar: 'وسيط مزادات معتمد 🛡️', en: 'Certified Auction Broker 🛡️' }, href: 'https://t.me/FAZ3a', type: 'broker' }
    ]
  },
  owners: {
    parent: 'main',
    title: { ar: 'قسم مالكين سوبر تون', en: 'Super Ton Owners Section' },
    subtitle: { ar: 'مؤسسو وإدارة منصة سوبر تون العليا', en: 'Super Ton Founders & Executive Board' },
    items: [
      { id: 's_r_x', username: 's_r_x', title: { ar: 'مازن ياسر | Mazen Yaser', en: 'Mazen Yaser' }, subtitle: { ar: 'مؤسس ومدير منصة سوبر تون 👑', en: 'Founder & Owner of Super Ton 👑' }, href: 'https://t.me/s_r_x', type: 'owner' },
      { id: 'm_eee', username: 'm_eee', title: { ar: 'مستشار سوبر تون | Super Ton Admin', en: 'Super Ton Admin' }, subtitle: { ar: 'إدارة وتطوير منصة سوبر تون 🛡️', en: 'Management & Operations Admin 🛡️' }, href: 'https://t.me/m_eee', type: 'owner' }
    ]
  }
};

// Check for user custom admin settings saved in localStorage
try {
  const savedData = localStorage.getItem('superton_nav_data_v2');
  if (savedData) {
    const parsed = JSON.parse(savedData);
    if (parsed && typeof parsed === 'object') {
      SUPER_TON_NAV_DATA = parsed;
    }
  }
} catch (err) {
  console.warn('Failed to load custom SUPER_TON_NAV_DATA from localStorage', err);
}

let currentNavSection = 'main';

function getNavSvgIcon(iconName) {
  const isAr = (currentLang === 'ar');
  const icons = {
    arrowBack: `<svg class="w-4 h-4 ${isAr ? 'rotate-180' : ''}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>`,
    chevron: `<svg class="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors ${isAr ? 'rotate-180' : ''}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`,
    externalLink: `<svg class="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
    shieldCheck: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    tv: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17 2l-5 5-5-5"/></svg>`,
    usersCheck: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    userCheck: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M16 11l2 2 4-4"/></svg>`,
    crown: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`,
    star: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    messageSquare: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
    messageCircle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
    sparkles: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/></svg>`,
    gavel: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 13l-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L11 10M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/></svg>`,
    gift: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>`,
    bot: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="12" x="3" y="6" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 11h.01M15 11h.01M12 2v4M4 12H2M22 12h-2M10 16h4"/></svg>`,
    shieldAlert: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4M12 16h.01"/></svg>`,
    send: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
    users: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`
  };
  return icons[iconName] || icons.sparkles;
}

function renderSuperTonNav(sectionId) {
  const container = document.getElementById('superton-systems-container');
  if (!container) return;

  const sectionData = SUPER_TON_NAV_DATA[sectionId] || SUPER_TON_NAV_DATA.main;
  currentNavSection = sectionId;
  const isAr = (currentLang === 'ar');

  // Update Section Subtitle / Header Title in index.html if present
  const sectionTitleEl = document.getElementById('superton-nav-title');
  if (sectionTitleEl) {
    sectionTitleEl.innerHTML = isAr ? sectionData.title.ar : sectionData.title.en;
  }

  let html = `<style>
  #superton-systems-container img {
    width: 46px !important;
    height: 46px !important;
    min-width: 46px !important;
    min-height: 46px !important;
    max-width: 46px !important;
    max-height: 46px !important;
    object-fit: cover !important;
    border-radius: 9999px !important;
    display: block !important;
  }
  #superton-systems-container .avatar-box {
    width: 46px !important;
    height: 46px !important;
    min-width: 46px !important;
    min-height: 46px !important;
    max-width: 46px !important;
    max-height: 46px !important;
    flex-shrink: 0 !important;
    position: relative !important;
  }
</style><div class="w-full space-y-3 animate-fadeIn">`;

  // Render Sub-header indicator if in a sub-category
  if (sectionData.parent) {
    const backText = isAr ? 'رجوع' : 'Back';
    html += `
      <div class="flex items-center justify-between w-full max-w-xl mx-auto mb-3 px-1">
        <button data-nav-back="${sectionData.parent}" class="group flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 hover:bg-accent/20 text-accent font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
          ${getNavSvgIcon('arrowBack')}
          <span>${backText}</span>
        </button>
        <span class="text-xs text-muted-foreground font-medium">${isAr ? sectionData.subtitle.ar : sectionData.subtitle.en}</span>
      </div>
    `;
  }

  // Render Navigation Items Grid / List
  sectionData.items.forEach(item => {
    const title = isAr ? item.title.ar : item.title.en;
    const desc = item.desc ? (isAr ? item.desc.ar : item.desc.en) : (item.subtitle ? (isAr ? item.subtitle.ar : item.subtitle.en) : '');

    if (item.type === 'category') {
      const exploreText = isAr ? 'استكشف' : 'Explore';
      html += `
        <button data-nav-target="${item.id}" class="group relative flex items-center justify-between w-full max-w-xl mx-auto p-4 sm:p-4.5 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-card/70 hover:shadow-[0_0_25px_-5px_var(--accent)] cursor-pointer no-underline text-foreground text-start">
          <div class="flex items-center gap-3.5 min-w-0 flex-1 me-3">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
              ${getNavSvgIcon(item.icon)}
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate">${title}</h3>
              ${desc ? `<p class="text-xs text-muted-foreground mt-0.5 truncate">${desc}</p>` : ''}
            </div>
          </div>
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-accent/20 bg-accent/10 text-accent text-xs font-medium group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 shrink-0 ms-2">
            <span class="hidden sm:inline">${exploreText}</span>
            ${getNavSvgIcon('chevron')}
          </div>
        </button>
      `;
    } else if (item.type === 'link') {
      const visitText = isAr ? 'زيارة' : 'Visit';
      html += `
        <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-between w-full max-w-xl mx-auto p-4 sm:p-4.5 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-card/70 hover:shadow-[0_0_25px_-5px_var(--accent)] cursor-pointer no-underline text-foreground text-start">
          <div class="flex items-center gap-3.5 min-w-0 flex-1 me-3">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
              ${getNavSvgIcon(item.icon)}
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate">${title}</h3>
              ${desc ? `<p class="text-xs text-muted-foreground mt-0.5 truncate">${desc}</p>` : ''}
            </div>
          </div>
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-accent/20 bg-accent/10 text-accent text-xs font-medium group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 shrink-0 ms-2">
            <span class="hidden sm:inline">${visitText}</span>
            ${getNavSvgIcon('externalLink')}
          </div>
        </a>
      `;
    } else if (item.type === 'broker' || item.type === 'owner') {
      const avatarUrl = `https://t.me/i/userpic/320/${item.username}.jpg`;
      const isOwner = (item.type === 'owner');
      const badgeIcon = isOwner ? '👑' : '🛡️';
      const initialLetter = item.username ? item.username.charAt(0).toUpperCase() : 'U';
      const contactText = isAr ? 'تواصل' : 'Contact';

      html += `
        <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-between w-full max-w-xl mx-auto p-4 sm:p-4.5 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-card/70 hover:shadow-[0_0_25px_-5px_var(--accent)] cursor-pointer no-underline text-foreground text-start">
          <div class="flex items-center gap-3.5 min-w-0 flex-1 me-3">
            <div class="relative h-11 w-11 shrink-0 rounded-full border-2 border-accent/40 bg-accent/15 text-accent flex items-center justify-center font-bold text-sm overflow-hidden" style="width: 44px !important; height: 44px !important; min-width: 44px !important; min-height: 44px !important;">
              <span class="font-bold text-accent text-sm">${initialLetter}</span>
              <img src="${avatarUrl}" alt="${item.username}" onerror="this.style.opacity='0';" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-300" style="width: 100% !important; height: 100% !important; object-fit: cover !important;" />
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate">${title}</h3>
                <span class="text-xs shrink-0" title="معتمد">${badgeIcon}</span>
                <span class="inline-flex items-center text-[11px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 shrink-0" style="direction: ltr !important; unicode-bidi: isolate !important;"><span style="direction: ltr !important;">@</span><span>${item.username}</span></span>
              </div>
              ${desc ? `<p class="text-xs text-muted-foreground mt-1 truncate">${desc}</p>` : ''}
            </div>
          </div>
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-accent/20 bg-accent/10 text-accent text-xs font-medium group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 shrink-0 ms-2">
            <span class="hidden sm:inline">${contactText}</span>
            ${getNavSvgIcon('externalLink')}
          </div>
        </a>
      `;
    }
  });

  html += `</div>`;
  container.innerHTML = html;

  // Bind Click Handlers for Navigation Targets & Back Buttons
  container.querySelectorAll('[data-nav-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-nav-target');
      renderSuperTonNav(targetId);
    });
  });

  container.querySelectorAll('[data-nav-back]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const backId = btn.getAttribute('data-nav-back');
      renderSuperTonNav(backId);
    });
  });
}

// Hook into setLanguage function to re-render nav state on language switch
const originalSetLanguage = setLanguage;
setLanguage = function(lang) {
  originalSetLanguage(lang);
  renderSuperTonNav(currentNavSection);
};

// Initialize Super Ton Navigation on page load
document.addEventListener('DOMContentLoaded', () => {
  renderSuperTonNav('main');
  checkAdminUrlTrigger();
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  renderSuperTonNav('main');
  checkAdminUrlTrigger();
}

// Secret URL Trigger: If user navigates to #admin or ?admin, redirect to admin.html
function checkAdminUrlTrigger() {
  const hash = (window.location.hash || '').toLowerCase();
  const search = (window.location.search || '').toLowerCase();
  if (hash === '#admin' || search.includes('admin')) {
    window.location.href = 'admin.html';
  }
}
window.addEventListener('hashchange', checkAdminUrlTrigger);

