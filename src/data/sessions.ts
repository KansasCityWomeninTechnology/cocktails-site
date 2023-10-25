export interface Topic {
  name: string;
  slidesLink: string;
  worksheetLink: string;
  areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [
//   {
//     name: 'Intro to HTML',
//     slidesLink:
//       'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/01-glasswork/2023-front-end-html.html#/',
//     worksheetLink:
//       'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
//     areLinksEnabled: true,
//   },
  // {
  //   name: 'CSS Basics',
  //   slidesLink:
  //     'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/css-series/2023-css.html#/',
  //   worksheetLink:
  //     'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
  //   areLinksEnabled: true,
  // },
  {
    name: 'Intro to JavaScript',
    slidesLink:
      'http://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/03-liquor/javascript.html#/',
    worksheetLink: 'https://bit.ly/js-worksheet',
    areLinksEnabled: true,
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
    date: '2023-01-14',
    time: '7-9pm',
    name: 'Coding & Cocktails: Next Level GitHub Profiles - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-next-level-github-profiles-tickets-236232948107?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=236232948107&ref=ccweb',
  },
  {
    date: '2023-02-11',
    time: '4-8pm',
    name: 'Coding & Cocktails: The Glass | Front-end Architecture & HTML',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-glass-html-and-front-end-architecture-tickets-515847773577',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=515847773577&ref=ccweb',
  },
  {
    date: '2023-03-11',
    time: '4-8pm',
    name: 'Coding & Cocktails: The Garnish | Introduction to CSS',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-garnish-introduction-to-css-tickets-546220960597',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=546220960597&ref=ccweb',
  },
  {
    date: '2023-04-08',
    time: '4-8pm',
    name: 'Coding & Cocktails: The Liquor | Introduction to Javascript',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-liquor-intro-to-javascript-tickets-583928865957',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=583928865957&ref=ccweb',
  },
  {
    date: '2023-06-17',
    time: '4-8pm',
    name: 'Coding & Cocktails:  The Glass | Front-end Architecture & HTML',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-glass-html-and-front-end-architecture-tickets-632990831617',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=632990831617&ref=ccweb',
  },
  {
    date: '2023-07-08',
    time: '4-8pm',
    name: 'Coding & Cocktails:  The Garnish | Intro to CSS',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-garnish-introduction-to-css-tickets-632996719227',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=632996719227&ref=ccweb',
  },
  {
    date: '2023-08-12',
    time: '4-8pm',
    name: 'Coding & Cocktails:  The Liquor | Intro to Javascript',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-liquor-intro-to-javascript-tickets-633003308937',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=633003308937&ref=ccweb',
  },
  {
    date: '2023-09-09',
    time: '7-9pm',
    name: 'Coding & Cocktails:  Next Level Github Profiles',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-next-level-github-profiles-tickets-706729626337?aff=oddtdtcreator',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=706729626337&ref=ccweb',
  },
  {
    date: '2023-10-14',
    time: '4-8pm',
    name: 'Coding & Cocktails:  Hacktoberfest',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-hacktoberfest-tickets-727863307747',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=727863307747&ref=ccweb',
  },
  {
    date: '2023-11-11',
    time: '4-8pm',
    name: 'Coding & Cocktails:  Level Up Your GitHub Profile through GitHub Actions',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-level-up-your-github-profile-through-github-actions-tickets-745445426337',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=745445426337&ref=ccweb',
  },
];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
// the -1 is because we skipped May. Remove in 2024
export const UPCOMING_SESSION_MONTH = 11 - 1;
