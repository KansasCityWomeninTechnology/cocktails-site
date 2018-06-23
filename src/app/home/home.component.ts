import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tools: Array<Object>;
  public venue;
  public map;
  // SMG
  public lat = 39.091890;
  public lng = -94.579773;
  // Nerdery
  // public lat = 39.105692;
  // public lng = -94.581287;
  public zm = 15;
  public topics: Array<any>;
  public leaders: Array<Object>;
  public mentors: Array<Object>;
  public upcomingSession: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.tools = [{
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

    this.leaders = [{
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

    this.mentors = [{
      name: 'Tamara Copple',
      title: 'Mentor',
      img: 'assets/images/mentors/tamara.png',
      twitter: 'Ceiligirl72'
   }, {
      name: 'Tatiana Alexenko',
      title: 'Mentor',
      img: 'assets/images/mentors/tatiana.jpg',
      twitter: 'codecocktailskc'
   }, {
  //     name: 'Ashley Sullins',
  //     title: 'Mentor',
  //     img: 'assets/images/mentors/ashley.jpeg',
  //     twitter: 'ashleycc87'
  //  }, {
  //     name: 'Sara Heins',
  //     title: 'Mentor',
  //     img: 'assets/images/mentors/sara.jpg',
  //     twitter: 'theheins57'
  //  }, {
      name: 'Ashley Holbrook',
      title: 'Mentor',
      img: 'assets/images/mentors/ashleyh.jpg',
      twitter: 'ultralovets'
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
 }];

    // this.venue = {
    //   name: 'The Nerdery',
    //   img: 'assets/images/logos/nerdery.png',
    //   url: 'http://nerdery.com',
    //   address: '100 E 7 St #401, Kansas City, MO 64106'
    // };

    this.venue = {
      name: 'Service Management Group',
      img: 'assets/images/logos/smg.png',
      url: 'https://www.smg.com/',
      address: '1737 McGee St, Kansas City, MO 64108'
    };

    this.topics = [{
      date: '2018-01-13',
      time: '5-9pm',
      topic: 'Introduction to HTML',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-html-tickets-39425679268?aff=ccweb',
      tickets: ''
    }, {
      date: '2018-02-10',
      time: '5-9pm',
      topic: 'Introduction to CSS',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-css-tickets-39470123201?aff=ccweb',
      tickets: ''
    }, {
      date: '2018-03-10',
      time: '5-9pm',
      topic: 'Introduction to Command Line',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-command-line-tickets-39470265627?aff=ccweb',
      tickets: ''
    }, {
      date: '2018-04-14',
      time: '5-9pm',
      topic: 'Introduction to Version Control',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-version-control-tickets-42787776391?aff=ccweb',
      tickets: ''
    }, {
      date: '2018-05-12',
      time: '5-9pm',
      topic: 'Introduction to Front End Architecture',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-front-end-architecture-tickets-44043474217?aff=ccweb',
      tickets: ''
    }, {
      date: '2018-06-09',
      time: '5-9pm',
      topic: 'Programming Concepts 101: Introduction to JavaScript',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-javascript-tickets-44050656700?aff=ccweb',
      tickets: ''
    }, {
      date: '2018-07-14',
      time: '5-9pm',
      topic: 'Programming Concepts 102: A deeper dive into JavaScript',
      url: 'https://www.eventbrite.com/e/coding-cocktails-a-deeper-dive-into-javascript-tickets-46549034415?aff=ccweb',
      tickets: '//eventbrite.com/tickets-external?eid=46549034415&ref=ccweb'
    }, {
      date: '2018-08-11',
      time: '5-9pm',
      topic: 'Introduction to Package Managers',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-package-managers-tickets-46599331856?aff=ccweb',
      tickets: '//eventbrite.com/tickets-external?eid=46599331856&ref=ccweb'
    }, {
      date: '2018-09-08',
      time: '5-9pm',
      topic: 'Server-side APIs: Node.js, REST & SOAP',
      url: 'https://www.eventbrite.com/e/coding-cocktails-server-side-apis-tickets-46600665846?aff=ccweb',
      tickets: '//eventbrite.com/tickets-external?eid=46600665846&ref=ccweb'
    }, {
      date: '2018-10-13',
      time: '5-9pm',
      topic: 'Introduction to Single Page Applications',
      url: 'http://codingandcocktailskc.eventbrite.com',
      tickets: ''
    }, {
      date: '2018-11-10',
      time: '4-9pm',
      topic: 'Micro-Hackathon',
      url: 'http://codingandcocktailskc.eventbrite.com',
      tickets: ''
    }];

    this.upcomingSession = this.topics[6];
    // bypass sanitization of the url so that we can display the iframe
    this.upcomingSession.tickets = this.sanitizer.bypassSecurityTrustResourceUrl(this.upcomingSession.tickets);
  }
}
