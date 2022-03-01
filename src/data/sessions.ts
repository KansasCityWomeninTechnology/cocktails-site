export interface Topic {
  name: string;
  slidesLink: string;
  worksheetLink: string;
  areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [
  {
    name: 'Intro to HTML',
    slidesLink: '',
    worksheetLink:
      'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
    areLinksEnabled: false,
  },
];

export interface Session {
  date: string;
  time: string;
  name: string;
  eventbriteLink: string;
  eventbriteIFrameLink: string;
}

export const SESSIONS: Session[] = [
  {
    date: '2022-03-12',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Glass | Front-end Architecture & HTML - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-278402879507?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=278402879507&ref=ccweb',
  },
];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
// the minus one is because we skipped July
export const UPCOMING_SESSION_MONTH = 2;
