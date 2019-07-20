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
    date: '2019-07-13',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-50015334211?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=50015334211&ref=ccweb'

}, {
    date: '2019-03-09',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-garnish-intro-to-css-tickets-52996000464?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996000464&ref=ccweb'
}, {
    date: '2019-04-13',
    time: '5-9pm',
    name: 'The Rocks: Introduction to Command Line And Version Control',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-rocks-command-line-version-control-tickets-52996467862?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996467862&ref=ccweb'
}, {
    date: '2019-05-11',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-liquor-intro-to-javascript-tickets-52996432757?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996432757&ref=ccweb'
}, {
    date: '2019-06-08',
    time: '5-9pm',
    name: 'The Mixer: Interactive JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-mixer-interactive-javascript-tickets-52996721621?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=52996721621&ref=ccweb'
}, {
    date: '2019-07-13',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-60372915014',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=60372915014&ref=ccweb'

}, {
    date: '2019-08-10',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-garnish-intro-to-css-tickets-61929350354',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=61929350354&ref=ccweb'
}, {
    date: '2019-09-14',
    time: '5-9pm',
    name: 'The Rocks: Introduction to Command Line And Version Control',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-rocks-command-line-version-control-tickets-63515374194',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=63515374194&ref=ccweb'
}, {
    date: '2019-10-12',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-the-liquor-intro-to-javascript-tickets-66069376283',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=66069376283&ref=ccweb'
}, {
    date: '2019-11-09',
    time: '5-9pm',
    name: 'The Mixer: Interactive JavaScript',
    eventbriteLink: 'http://codingandcocktailskc.eventbrite.com',
    eventbriteIFrameLink: ''
}];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
// N.B. The -1 is due to the schedule shift in 2019 and needs to be removed in 2020.
export const UPCOMING_SESSION_MONTH = 8 - 1;
