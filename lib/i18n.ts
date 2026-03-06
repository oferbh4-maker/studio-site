export type Lang = 'en' | 'he';

export interface Translations {
  nav: {
    work: string;
    studio: string;
    contact: string;
  };
  footer: {
    locations: string;
  };
  home: {
    heroLabel: string;
    heroHeadline1: string;
    heroHeadline2: string;
    heroDesc: string;
    viewWork: string;
    startProject: string;
    selectedWork: string;
    allProjects: string;
    philosophy: string;
    philosophyQuote: string;
    aboutStudio: string;
    ctaHeadline: string;
    ctaHeadline2: string;
    ctaDesc: string;
    ctaButton: string;
    featuredProjects: Array<{ title: string; location: string; category: string }>;
  };
  about: {
    theStudio: string;
    headline: string;
    ourStory: string;
    story: [string, string, string];
    ourPhilosophy: string;
    philosophyQuote: string;
    phil: [string, string, string];
    whatWeBelieve: string;
    values: Array<{ title: string; description: string }>;
    theTeam: string;
    studioPhotoComing: string;
    team: Array<{ name: string; role: string; bio: string }>;
  };
  projects: {
    portfolio: string;
    selectedWork: string;
    items: Array<{ title: string; location: string; category: string; description: string }>;
  };
  contact: {
    getInTouch: string;
    headline: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formPhone: string;
    formPhonePlaceholder: string;
    formProjectType: string;
    formSelectOne: string;
    formResidential: string;
    formCommercial: string;
    formHospitality: string;
    formOther: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    studioLabel: string;
    studioAddress: string;
    contactLabel: string;
    email: string;
    phone: string;
    hoursLabel: string;
    hoursWeekdays: string;
    hoursNote: string;
    followLabel: string;
  };
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      work: 'Work',
      studio: 'Studio',
      contact: 'Contact',
    },
    footer: {
      locations: 'Haifa, Israel',
    },
    home: {
      heroLabel: 'Interior Design Studio',
      heroHeadline1: 'Where Space',
      heroHeadline2: 'Listens.',
      heroDesc:
        'Educator and interior designer. Creating spaces that breathe — environments shaped by human connection, movement, and a sense of belonging.',
      viewWork: 'View Work',
      startProject: 'Start a Project',
      selectedWork: 'Selected Work',
      allProjects: 'All Projects →',
      philosophy: 'My Philosophy',
      philosophyQuote:
        '"People need a space that listens to them."',
      aboutStudio: 'About the Studio',
      ctaHeadline: "Let's create something",
      ctaHeadline2: 'that endures.',
      ctaDesc:
        'I work with a select number of clients each year to ensure every project receives full attention and care.',
      ctaButton: 'Begin a Conversation',
      featuredProjects: [
        { title: 'The Dialectical Home', location: 'Israel', category: 'Residential' },
        { title: 'Eclectic Salon', location: 'Haifa, Israel', category: 'Residential' },
        { title: 'Home for the Third Age', location: 'Tel Aviv, Israel', category: 'Residential' },
      ],
    },
    about: {
      theStudio: 'About Me',
      headline: 'Spaces are not just structures — they are a language.',
      ourStory: 'My Story',
      story: [
        "Hello, I'm Ofer Ben Horin — an educator and interior designer. In my eyes, spaces are not just buildings — they are a language. They can soothe, guide, provoke thought, and allow for presence, movement, and belonging.",
        'Many years of thought and action in the educational field led me to understand how spatial design affects human relationships, learning, and the sense of security.',
        'In recent years, I have been translating this thinking into the world of design — with the goal of creating educational and residential spaces that allow a person to breathe, grow, and feel at home.',
      ],
      ourPhilosophy: 'My Approach',
      philosophyQuote:
        '"People need a space that listens to them."',
      phil: [
        'My work rests on a living, evolutionary dialogue between two poles: freedom and structure. I see spaces as a field of movement — movements of light, air, perspective. Of human growth.',
        'When a space allows free movement within it, yet also offers a spatial anchor — it transforms from a physical surface into a beneficial existential experience.',
        'This approach enables work in multidisciplinary planning teams, refining educational programs, and translating pedagogical values into concrete design decisions.',
      ],
      whatWeBelieve: 'My Process',
      values: [
        {
          title: 'Inspiration',
          description:
            'Searching for the source of wonder — the spark that guides the entire design journey.',
        },
        {
          title: 'Analysis',
          description:
            'Deep exploration of concepts and ideas — understanding the essence before reaching for the pencil.',
        },
        {
          title: 'Concept',
          description:
            'Forming a concrete project language — the framework that makes everything coherent and meaningful.',
        },
        {
          title: 'Design',
          description:
            'Translating into a spatial toolbox — from planning models to practical, livable spaces.',
        },
      ],
      theTeam: 'The Designer',
      studioPhotoComing: 'Portrait — coming soon',
      team: [
        {
          name: 'Ofer Ben Horin',
          role: 'Interior Designer & Founder',
          bio: 'Interior Designer & Founder. A graduate of Studio 6B with an M.A. in Philosophy from the Hebrew University (With Distinction). My design approach bridges the gap between conceptual thought and physical space, creating environments that are as intellectually resonant as they are functional and precise.',
        },
      ],
    },
    projects: {
      portfolio: 'Portfolio',
      selectedWork: 'Selected Work',
      items: [
        {
          title: 'The Library',
          location: 'Tel Aviv, Israel',
          category: 'Library',
          description:
            'A private reading room designed around silence and the weight of books — shelves as architecture, light as companion.',
        },
        {
          title: 'Master Suite',
          location: 'Tel Aviv, Israel',
          category: 'Master Bedroom',
          description:
            'A bedroom conceived as a sanctuary — every material chosen for how it feels at rest, every proportion calibrated for calm.',
        },
        {
          title: 'The Balcony',
          location: 'Herzliya, Israel',
          category: 'Balcony',
          description:
            'An outdoor living space that blurs the boundary between inside and out, designed for the long Mediterranean evening.',
        },
        {
          title: "Painter's Studio",
          location: 'Jaffa, Israel',
          category: 'Painter Studio',
          description:
            "A working studio for a visual artist — north-facing light, generous walls, and a floor that doesn't mind paint.",
        },
        {
          title: "Child's Room",
          location: 'Ramat Hasharon, Israel',
          category: 'Child Room',
          description:
            'Designed to grow alongside its inhabitant — proportioned for a child today, adaptable for a teenager tomorrow.',
        },
        {
          title: 'Teen Suite',
          location: 'Kfar Shmaryahu, Israel',
          category: 'Teen Age Room',
          description:
            'A room that takes a teenager seriously — their need for identity, for focus, and for a space entirely their own.',
        },
        {
          title: 'The Kitchen',
          location: 'Tel Aviv, Israel',
          category: 'Kitchen',
          description:
            'A kitchen designed for living — open, generous, and warm, where cooking becomes part of the social rhythm of home.',
        },
        {
          title: 'Living Room',
          location: 'Haifa, Israel',
          category: 'Living Room',
          description:
            'An open-plan living and kitchen space designed around daily life — warm materials, layered textures, and generous natural light.',
        },
        {
          title: 'Rooftop Terrace',
          location: 'Tel Aviv, Israel',
          category: 'Outdoor',
          description:
            'A rooftop terrace conceived as an outdoor room — rattan furniture, driftwood tones, and a view that changes with the light.',
        },
        {
          title: 'Master Bedroom Suite',
          location: 'Tel Aviv, Israel',
          category: 'Bedroom',
          description:
            'A serene master bedroom with bold storage — deep grey wardrobes, low platform bed, and light that falls just right.',
        },
        {
          title: 'Library Lounge',
          location: 'Herzliya, Israel',
          category: 'Living Room',
          description:
            'A living space built around books and ideas — open shelving, a suspended fireplace, and chairs that invite you to stay.',
        },
        {
          title: 'The Staircase',
          location: 'Jaffa, Israel',
          category: 'Hallway',
          description:
            'A staircase designed as sculpture — reclaimed wood treads, wire balustrade, and art that speaks from the walls.',
        },
        {
          title: 'The Dining Room',
          location: 'Jaffa, Israel',
          category: 'Dining Room',
          description:
            'A dining room conceived for gathering — a long oak table beneath pendant lights, where meals become occasions.',
        },
        {
          title: "Girl's Room",
          location: 'Ramat Gan, Israel',
          category: "Children's Room",
          description:
            'A room built for dreaming — soft pinks, patterned walls, and a rainbow that watches over sleep.',
        },
        {
          title: 'The Study Nook',
          location: 'Netanya, Israel',
          category: 'Study',
          description:
            'A study room with an arched window seat — built for focus, comfort, and the occasional long afternoon.',
        },
        {
          title: 'The Dark Kitchen',
          location: 'Jerusalem, Israel',
          category: 'Kitchen',
          description:
            'A kitchen in dark oak and aged metal — bold, considered, and built to be used.',
        },
        {
          title: 'The Gallery',
          location: 'Tel Aviv, Israel',
          category: 'Commercial',
          description:
            'A cultural space designed for art and encounter — bold arches, saturated colour, and rooms that ask to be explored.',
        },
        {
          title: 'The Art Room',
          location: 'Haifa, Israel',
          category: 'Studio',
          description:
            'A creative studio designed for making — natural light, clean surfaces, and a wall that welcomes colour.',
        },
        {
          title: 'The Music Room',
          location: 'Tel Aviv, Israel',
          category: 'Music Room',
          description:
            'A room built around a piano — warm timber, arched light, and a space that understands the need for silence between notes.',
        },
        {
          title: 'Desert Lounge',
          location: 'The Negev, Israel',
          category: 'Lounge',
          description:
            'An arched lounge that opens to the desert — white stone, soft furnishings, and the particular stillness of a hot afternoon.',
        },
      ],
    },
    contact: {
      getInTouch: 'Get In Touch',
      headline: "Let's Start a Conversation... :)",
      formName: 'Your Name',
      formNamePlaceholder: 'Full name',
      formEmail: 'Email Address',
      formEmailPlaceholder: 'your@email.com',
      formPhone: 'Phone Number',
      formPhonePlaceholder: '050-0000000',
      formProjectType: 'Project Type',
      formSelectOne: 'Select one',
      formResidential: 'Residential',
      formCommercial: 'Commercial',
      formHospitality: 'Hospitality',
      formOther: 'Other',
      formMessage: 'Tell Me About Your Project',
      formMessagePlaceholder: 'Describe your vision, timeline, and any relevant details...',
      formSubmit: 'Send Enquiry',
      studioLabel: 'Studio',
      studioAddress: 'Wadi Salib, Haifa, Israel',
      contactLabel: 'Contact',
      email: 'oferbh4@gmail.com',
      phone: '+972 54 904 4435',
      hoursLabel: 'Hours',
      hoursWeekdays: 'Sunday – Thursday: 09:00 – 22:00',
      hoursNote: 'By appointment only',
      followLabel: 'Follow',
    },
  },

  he: {
    nav: {
      work: 'עבודות',
      studio: 'הסטודיו',
      contact: 'צור קשר',
    },
    footer: {
      locations: 'חיפה, ישראל',
    },
    home: {
      heroLabel: 'סטודיו לעיצוב פנים',
      heroHeadline1: 'כשחלל',
      heroHeadline2: 'מקשיב.',
      heroDesc:
        'איש חינוך ומעצב פנים. יוצר מרחבים שנושמים — סביבות מעוצבות מתוך קשר אנושי, תנועה ותחושת שייכות.',
      viewWork: 'צפו בעבודות',
      startProject: 'התחל פרויקט',
      selectedWork: 'עבודות נבחרות',
      allProjects: '← כל הפרויקטים',
      philosophy: 'הפילוסופיה שלי',
      philosophyQuote:
        '"אנשים זקוקים למרחב שמקשיב להם"',
      aboutStudio: 'אודות הסטודיו',
      ctaHeadline: 'בואו ניצור משהו',
      ctaHeadline2: 'שיעמוד במבחן הזמן.',
      ctaDesc:
        'אני עובד עם מספר מצומצם של לקוחות בכל שנה כדי להבטיח שכל פרויקט יקבל את מלוא תשומת הלב שלו.',
      ctaButton: 'פתחו בשיחה',
      featuredProjects: [
        { title: 'הבית הדיאלקטי', location: 'ישראל', category: 'מגורים' },
        { title: 'סלון אקלקטי', location: 'חיפה, ישראל', category: 'מגורים' },
        { title: 'בית לגיל השלישי', location: 'תל אביב, ישראל', category: 'מגורים' },
      ],
    },
    about: {
      theStudio: 'קצת עליי',
      headline: 'מרחבים אינם רק מבנים — הם שפה.',
      ourStory: 'הסיפור שלי',
      story: [
        'שלום, אני עופר בן חורין — איש חינוך ומעצב פנים. בעיניי מרחבים אינם רק מבנים — הם שפה. הם יכולים להרגיע, להכווין, לעורר מחשבה ולאפשר נוכחות, תנועה ושייכות.',
        'השנים הרבות של מחשבה ופעולה בשדה החינוכי הובילו אותי להבין כיצד תכנון מרחבי משפיע על יחסים אנושיים, למידה ותחושת ביטחון.',
        'בשנים האחרונות אני מתרגם חשיבה זו לעולם העיצוב – מתוך מטרה ליצור מרחבים חינוכיים וביתיים שמאפשרים לאדם לנשום, לצמוח ולהרגיש בבית.',
      ],
      ourPhilosophy: 'הגישה שלי',
      philosophyQuote:
        '"אנשים זקוקים למרחב שמקשיב להם"',
      phil: [
        'העבודה שלי נשענת על דיאלוג חי ואבולוציוני בין שני קטבים: חופש ומסגרת. אני רואה חללים כמרחב של תנועות — תנועות של אור, של אוויר, של פרספקטיבה. של צמיחה אנושית.',
        'כשהמרחב מאפשר לנוע בו בחופש, אך גם למצוא בו עוגן חללי — הוא הופך משטח פיזי לחוויה קיומית מיטיבה.',
        'גישה זו מאפשרת לי עבודה בצוותי תכנון רב-תחומיים, חידוד פרוגרמות חינוכיות ותרגום ערכים פדגוגיים להחלטות תכנוניות קונקרטיות.',
      ],
      whatWeBelieve: 'תהליך העבודה',
      values: [
        {
          title: 'חיפוש השראה',
          description:
            'חיפוש אחר מקור השראה — הניצוץ שמנחה את כל מסע העיצוב.',
        },
        {
          title: 'ניתוח מהות',
          description:
            'ניתוח מעמיק של תפיסות ומושגים — הבנת הפלח לפני שנוגעים בעפרון.',
        },
        {
          title: 'גיבוש קונספט',
          description:
            'גיבוש קונספט ושפה פרויקטאלית קונקרטית — המסגרת שמאחדת את הכול.',
        },
        {
          title: 'תרגום לעיצוב',
          description:
            'תרגום לארגז כלים עיצובי — מתכנון מודלים ופרקטיקות ועד חלל חי ונושם.',
        },
      ],
      theTeam: 'המעצב',
      studioPhotoComing: 'תצלום — בקרוב',
      team: [
        {
          name: 'עופר בן חורין',
          role: 'מעצב פנים ומייסד',
          bio: 'מעצב פנים ומייסד הסטודיו. בוגר סטודיו B6 ובעל תואר שני בפילוסופיה מהאוניברסיטה העברית (בהצטיינות). הגישה העיצובית שלי משלבת בין עולמות התוכן והרוח לבין תכנון פונקציונלי ומדויק, מתוך הבנה עמוקה של השפעת המרחב על החוויה האנושית.',
        },
      ],
    },
    projects: {
      portfolio: 'תיק עבודות',
      selectedWork: 'עבודות נבחרות',
      items: [
        {
          title: 'הספרייה',
          location: 'תל אביב, ישראל',
          category: 'ספרייה',
          description:
            'חדר קריאה פרטי המעוצב סביב שקט ומשקל הספרים — מדפים כארכיטקטורה, אור כמלווה.',
        },
        {
          title: 'חדר שינה ראשי',
          location: 'תל אביב, ישראל',
          category: 'חדר שינה ראשי',
          description:
            'חדר שינה שנתפס כמקלט — כל חומר נבחר לפי תחושתו במנוחה, כל פרופורציה מכוילת לשלווה.',
        },
        {
          title: 'המרפסת',
          location: 'הרצליה, ישראל',
          category: 'מרפסת',
          description:
            'מרחב מגורים חיצוני המטשטש את הגבול בין פנים לחוץ, מעוצב לערב הים תיכוני הארוך.',
        },
        {
          title: 'סטודיו הציירת',
          location: 'יפו, ישראל',
          category: 'סטודיו ציור',
          description:
            'סטודיו עבודה לאמנית חזותית — אור מצפון, קירות נדיבים, ורצפה שאינה מתנגדת לצבע.',
        },
        {
          title: 'חדר ילדים',
          location: 'רמת השרון, ישראל',
          category: 'חדר ילדים',
          description:
            'מעוצב לגדול לצד הדייר שלו — מפורפורציה לילד היום, ניתן להתאמה לנער מחר.',
        },
        {
          title: 'חדר נוער',
          location: 'כפר שמריהו, ישראל',
          category: 'חדר נוער',
          description:
            'חדר שלוקח מתבגר ברצינות — את הצורך שלו בזהות, בריכוז, ובמרחב שהוא לגמרי שלו.',
        },
        {
          title: 'המטבח',
          location: 'תל אביב, ישראל',
          category: 'מטבח',
          description:
            'מטבח המעוצב לחיים — פתוח, נדיב וחמים, שבו הבישול הופך לחלק מהקצב החברתי של הבית.',
        },
        {
          title: 'סלון מגורים',
          location: 'חיפה, ישראל',
          category: 'סלון',
          description:
            'מרחב מגורים ומטבח פתוח המעוצב סביב החיים היומיומיים — חומרים חמים, מרקמים שכבתיים ואור טבעי נדיב.',
        },
        {
          title: 'מרפסת גג',
          location: 'תל אביב, ישראל',
          category: 'חיצוני',
          description:
            'מרפסת גג שנתפסת כחדר חיצוני — ריהוט ראטאן, גוונים עציים ונוף המשתנה עם האור.',
        },
        {
          title: 'חדר שינה ראשי',
          location: 'תל אביב, ישראל',
          category: 'חדר שינה',
          description:
            'חדר שינה שקט עם אחסון נועז — ארונות אפור עמוק, מיטת פלטפורמה נמוכה ואור שנופל בדיוק הנכון.',
        },
        {
          title: 'פינת ספרים',
          location: 'הרצליה, ישראל',
          category: 'סלון',
          description:
            'מרחב מגורים הבנוי סביב ספרים ורעיונות — מדפים פתוחים, אח תלוי וכיסאות שמזמינים להישאר.',
        },
        {
          title: 'המדרגות',
          location: 'יפו, ישראל',
          category: 'מסדרון',
          description:
            'מדרגות שעוצבו כפסל — שלבי עץ ממוחזר, מעקה חוטים ואמנות המדברת מהקירות.',
        },
        {
          title: 'חדר האוכל',
          location: 'יפו, ישראל',
          category: 'חדר אוכל',
          description:
            'חדר אוכל שנוצר לכינוסים — שולחן אלון ארוך תחת מנורות תלויות, שבו ארוחות הופכות לאירועים.',
        },
        {
          title: 'חדר ילדה',
          location: 'רמת גן, ישראל',
          category: 'חדר ילדים',
          description:
            'חדר הבנוי לחלום — ורוד רך, קירות מעוצבים וקשת בענן שמשגיחה על השינה.',
        },
        {
          title: 'פינת הלימוד',
          location: 'נתניה, ישראל',
          category: 'חדר עבודה',
          description:
            'חדר עבודה עם פינת ישיבה בחלון קשתי — בנוי לריכוז, נוחות ואחר הצהריים הארוך.',
        },
        {
          title: 'המטבח הכהה',
          location: 'ירושלים, ישראל',
          category: 'מטבח',
          description:
            'מטבח באלון כהה ומתכת מיושנת — נועז, מחושב ובנוי לשימוש.',
        },
        {
          title: 'הגלריה',
          location: 'תל אביב, ישראל',
          category: 'מסחרי',
          description:
            'מרחב תרבות שעוצב לאמנות ופגישה — קשתות נועזות, צבע רווי וחדרים שמבקשים לחקור.',
        },
        {
          title: 'חדר האמנות',
          location: 'חיפה, ישראל',
          category: 'סטודיו',
          description:
            'סטודיו יצירתי שעוצב לעשייה — אור טבעי, משטחים נקיים וקיר שמברך את הצבע.',
        },
        {
          title: 'חדר המוזיקה',
          location: 'תל אביב, ישראל',
          category: 'חדר מוזיקה',
          description:
            'חדר שנבנה סביב פסנתר — עץ חמים, אור קשתי ומרחב שמבין את הצורך בשקט שבין תווים.',
        },
        {
          title: 'הלאונג׳ המדברי',
          location: 'הנגב, ישראל',
          category: 'לאונג׳',
          description:
            'לאונג׳ קשתי הנפתח למדבר — אבן לבנה, ריהוט רך והשקט המיוחד של צהריים חמים.',
        },
      ],
    },
    contact: {
      getInTouch: 'צרו קשר',
      headline: 'בואו נתחיל לדבר... \u200F:)',
      formName: 'שמך המלא',
      formNamePlaceholder: 'שם מלא',
      formEmail: 'כתובת מייל',
      formEmailPlaceholder: 'your@email.com',
      formPhone: 'מספר טלפון',
      formPhonePlaceholder: '050-0000000',
      formProjectType: 'סוג הפרויקט',
      formSelectOne: 'בחרו',
      formResidential: 'מגורים',
      formCommercial: 'מסחרי',
      formHospitality: 'אירוח',
      formOther: 'אחר',
      formMessage: 'ספר לי קצת על הפרויקט שלך',
      formMessagePlaceholder: 'תארו את החזון שלכם, לוח הזמנים, ופרטים רלוונטיים...',
      formSubmit: 'שלח פנייה',
      studioLabel: 'סטודיו',
      studioAddress: 'ואדי סאליב, חיפה, ישראל',
      contactLabel: 'יצירת קשר',
      email: 'oferbh4@gmail.com',
      phone: '+972 54 904 4435',
      hoursLabel: 'שעות פעילות',
      hoursWeekdays: 'ראשון – חמישי: 09:00 – 22:00',
      hoursNote: 'בתיאום מראש בלבד',
      followLabel: 'עקבו אחרי',
    },
  },
};
