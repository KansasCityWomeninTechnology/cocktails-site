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
    name: 'Yeoman',
    url: 'http://yeoman.io/',
    img: 'assets/images/logos/yo.png'
}, {
    name: 'Angular',
    url: 'https://angular.io/',
    img: 'assets/images/logos/angular.png'
}, {
    name: 'node',
    url: 'https://nodejs.org/en/',
    img: 'assets/images/logos/node.png'
}, {
    name: 'npm',
    url: 'https://www.npmjs.com/',
    img: 'assets/images/logos/npm.png'
}];


// export const VENUE: Venue = {
//     name: 'Service Management Group',
//     img: 'assets/images/logos/smg.png',
//     url: 'https://www.smg.com/',
//     address: '1737 McGee St, Kansas City, MO 64108',
//     lat: 39.091890,
//     lng: -94.579773
// };

// If we keep encountering multiple venues, this can be streamlined a bit more
// For now taking the no effort route.
export const VENUE: Venue = {
  name: 'The Nerdery',
  img: 'assets/images/logos/nerdery.png',
  url: 'http://nerdery.com',
  address: '100 E 7 St #401, Kansas City, MO 64106',
  lat: 39.105692,
  lng: -94.581287
};


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
    name: 'Kayla Hennegin',
    title: 'Curriculum Director',
    img: 'assets/images/mentors/kayla.png',
    twitter: 'bellafaith'
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
    twitter: 'Meivarpe'
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
}];


export const SESSIONS: Session[] = [{
    date: '2018-01-13',
    time: '5-9pm',
    topicName: 'Introduction to HTML',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-html-tickets-39425679268?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'HTML',
    slidesLink: 'http://bit.ly/CnCJanSlides',
    worksheetLink: 'http://bit.ly/CnCJanWork',
    areSessionLinksEnabled: true

}, {
    date: '2018-02-10',
    time: '5-9pm',
    topicName: 'Introduction to CSS',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-css-tickets-39470123201?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'CSS',
    slidesLink: 'http://bit.ly/CnCFebSlides',
    worksheetLink: 'http://bit.ly/CnCFebWork',
    areSessionLinksEnabled: true
}, {
    date: '2018-03-10',
    time: '5-9pm',
    topicName: 'Introduction to Command Line',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-command-line-tickets-39470265627?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'Command Line',
    slidesLink: 'http://bit.ly/CnCMarSlides',
    worksheetLink: 'http://bit.ly/CnCMarWork',
    areSessionLinksEnabled: true
}, {
    date: '2018-04-14',
    time: '5-9pm',
    topicName: 'Introduction to Version Control',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-version-control-tickets-42787776391?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'Version Control',
    slidesLink: 'http://bit.ly/CnCAprSlides',
    worksheetLink: 'http://bit.ly/CnCAprWork',
    areSessionLinksEnabled: true,
}, {
    date: '2018-05-12',
    time: '5-9pm',
    topicName: 'Introduction to Front End Architecture',
    eventbriteLink:
        'https://www.eventbrite.com/e/coding-cocktails-introduction-to-front-end-architecture-tickets-44043474217?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'Front-end Architecture',
    slidesLink: 'http://bit.ly/CnCMaySlides',
    worksheetLink: 'http://bit.ly/CnCMayWork',
    areSessionLinksEnabled: true
}, {
    date: '2018-06-09',
    time: '5-9pm',
    topicName: 'Programming Concepts 101: Introduction to JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-javascript-tickets-44050656700?aff=ccweb',
    eventbriteIFrameLink: '',
    sessionName: 'Intro to JavaScript',
    slidesLink: 'http://bit.ly/CnCJunSlides',
    worksheetLink: 'http://bit.ly/CnCJunWork',
    areSessionLinksEnabled: true

}, {
    date: '2018-07-14',
    time: '5-9pm',
    topicName: 'Programming Concepts 102: A deeper dive into JavaScript',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-a-deeper-dive-into-javascript-tickets-46549034415?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46549034415&ref=ccweb',
    sessionName: 'JavaScript like a boss',
    slidesLink: 'http://bit.ly/CnCJulSlides',
    worksheetLink: 'http://bit.ly/CncJulWork',
    areSessionLinksEnabled: true
}, {
    date: '2018-08-11',
    time: '5-9pm',
    topicName: 'Introduction to Package Managers',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-package-managers-tickets-46599331856?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46599331856&ref=ccweb',
    sessionName: 'Intro to Package Managers',
    slidesLink: 'http://bit.ly/CnCAugSlides',
    worksheetLink: 'http://bit.ly/CnCAugWork',
    areSessionLinksEnabled: false
}, {
    date: '2018-09-08',
    time: '5-9pm',
    topicName: 'Server-side APIs: Node.js, REST & SOAP',
    eventbriteLink: 'https://www.eventbrite.com/e/coding-cocktails-server-side-apis-tickets-46600665846?aff=ccweb',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=46600665846&ref=ccweb',
    sessionName: 'NodeJS & APIs',
    slidesLink: 'http://bit.ly/CnCSepSlides',
    worksheetLink: 'http://bit.ly/CnCSepWork',
    areSessionLinksEnabled: false
}, {
    date: '2018-10-13',
    time: '5-9pm',
    topicName: 'Introduction to Single Page Applications',
    eventbriteLink: 'http://codingandcocktailskc.eventbrite.com',
    eventbriteIFrameLink: '',
    sessionName: 'Single Page Applications',
    slidesLink: 'http://bit.ly/CnCOctSlides',
    worksheetLink: 'http://bit.ly/CnCOctWork',
    areSessionLinksEnabled: false
}, {
    date: '2018-11-10',
    time: '4-9pm',
    topicName: 'Micro-Hackathon',
    eventbriteLink: 'http://codingandcocktailskc.eventbrite.com',
    eventbriteIFrameLink: '',
    sessionName: 'Micro-Hackathon',
    slidesLink: 'http://bit.ly/CnCNovSlides',
    worksheetLink: 'http://bit.ly/CnCNovWork',
    areSessionLinksEnabled: false
}];

export const UPCOMING_SESSION_MONTH = 8; // Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
