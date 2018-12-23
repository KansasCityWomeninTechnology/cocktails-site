export interface Tool {
    name: string;
    url: string;
    img: string;
}

export interface Hero {
    name: string;
    title: string;
    img: string;
    twitter: string;
}

export interface Venue {
    name: string;
    img: string;
    url: string;
    address: string;
    lat: number;
    lng: number;
}

export interface Session {
    date: string;
    time: string;
    sessionName: string;
    topicName: string;
    eventbriteLink: string;
    eventbriteIFrameLink: string;
    areSessionLinksEnabled: boolean;
    slidesLink: string;
    worksheetLink: string;
}

export const TOOLS: Tool[] = [{
    name: 'HTML',
    url: 'https://www.w3.org/html/',
    img: 'assets/images/logos/html5.png'
}, {
    name: 'Github',
    url: 'https://github.com/',
    img: 'assets/images/logos/femalecodertocat.png'
}, {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    img: 'assets/images/logos/js-white.png'
}, {
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    img: 'assets/images/logos/logo-css3.png'
}];


export const VENUE: Venue = {
    name: 'Service Management Group',
    img: 'assets/images/logos/smg.png',
    url: 'https://www.smg.com/',
    address: '1737 McGee St, Kansas City, MO 64108',
    lat: 39.091890,
    lng: -94.579773
};

// If we keep encountering multiple venues, this can be streamlined a bit more
// For now taking the no effort route.
// export const VENUE: Venue = {
//   name: 'The Nerdery',
//   img: 'assets/images/logos/nerdery.png',
//   url: 'http://nerdery.com',
//   address: '100 E 7 St #401, Kansas City, MO 64106',
//   lat: 39.105692,
//   lng: -94.581287
// };


export const LEADERS: Hero[] = [{
    name: 'Jennifer Wadella',
    title: 'Founder',
    img: 'assets/images/mentors/jennifer.png',
    twitter: 'likeOMGitsFEDAY'
}, {
    name: 'Sarah Duitsman',
    title: 'Program Director',
    img: 'assets/images/mentors/sarah.png',
    twitter: 'skduits'
}, {
    name: 'Rachel Hagan',
    title: 'Co Director',
    img: 'assets/images/mentors/rachelh.jpg',
    twitter: 'rhagan21'
}, {
    name: 'Kayla Hennegin',
    title: 'Curriculum Director',
    img: 'assets/images/mentors/kayla.png',
    twitter: 'codecocktailskc'
}, {
    name: 'Gabi Dombrowski',
    title: 'Mentor Director',
    img: 'assets/images/mentors/gabi.jpg',
    twitter: 'gabdom'
}, {
    name: 'Alisa Duncan',
    title: 'Technical Materials Director',
    img: 'assets/images/mentors/alisa.jpg',
    twitter: 'AlisaDuncan'
}, {
    name: 'Melissa Arroyo',
    title: 'Marketing Director',
    img: 'assets/images/mentors/melissa.jpg',
    twitter: 'codecocktailskc'
}, {
    name: 'Kallie Riff',
    title: 'Presentation Director',
    img: 'assets/images/mentors/kallie.jpg',
    twitter: 'KallieRiff'
}];


export const MENTORS: Hero[] = [{
    name: 'Tamara Copple',
    title: 'Mentor',
    img: 'assets/images/mentors/tamara.png',
    twitter: 'Ceiligirl72'
}, {
    name: 'Amy Norris',
    title: 'Mentor',
    img: 'assets/images/mentors/amy.jpg',
    twitter: 'amynorris'
}, {
    name: 'Rachel Hathaway',
    title: 'Mentor',
    img: 'assets/images/mentors/rachel.jpg',
    twitter: 'codecocktailskc'
}, {
    name: 'Muriel Green',
    title: 'Mentor',
    img: 'assets/images/mentors/muriel.jpg',
    twitter: 'murlgreen1'
}, {
    name: 'Annie Chan',
    title: 'Mentor',
    img: 'assets/images/mentors/annie.jpg',
    twitter: 'codecocktailskc'
}, {
    name: 'Heather Pekrul',
    title: 'Mentor',
    img: 'assets/images/mentors/heatherp.jpg',
    twitter: 'heatherpekrul'
}, {
    name: 'Maroua Jawadi',
    title: 'Mentor',
    img: 'assets/images/mentors/maroua.jpg',
    twitter: 'codecocktailskc'
}, {
    name: 'Stephanie Sammons',
    title: 'Mentor',
    img: 'assets/images/mentors/stephanie.jpg',
    twitter: 'codecocktailskc'
}, {
    name: 'Rhia Dixon',
    title: 'Mentor',
    img: 'assets/images/mentors/rhia.jpg',
    twitter: 'TheFakeRiRi'
}, {
    name: 'Stacey Adams',
    title: 'Mentor',
    img: 'assets/images/mentors/stacey.jpg',
    twitter: 'codecocktailskc'
}, {
    name: 'Melanie Garvey',
    title: 'Mentor',
    img: 'assets/images/mentors/mel.jpg',
    twitter: 'MelanieGarvey'
}, {
    name: 'McKenzie Hine',
    title: 'Mentor',
    img: 'assets/images/mentors/mckenzie.jpg',
    twitter: 'mckenz_h'
}, {
    name: 'Jenn Bono',
    title: 'Mentor',
    img: 'assets/images/mentors/jenn.jpg',
    twitter: 'jenn_bono24'
}, {
    name: 'Erin Wilson',
    title: 'Mentor',
    img: 'assets/images/mentors/erin.jpg',
    twitter: 'erin_wilson92'
}, {
    name: 'Gabby Ortman',
    title: 'Mentor',
    img: 'assets/images/mentors/gabby.jpg',
    twitter: 'gabbyortman'
}, {
    name: 'Jessica Kincaid',
    title: 'Mentor',
    img: 'assets/images/mentors/jessica.jpg',
    twitter: 'jessica_k1ncaid'
}, {
    name: 'Gloria Highley',
    title: 'Mentor',
    img: 'assets/images/mentors/gloria.jpg',
    twitter: 'gloriahigley'
}];


export const SESSIONS: Session[] = [{
    date: '2019-01-12',
    time: '5-9pm',
    topicName: 'Front-end Architecture And Introduction to HTML (The Glass)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-html-tickets-39425679268?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'HTML (The Glass)',
    slidesLink: 'http://bit.ly/CnCJanSlides',
    worksheetLink: 'http://bit.ly/cnchtmlwork',
    areSessionLinksEnabled: false

}, {
    date: '2019-02-09',
    time: '5-9pm',
    topicName: 'Introduction to CSS (The Garnish)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-css-tickets-39470123201?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'CSS (The Garnish)',
    slidesLink: 'http://bit.ly/CnCFebSlides',
    worksheetLink: 'http://bit.ly/cnccsswork',
    areSessionLinksEnabled: false
}, {
    date: '2019-03-09',
    time: '5-9pm',
    topicName: 'Introduction to Command Line And Version Control (The Rocks)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-command-line-tickets-39470265627?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'Git (The Rocks)',
    slidesLink: 'http://bit.ly/CnCMarSlides',
    worksheetLink: 'http://bit.ly/cncgitwork',
    areSessionLinksEnabled: false
}, {
    date: '2019-04-13',
    time: '5-9pm',
    topicName: 'Introduction to JavaScript (The Liquor)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-version-control-tickets-42787776391?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'JavaScript (The Liquor)',
    slidesLink: 'http://bit.ly/CnCAprSlides',
    worksheetLink: 'http://bit.ly/cncjavascriptwork',
    areSessionLinksEnabled: false,
}, {
    date: '2019-05-11',
    time: '5-9pm',
    topicName: 'Interactive JavaScript (The Mixer)',
    eventbriteLink:
        'https://www.eventbrite.com/e/coding-cocktails-introduction-to-front-end-architecture-tickets-44043474217?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'Interactive (The Mixer)',
    slidesLink: 'http://bit.ly/CnCMaySlides',
    worksheetLink: 'http://bit.ly/cncinteractivework',
    areSessionLinksEnabled: false
}, {
    date: '2019-06-08',
    time: '5-9pm',
    topicName: 'Front-end Architecture And Introduction to HTML (The Glass)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-javascript-tickets-44050656700?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'HTML (The Glass)',
    slidesLink: 'http://bit.ly/CnCJunSlides',
    worksheetLink: 'http://bit.ly/cnchtmlwork',
    areSessionLinksEnabled: false

}, {
    date: '2019-07-13',
    time: '5-9pm',
    topicName: 'Introduction to CSS (The Garnish)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-a-deeper-dive-into-javascript-tickets-46549034415?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46549034415&ref=ccweb',
    sessionName: 'CSS (The Garnish)',
    slidesLink: 'http://bit.ly/CnCJulSlides',
    worksheetLink: 'http://bit.ly/cnccsswork',
    areSessionLinksEnabled: false
}, {
    date: '2019-08-10',
    time: '5-9pm',
    topicName: 'Introduction to Command Line And Version Control (The Rocks)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-package-managers-tickets-46599331856?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46599331856&ref=ccweb',
    sessionName: 'Git (The Rocks)',
    slidesLink: 'http://bit.ly/CnCAugSlides',
    worksheetLink: 'http://bit.ly/cncgitwork',
    areSessionLinksEnabled: false
}, {
    date: '2019-09-14',
    time: '5-9pm',
    topicName: 'Introduction to JavaScript (The Liquor)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-server-side-apis-tickets-46600665846?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46600665846&ref=ccweb',
    sessionName: 'JavaScript (The Liquor)',
    slidesLink: 'http://bit.ly/CnCSepSlides',
    worksheetLink: 'http://bit.ly/cncjavascriptwork',
    areSessionLinksEnabled: false
}, {
    date: '2019-10-12',
    time: '5-9pm',
    topicName: 'Interactive JavaScript (The Mixer)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-single-page-applications-tickets-48457253951?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=48457253951&ref=ccweb',
    sessionName: 'Interactive (The Mixer)',
    slidesLink: 'http://bit.ly/CnCOctSlides',
    worksheetLink: 'http://bit.ly/cncinteractivework',
    areSessionLinksEnabled: false
}, {
    date: '2019-11-09',
    time: '4-9pm',
    topicName: 'CodeJam (Enjoy)',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-codejam-tickets-49412482064?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=49412482064&ref=ccweb',
    sessionName: 'CodeJam (Enjoy)',
    slidesLink: 'http://bit.ly/CnCNovSlides',
    worksheetLink: 'http://bit.ly/cncenjoywork', // not created yet. need to figure out name
    areSessionLinksEnabled: false
}];

export const UPCOMING_SESSION_MONTH = 1; // Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
