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
    date: '2020-03-14',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-garnish-introduction-to-css-tickets-88430065707?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=88430065707&ref=ccweb'
}, {
    date: '2020-04-11',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-liquor-introduction-to-javascript-tickets-88430220169?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=88430220169&ref=ccweb'
}, {
    date: '2020-05-09',
    time: '5-9pm',
    name: 'Enjoy: CodeJam',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2020-06-13',
    time: '5-9pm',
    name: 'The Bartender: APIs',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2020-07-11',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2020-08-08',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2020-09-12',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2020-10-10',
    time: '5-9pm',
    name: 'The Bartender: APIs',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2020-11-14',
    time: '5-9pm',
    name: 'Enjoy: CodeJam',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
export const UPCOMING_SESSION_MONTH = 1;
