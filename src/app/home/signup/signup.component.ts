import { Component, Input, OnInit } from '@angular/core';
import { Venue } from '@data/about';
import { Session } from '@data/sessions';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Input() public venue: Venue;
  @Input() public sessions: Session[];
  @Input() public upcomingSessionMonth: number;

  public zoom = 15;

  public mapOptions: google.maps.MapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  };

  public mapMarkerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.DROP
  };

  public upcomingSessionTicketLink: SafeResourceUrl;
  public upcomingSession: Session;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.upcomingSession = this.sessions[this.upcomingSessionMonth - 1];

    // bypass sanitization of the url so that we can display the iframe
    this.upcomingSessionTicketLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.upcomingSession.eventbriteIFrameLink);
  }

}
