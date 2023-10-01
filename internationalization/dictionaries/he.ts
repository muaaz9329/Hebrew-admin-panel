export default {
  hello: "שלום",
  auth: {
    loginTitle: "כניסה למנהל מערכת",
    email: "אימייל",
    password: "סיסמה",
    login: "התחברות",
  },
  dashboard: {
    headerTitle: "מנהל מערכת",
    sidebar: {
      categories: "קטגוריות",
      subcategories: "קטגוריות משנה",
      links: "קישורים",
      consultation: "ייעוץ",
      requests: "בקשות",
      settings: "הגדרה",
      dailyStudies: "לימודים יומיים",
      homeSlider: "סליידר ביתי",
      detailForm: "טופס פירוט",
      popupNews: "חדשות קופצות",
      logout: "להתנתק",
      book: "סֵפֶר",
    },
  },
  pages: {
    newsPopup: {
      popupNewsTitle: "חדשות קופצות",
      formTitle: "טופס קופץ חדשות",
      addNews: "הוסף חדשות",
      noNews: "לא נוספו חדשות",
    },
    homeSlider: {
      imageSlider: "סליידר תמונה",
      refreshInterval: "מרווח רענון",
    },
    dailyStudies: {
      formTitle: "טופס לימודים יומיים",
      studyContent: "תוכן לימוד",
    },
    categories: {
      formTitle: "טופס קטגוריה",
      addCategory: "הוסף קטגוריה",
    },
    subcategories: {
      formTitle: "טופס קטגוריה משנה",
      addCategory: "הוסף קטגוריה משנה",
    },
    settingsForm: {
      settingsFormTitle: "טופס הגדרות",
      adminLogo: "לוגו מנהל מערכת",
    },
    requests: {
      formTitle: "פירוט הבקשה",
      type: "סוג",
      name: "שֵׁם",
      email: "אימייל",
      phoneNumber: "מספר טלפון",
      address: "כתובת",
    },
    links: {
      formTitle: "הוסף קישור חדש",
      links: "קישורים",
      youtube: "יוטיוב",
      youtubePlaylist: "יוטיוב פלייליסט",
      whatsapp: "וואטסאפ",
      website: "אתר אינטרנט",
      websiteUrl: "כתובת אתר",
      chooseType: "בחר סוג",
    },
    consultation: {
      addBtn: "הוסף מוצר חדש",
      files: "תוכן",
      payment: "בתשלום",
      formTitle: "טופס",
      free: "חינם",
      paid: "שולם",
      amount: "סכום",
    },
    subcategoryContent: {
      formTitle: "טופס תוכן קטגוריה משנה",
    },
    detailForm: {
      fieldName: "שם שדה",
      AddField: "הוסף שדה",
      optional: "לא חובה",
      required: "חובה",
      formTitle: "טופס פירוט",
      AddNewField: "הוסף שדה",
      EditForm: "ערוך טופס:",
    },
    book: {
      formTitle: "טופס ספר",
      bookName: "שם הספר",
      bookDescription: "תיאור ספר",
      bookCover: "כריכה",
      bookFile: "קובץ ספר",
    },
  },
  intervals: {
    "seconds#other": "{count} שניות",
    "minutes#other": "{count} דקות",
    "hours#other": "{count} שעות",
    "days#other": "{count} ימים",
    "weeks#other": "{count} שבועות",
    "months#other": "{count} חודשים",
    "years#other": "{count} שנים",
  },
  actions: {
    search: "לחפש",
    addFile: "הוסף קובץ",
    done: "אישור",
    change: "לְשַׁנוֹת",
    upload: "לְהַעֲלוֹת",
    choose: "לבחור",
    save: "להציל",
    cancel: "לְבַטֵל",
    confirm: "לְאַשֵׁר",
    add: "לְהוֹסִיף",
    back: "חזור",
    new: "חָדָשׁ",
    edit: "לַעֲרוֹך",
    addAField: "הוסף שדה",
    addCover: "הוסף כיסוי",
    delete: "לִמְחוֹק",
    uploadImage: "העלה תמונה",
    uploadVideo: "העלה וידאו",
    approve: "לְאַשֵׁר",
    Assigned:"שוייך"
  },
  messages: {
    areYouSure: "האם אתה בטוח?",
    cantUndo: "אתה לא יכול לבטל פעולה זו",
  },
  words: {
    image: "תמונה",
    video: "וידאו",
    text: "טקסט",
    file: "קובץ",
    serialNo: "מס.",
    title: "כותרת",
    fileName: "שם הלימוד",
    description: "תיאור",
    dailyStudies: "לימודים יומיים",
    requests: "בקשות",
    fileType: "עלות",
    parentCategory: "קטגורית אב",
    name: "שֵׁם",
    address: "כתובת",
    details: "פרטים",
    email: "אימייל",
    phoneNumber: "מספר טלפון",
    type: "סוג",
    categories: "קטגוריות",
    subcategories: "קטגוריות משנה",
    links: "קישורים",
    consultation: "ייעוץ",
    category: "קטגוריה",
    subcategory: "קטגוריה משנה",
    link: "קישור",
    linkType: "סוג קישור",
    addContent: "הוסף תוכן",
    noContent: "אין תוכן",
    content: "תוכן",
    timeToRead: "זמן לקריאה",

    showDate: "תאריך",
  },
  micsWords: {
    chooseParentCategory: "בחר קטגוריית אב",
    chooseBetweenPdfAndFile: "אתה יכול להעלות קובץ pdf או להזין תוכן טקסט",
    chooseType: "בחר את סוג התוכן שלך",
  },
} as const;
