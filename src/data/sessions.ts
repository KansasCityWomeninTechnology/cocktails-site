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
    areLinksEnabled: true
}, {
    name: 'The Rocks: Git',
    slidesLink: 'http://bit.ly/cncgitslides',
    worksheetLink: 'http://bit.ly/cncgitwork',
    areLinksEnabled: true
}, {
    name: 'The Liquor: JavaScript',
    slidesLink: 'http://bit.ly/cncjavascriptslides',
    worksheetLink: 'http://bit.ly/cncjavascriptwork',
    areLinksEnabled: true
}, {
    name: 'The Mixer: Interactive',
    slidesLink: 'http://bit.ly/cncinteractiveslides',
    worksheetLink: 'http://bit.ly/cncinteractivework',
    areLinksEnabled: true
}, {
    name: 'Enjoy! CodeJam',
    slidesLink: 'http://bit.ly/CnCNovSlides',
    worksheetLink: 'http://bit.ly/cncenjoywork', // not created yet. need to figure out name
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
    date: '2020-01-11',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-85367579729?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=85367579729&ref=ccweb'
}, {
    date: '2020-02-08',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-03-14',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-04-11',
    time: '5-9pm',
    name: 'Enjoy: CodeJam',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-05-09',
    time: '5-9pm',
    name: 'The Bartender: APIs',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-07-11',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-08-08',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-09-12',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-10-10',
    time: '5-9pm',
    name: 'The Bartender: APIs',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}, {
    date: '2020-11-14',
    time: '5-9pm',
    name: 'Enjoy: CodeJam',
    eventbriteLink: '',
    eventbriteIFrameLink: ''
}];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
export const UPCOMING_SESSION_MONTH = 1;
