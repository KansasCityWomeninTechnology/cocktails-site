import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Tool, TOOLS, Hero, LEADERS, MENTORS, Venue, VENUE, Session, SESSIONS, UPCOMING_SESSION_MONTH } from '@data/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tools: Tool[];
  public venue: Venue;
  public map;
  public zm = 15;
  public sessions: Session[];
  public leaders: Hero[];
  public mentors: Hero[];
  public upcomingSession: Session;
  public upcomingSessionTicketLink: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.tools = TOOLS;
    this.venue = VENUE;
    this.leaders = LEADERS;
    this.mentors = MENTORS;
    this.sessions = SESSIONS;

    this.upcomingSession = this.sessions[UPCOMING_SESSION_MONTH - 1];
    // bypass sanitization of the url so that we can display the iframe
    this.upcomingSessionTicketLink = sanitizer.bypassSecurityTrustResourceUrl(this.upcomingSession.eventbriteIFrameLink);
  }

  ngOnInit() {

  }
}
