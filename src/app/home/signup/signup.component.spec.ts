import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Session } from '@data/sessions';
import { Venue } from '@data/about';
import { GoogleMapsModule } from '@angular/google-maps';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  const sessions: Session[] = [{
    date: '2019-01-1',
    time: '5-9pm',
    name: 'Session Name',
    eventbriteLink: 'Some Link',
    eventbriteIFrameLink: 'Some Link'
  }];

  const venue: Venue = {
    name: 'Venue name',
    img: 'image.png',
    url: 'internet',
    address: 'an address',
    lat: 38,
    lng: -94
  };

  const upcomingSessionMonth = 1;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        GoogleMapsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;

    component.upcomingSessionMonth = upcomingSessionMonth;
    component.sessions = sessions;
    component.venue = venue;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
