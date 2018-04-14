import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tools: Array<Object>;
  public venue;
  public map;
  public lat = 39.105692;
  public lng = -94.581287;
  public zm = 15;
  public topics: Array<Object>;
  public leaders: Array<Object>;
  public mentors: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.tools = [{
      name: 'HTML',
      url: 'https://www.w3.org/html/',
      img: '../assets/images/logos/html5.png'
    }, {
      name: 'Github',
      url: 'https://github.com/',
      img: '../assets/images/logos/femalecodertocat.png'
    }, {
      name: 'Yeoman',
      url: 'http://yeoman.io/',
      img: '../assets/images/logos/yo.png'
    }, {
      name: 'Angular',
      url: 'https://angular.io/',
      img: '../assets/images/logos/angular.png'
    }, {
      name: 'node',
      url: 'https://nodejs.org/en/',
      img: '../assets/images/logos/node.png'
    }, {
      name: 'npm',
      url: 'https://www.npmjs.com/',
      img: '../assets/images/logos/npm.png'
    }];

    this.leaders = [{
      name: 'Jennifer Wadella',
      title: 'Founder',
      img: '../assets/images/mentors/jennifer.png',
      twitter: 'likeOMGitsFEDAY'
    }, {
      name: 'Sarah Duitsman',
      title: 'Program Director',
      img: '../assets/images/mentors/sarah.png',
      twitter: 'skduits'
    }, {
      name: 'Kelly Winzer',
      title: 'Program Co-Director',
      img: '../assets/images/mentors/kelly.jpg',
      twitter: 'kellyreneewinz'
    }, {
      name: 'Kayla Hennegin',
      title: 'Curriculum Director',
      img: '../assets/images/mentors/kayla.png',
      twitter: 'bellafaith'
    }, {
      name: 'Gabi Dombrowski',
      title: 'Mentor Director',
      img: '../assets/images/mentors/gabi.jpg',
      twitter: 'gabdom'
    }, {
      name: 'Alisa Duncan',
      title: 'Technical Materials Director',
      img: '../assets/images/mentors/alisa.jpg',
      twitter: 'AlisaDuncan'
    }, {
      name: 'Melissa Arroyo',
      title: 'Marketing Director',
      img: '../assets/images/mentors/melissa.jpg',
      twitter: 'Meivarpe'
    }];

    this.mentors = [{
      name: 'Tamara Copple',
      title: 'Mentor',
      img: '../../assets/images/mentors/tamara.png',
      twitter: 'Ceiligirl72'
   }, {
      name: 'Tatiana Alexenko',
      title: 'Mentor',
      img: '../../assets/images/mentors/tatiana.jpg',
      twitter: 'codecocktailskc'
   }, {
      name: 'Ashley Sullins',
      title: 'Mentor',
      img: '../../assets/images/mentors/ashley.jpeg',
      twitter: 'ashleycc87'
   }, {
      name: 'Sara Heins',
      title: 'Mentor',
      img: '../../assets/images/mentors/sara.jpg',
      twitter: 'theheins57'
   }, {
      name: 'Ashley Holbrook',
      title: 'Mentor',
      img: '../../assets/images/mentors/ashleyh.jpg',
      twitter: 'ultralovets'
   }, {
      name: 'Amy Norris',
      title: 'Mentor',
      img: '../../assets/images/mentors/amy.jpg',
      twitter: 'amynorris'
   }, {
      name: 'Rachel Hathaway',
      title: 'Mentor',
      img: '../../assets/images/mentors/rachel.jpg',
      twitter: 'codecocktailskc'
   }, {
      name: 'Muriel Green',
      title: 'Mentor',
      img: '../../assets/images/mentors/muriel.jpg',
      twitter: 'murlgreen1'
   }, {
      name: 'Annie Chan',
      title: 'Mentor',
      img: '../../assets/images/mentors/annie.jpg',
      twitter: 'codecocktailskc'
   }, {
      name: 'Heather Pekrul',
      title: 'Mentor',
      img: '../../assets/images/mentors/heatherp.jpg',
      twitter: 'heatherpekrul'
   }, {
      name: 'Maroua Jawadi',
      title: 'Mentor',
      img: '../../assets/images/mentors/maroua.jpg',
      twitter: 'codecocktailskc'
   }, {
      name: 'Stephanie Sammons',
      title: 'Mentor',
      img: '../../assets/images/mentors/stephanie.jpg',
      twitter: 'codecocktailskc'
   }, {
      name: 'Rhia Dixon',
      title: 'Mentor',
      img: '../../assets/images/mentors/rhia.jpg',
      twitter: 'TheFakeRiRi'
   }, {
      name: 'Stacey Adams',
      title: 'Mentor',
      img: '../../assets/images/mentors/stacey.jpg',
      twitter: 'codecocktailskc'
   }];

    this.venue = {
      name: 'The Nerdery',
      img: '../assets/images/logos/nerdery.png',
      url: 'http://nerdery.com',
      address: '100 E 7 St #401, Kansas City, MO 64106'
    };

    this.topics = [{
      month: 'January 13th',
      topic: 'Introduction to HTML',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-html-tickets-39425679268?aff=ccweb'
    }, {
      month: 'February 10th',
      topic: 'Introduction to CSS',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-css-tickets-39470123201?aff=ccweb'
    }, {
      month: 'March 10th',
      topic: 'Introduction to Command Line',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-command-line-tickets-39470265627?aff=ccweb'
    }, {
      month: 'April 14th',
      topic: 'Introduction to Version Control',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-version-control-tickets-42787776391?aff=ccweb'
    }, {
      month: 'May 12th',
      topic: 'Introduction to Front End Architecture',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-front-end-architecture-tickets-44043474217?aff=ccweb'
    }, {
      month: 'June 9th',
      topic: 'Programming Concepts 101: Introduction to JavaScript',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-javascript-tickets-44050656700?aff=ccweb'
    }, {
      month: 'July 14th',
      topic: 'Programming Concepts 102: A deeper dive into JavaScript',
      url: 'http://codingandcocktailskc.eventbrite.com'
    }, {
      month: 'August 11th',
      topic: 'Introduction to Package Managers',
      url: 'http://codingandcocktailskc.eventbrite.com'
    }, {
      month: 'September 8th',
      topic: 'Server-side APIs: Node.js, REST & SOAP',
      url: 'http://codingandcocktailskc.eventbrite.com'
    }, {
      month: 'October 13th',
      topic: 'Introduction to Single Page Applications',
      url: 'http://codingandcocktailskc.eventbrite.com'
    }, {
      month: 'November 10th',
      topic: 'Micro-Hackathon',
      url: 'http://codingandcocktailskc.eventbrite.com'
    }];
  }
}
