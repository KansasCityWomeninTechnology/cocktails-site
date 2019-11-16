import { Component, OnInit } from '@angular/core';
import { Tool, TOOLS, Hero, LEADERS, MENTORS, Venue, VENUE, Session, SESSIONS, UPCOMING_SESSION_MONTH } from '@data/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tools: Tool[];
  public venue: Venue;
  public sessions: Session[];
  public leaders: Hero[];
  public mentors: Hero[];
  public upcomingSessionMonth: number;

  constructor() {
    this.tools = TOOLS;
    this.venue = VENUE;
    this.leaders = LEADERS;
    this.mentors = MENTORS;
    this.sessions = SESSIONS;
    this.upcomingSessionMonth = UPCOMING_SESSION_MONTH;
  }

  ngOnInit(): void {
  }
}
