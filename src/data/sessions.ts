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
    date: '2021-01-09',
    time: '6-7:30pm',
    name: 'Coding & Cocktails: Ask a Developer Anything - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-ask-a-developer-anything-tickets-134052932931?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=134052932931&ref=ccweb'
}, {
    date: '2021-02-13',
    time: '6-7:30pm',
    name: 'Coding & Cocktails: Scrum Methodologies - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-agile-methodologies-tickets-138146787761?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=138146787761&ref=ccweb'
}, {
    date: '2021-03-13',
    time: '6-7:30pm',
    name: 'Coding & Cocktails: TBD - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2021-04-10',
    time: '6-7:30pm',
    name: 'Coding & Cocktails: TBD - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2021-05-08',
    time: '6-7:30pm',
    name: 'Coding & Cocktails: TBD - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2021-06-12',
    time: '6-7:30pm',
    name: 'Coding & Cocktails: TBD - ONLINE EVENT',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2021-07-10',
    time: '6:00-7:30:pm',
    name: 'Coding & Cocktails: TBD',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2021-08-14',
    time: '6:00-7:30pm',
    name: 'Coding & Cocktails: TBD',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2020-09-11',
    time: '6:00-7:30pm',
    name: 'Coding & Cocktails: TBD',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2021-10-09',
    time: '6:00-7:30pm',
    name: 'Coding & Cocktails: TBD',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-debugging-troubleshooting-tickets-126355154669?aff=ccweb',
    eventbriteIFrameLink: ''
}, {
    date: '2021-11-13',
    time: '6:00-7:30pm',
    name: 'Coding & Cocktails: TBD',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-debugging-troubleshooting-tickets-126355154669?aff=ccweb',
    eventbriteIFrameLink: ''
}];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
export const UPCOMING_SESSION_MONTH = 2;
