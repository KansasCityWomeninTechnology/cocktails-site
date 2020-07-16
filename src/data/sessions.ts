export interface Topic {
    name: string;
    slidesLink: string;
    worksheetLink: string;
    areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [{
    name: 'The Glass: HTML',
    slidesLink: 'http://bit.ly/cnchtmlslide',
    worksheetLink: 'http://bit.ly/cnchtmlwork',
    areLinksEnabled: true
}, {
    name: 'The Garnish: CSS',
    slidesLink: 'http://bit.ly/cnccssslides',
    worksheetLink: 'http://bit.ly/cnccsswork',
    areLinksEnabled: false
}, {
    name: 'The Liquor: JavaScript',
    slidesLink: 'http://bit.ly/cncjavascriptslides',
    worksheetLink: 'http://bit.ly/cncjavascriptwork',
    areLinksEnabled: false
}, {
    name: 'Enjoy! CodeJam',
    slidesLink: 'http://bit.ly/CnCNovSlides',
    worksheetLink: 'http://bit.ly/cncenjoywork', // not created yet. jam work?? need to figure out name
    areLinksEnabled: false
}, {
  name: 'The Bartender: APIs',
  slidesLink: 'http://bit.ly/CnCSepSlides',
  worksheetLink: 'http://bit.ly/cncapiwork', // not created yet
  areLinksEnabled: false
}
];

export interface Session {
    date: string;
    time: string;
    name: string;
    eventbriteLink: string;
    eventbriteIFrameLink: string;
}

export const SESSIONS: Session[] = [{
    date: '2020-02-08',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-85367579729?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=85367579729&ref=ccweb'
}, {
    date: '2020-06-27',
    time: '6-6:40pm',
    name: 'Coding & Cocktails: Hangout - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-hangout-sesh-tickets-110403716488?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=110403716488&ref=ccweb'
}, {
    date: '2020-07-18',
    time: '6-7pm',
    name: 'Coding & Cocktails: Mixer - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-mixer-tickets-113578530442?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=113578530442&ref=ccweb'
}];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
// for 2020 just put the index of the item in the session array + 1. 2020 is special.
export const UPCOMING_SESSION_MONTH = 3;
