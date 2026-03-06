const enc = (name: string) => `/images/${encodeURIComponent(name)}`;

export interface ProjectData {
  id: string;
  year: string;
  hero: string;
  gallery: string[];
  title:       { en: string; he: string };
  location:    { en: string; he: string };
  category:    { en: string; he: string };
  description: { en: string; he: string };
}

export const projectsData: ProjectData[] = [
  {
    id: '1',
    year: '2024',
    hero: enc('libarary.png'),
    gallery: [
      enc('ספריה 2.png'),
      enc('living room.jpg'),
      enc('light.jpg'),
    ],
    title:    { en: 'The Library',    he: 'הספרייה' },
    location: { en: 'Tel Aviv, Israel', he: 'תל אביב, ישראל' },
    category: { en: 'Residential',   he: 'מגורים' },
    description: {
      en: 'A private reading room designed around silence and the weight of books — shelves as architecture, light as companion. Every surface chosen for stillness; every dimension calibrated for the kind of concentration that only comes when a room earns your trust.',
      he: 'חדר קריאה פרטי המעוצב סביב שקט ומשקל הספרים — מדפים כארכיטקטורה, אור כמלווה. כל משטח נבחר לשקט; כל ממד מכוייל לסוג הריכוז שמגיע רק כשחדר זוכה באמון שלך.',
    },
  },
  {
    id: '2',
    year: '2024',
    hero: enc('master bed room.png'),
    gallery: [
      enc('חדר הורים 2.png'),
      enc('חדר הורים 3.png'),
      enc('חדר הורים 5.png'),
    ],
    title:    { en: 'Master Suite',   he: 'חדר שינה ראשי' },
    location: { en: 'Tel Aviv, Israel', he: 'תל אביב, ישראל' },
    category: { en: 'Residential',   he: 'מגורים' },
    description: {
      en: 'A bedroom conceived as a sanctuary — every material chosen for how it feels at rest, every proportion calibrated for calm. The palette withdraws; the light leads. A room that asks nothing of you.',
      he: 'חדר שינה שנתפס כמקלט — כל חומר נבחר לפי תחושתו במנוחה, כל פרופורציה מכוילת לשלווה. הפלטה נסוגה; האור מוביל. חדר שאינו דורש ממך דבר.',
    },
  },
  {
    id: '3',
    year: '2023',
    hero: enc('balcony.png'),
    gallery: [
      enc('outdoor .jpg'),
      enc('פינת אוכל ממטבח.png'),
    ],
    title:    { en: 'The Balcony',   he: 'המרפסת' },
    location: { en: 'Herzliya, Israel', he: 'הרצליה, ישראל' },
    category: { en: 'Residential',  he: 'מגורים' },
    description: {
      en: 'An outdoor living space that dissolves the boundary between inside and out — designed for the long Mediterranean evening, the unhurried meal, the quiet hour before the sun is gone.',
      he: 'מרחב מגורים חיצוני שמוחה את הגבול בין פנים לחוץ — מעוצב לערב הים תיכוני הארוך, לארוחה בלתי ממוהרת, לשעה השקטה לפני שהשמש נעלמת.',
    },
  },
];

export function getProject(id: string): ProjectData | undefined {
  return projectsData.find(p => p.id === id);
}
