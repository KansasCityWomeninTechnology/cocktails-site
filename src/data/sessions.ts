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
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-html-tickets-39425679268?aff=ccweb',
    eventbriteIFrameLink: ''

}, {
    date: '2019-02-09',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-css-tickets-39470123201?aff=ccweb',
    eventbriteIFrameLink: ''
}, {
    date: '2019-03-09',
    time: '5-9pm',
    name: 'The Rocks: Introduction to Command Line And Version Control',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-command-line-tickets-39470265627?aff=ccweb',
    eventbriteIFrameLink: ''
}, {
    date: '2019-04-13',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-version-control-tickets-42787776391?aff=ccweb',
    eventbriteIFrameLink: ''
}, {
    date: '2019-05-11',
    time: '5-9pm',
    name: 'The Mixer: Interactive JavaScript',
    eventbriteLink:
        'https://www.eventbrite.com/e/coding-cocktails-introduction-to-front-end-architecture-tickets-44043474217?aff=ccweb',
    eventbriteIFrameLink: ''
}, {
    date: '2019-06-08',
    time: '5-9pm',
    name: 'The Glass: Front-end Architecture And Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-javascript-tickets-44050656700?aff=ccweb',
    eventbriteIFrameLink: ''

}, {
    date: '2019-07-13',
    time: '5-9pm',
    name: 'The Garnish: Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-a-deeper-dive-into-javascript-tickets-46549034415?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46549034415&ref=ccweb'
}, {
    date: '2019-08-10',
    time: '5-9pm',
    name: 'The Rocks: Introduction to Command Line And Version Control',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-package-managers-tickets-46599331856?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46599331856&ref=ccweb'
}, {
    date: '2019-09-14',
    time: '5-9pm',
    name: 'The Liquor: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-server-side-apis-tickets-46600665846?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46600665846&ref=ccweb'
}, {
    date: '2019-10-12',
    time: '5-9pm',
    name: 'The Mixer: Interactive JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-single-page-applications-tickets-48457253951?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=48457253951&ref=ccweb'
}, {
    date: '2019-11-09',
    time: '4-9pm',
    name: 'Enjoy! CodeJam Micro-Hackathon',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-codejam-tickets-49412482064?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=49412482064&ref=ccweb'
}];

export const UPCOMING_SESSION_MONTH = 1; // Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
