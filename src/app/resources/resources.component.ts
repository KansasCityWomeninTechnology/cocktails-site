import { Component, OnInit } from '@angular/core';
import { Session, SESSIONS } from '@data/data';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public sessions: Session[];

  constructor() {
    this.sessions = SESSIONS;
  }

  ngOnInit() {
    // console.log(this.route);
  }

}
