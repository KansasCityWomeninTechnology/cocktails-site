import { Component, OnInit } from '@angular/core';
import { Topic, TOPICS } from '@data/sessions';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public topics: Topic[];

  constructor() {
    this.topics = TOPICS;
  }

  ngOnInit() {
    // console.log(this.route);
  }

}
