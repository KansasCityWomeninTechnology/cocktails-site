import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  sessions: any[] = [{
    'available': true,
    'name': 'January: HTML',
    'slides': 'http://bit.ly/CnCJanSlides',
    'worksheet': 'http://bit.ly/CnCJanWork'
  }, {
    'available': true,
    'name': 'February: CSS',
    'slides': 'http://bit.ly/CnCFebSlides',
    'worksheet': 'http://bit.ly/CnCFebWork'
  }, {
    'available': true,
    'name': 'March: Command Line',
    'slides': 'http://bit.ly/CnCMarSlides',
    'worksheet': 'http://bit.ly/CnCMarWork'
  }, {
    'available': true,
    'name': 'April: Version Control',
    'slides': 'http://bit.ly/CnCAprSlides',
    'worksheet': 'http://bit.ly/CnCAprWork'
  }, {
    'available': true,
    'name': 'May: Front-end Architecture',
    'slides': 'http://bit.ly/CnCMaySlides',
    'worksheet': 'http://bit.ly/CnCMayWork'
  }, {
    'available': true,
    'name': 'June: Intro to JavaScript',
    'slides': 'http://bit.ly/CnCJunSlides',
    'worksheet': 'http://bit.ly/CnCJunWork'
  }, {
    'available': false,
    'name': 'July: JavaScript like a boss',
    'slides': 'http://bit.ly/CnCJulSlides',
    'worksheet': 'http://bit.ly/CnCJulWork'
  }, {
    'available': false,
    'name': 'August: Intro to Package Managers',
    'slides': 'http://bit.ly/CnCAugSlides',
    'worksheet': 'http://bit.ly/CnCAugWork'
  }, {
    'available': false,
    'name': 'September: NodeJS & APIs',
    'slides': 'http://bit.ly/CnCSepSlides',
    'worksheet': 'http://bit.ly/CnCSepWork'
  }, {
    'available': false,
    'name': 'October: Single Page Applications',
    'slides': 'http://bit.ly/CnCOctSlides',
    'worksheet': 'http://bit.ly/CnCOctWork'
  }, {
    'available': false,
    'name': 'November: Micro-Hackathon',
    'slides': 'http://bit.ly/CnCNovSlides',
    'worksheet': 'http://bit.ly/CnCNovWork'
  }
];
  constructor(
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this.route);
  }

}
