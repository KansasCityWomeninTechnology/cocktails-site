export interface Topic {
    name: string;
    slidesLink: string;
    worksheetLink: string;
    areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [{
    name: 'The Glass: HTML',
    slidesLink: 'http://bit.ly/CnCJunSlides',
    worksheetLink: 'http://bit.ly/cnchtmlwork',
    areLinksEnabled: false
}, {
    name: 'The Garnish: CSS',
    slidesLink: 'http://bit.ly/CnCJulSlides',
    worksheetLink: 'http://bit.ly/cnccsswork',
    areLinksEnabled: false
}, {
    name: 'The Rocks: Git',
    slidesLink: 'http://bit.ly/CnCAugSlides',
    worksheetLink: 'http://bit.ly/cncgitwork',
    areLinksEnabled: false
}, {
    name: 'The Liquor: JavaScript',
    slidesLink: 'http://bit.ly/CnCSepSlides',
    worksheetLink: 'http://bit.ly/cncjavascriptwork',
    areLinksEnabled: false
}, {
    name: 'The Mixer: Interactive',
    slidesLink: 'http://bit.ly/CnCOctSlides',
    worksheetLink: 'http://bit.ly/cncinteractivework',
    areLinksEnabled: false
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
    date: '2019-01-12',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-50015334211?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=50015334211&ref=ccweb'

}, {
    date: '2019-02-09',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-garnish-intro-to-css-tickets-52996000464?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996000464&ref=ccweb'
}, {
    date: '2019-03-09',
    time: '5-9pm',
    name: 'The Rocks: Introduction to Command Line And Version Control',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-rocks-command-line-version-control-tickets-52996467862?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996467862&ref=ccweb'
}, {
    date: '2019-04-13',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-liquor-intro-to-javascript-tickets-52996432757?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996432757&ref=ccweb'
}, {
    date: '2019-05-11',
    time: '5-9pm',
    name: 'The Mixer: Interactive JavaScript',
    eventbriteLink:
        'https://www.eventbrite.com/e/coding-cocktails-the-mixer-interactive-javascript-tickets-52996721621?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996721621&ref=ccweb'
}, {
    date: '2019-06-08',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''

}, {
    date: '2019-07-13',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2019-08-10',
    time: '5-9pm',
    name: 'The Rocks: Introduction to Command Line And Version Control',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2019-09-14',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2019-10-12',
    time: '5-9pm',
    name: 'The Mixer: Interactive JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}, {
    date: '2019-11-09',
    time: '4-9pm',
    name: 'Enjoy! CodeJam Micro-Hackathon',
    eventbriteLink: 'https://www.eventbrite.com/o/coding-amp-cocktails-kansas-city-8343130945',
    eventbriteIFrameLink: ''
}];

export const UPCOMING_SESSION_MONTH = 1; // Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
