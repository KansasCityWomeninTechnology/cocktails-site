export interface Topic {
    name: string;
    slidesLink: string;
    worksheetLink: string;
    areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [{
    name: 'Angular Pt. 1: SPA Day (Intro to Single Page Applications)',
    slidesLink: 'http://codingandcocktails.herokuapp.com/angular-series/01/single-page-apps.html#/',
    worksheetLink: 'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/spa/1scaffold/',
    areLinksEnabled: true
}, {
    name: 'Angular Pt. 2: Playing with Blocks (Angular Components)',
    slidesLink: 'http://codingandcocktails.herokuapp.com/angular-series/02/building-blocks.html#/',
    worksheetLink: 'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/spa/2component/',
    areLinksEnabled: true
}, {
    name: 'Angular Pt. 3: Fake It ’Til You Make It (Data Binding & DOM Manipulation)',
    slidesLink: 'http://codingandcocktails.herokuapp.com/angular-series/03/fake-it.html#/',
    worksheetLink: 'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/spa/3data/',
    areLinksEnabled: true
}, {
    name: 'Angular Pt. 4: Go Fetch (APIs)',
    slidesLink: 'http://bit.ly/cnccssslides',
    worksheetLink: 'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/spa/4service/',
    areLinksEnabled: false
}];

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
    time: '7-9pm',
    name: 'Coding & Cocktails: Angular Pt. 1: SPA Day (Intro to Single Page Applications)',
    eventbriteLink: 'https://www.eventbrite.com/e/angular-pt-1-spa-day-intro-to-single-page-applications-tickets-142440253633',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=142440253633&ref=ccweb'
}, {
    date: '2021-04-10',
    time: '7-9pm',
    name: 'Coding & Cocktails: Angular Pt. 2: Playing with Blocks (Angular Components)',
    eventbriteLink: 'https://www.eventbrite.com/e/angular-pt-2-playing-with-blocks-angular-components-tickets-142441220525?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=142441220525&ref=ccweb'
}, {
    date: '2021-05-08',
    time: '7-9pm',
    name: 'Coding & Cocktails: Angular Pt. 3: Fake It ’Til You Make It (Data Binding & DOM Manipulation)',
    eventbriteLink: 'https://www.eventbrite.com/e/angular-pt-3-fake-it-til-you-make-it-data-binding-dom-manipulation-tickets-142441423131?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=142441423131&ref=ccweb'
}, {
    date: '2021-06-12',
    time: '7-9pm',
    name: 'Coding & Cocktails: Angular Pt. 4: Go Fetch (APIs)',
    eventbriteLink: 'https://www.eventbrite.com/e/angular-pt-4-go-fetch-apis-tickets-142441537473?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=142441537473&ref=ccweb'
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
export const UPCOMING_SESSION_MONTH = 5;
