import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerComponent } from './marker.component';
import { GoogleMapsService } from '../google-maps.service';
import { FakeMapService } from '../testing/fake-maps.service';

describe('MarkerComponent', () => {
  let component: MarkerComponent;
  let fixture: ComponentFixture<MarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerComponent ],
      providers: [
        { provide: GoogleMapsService, useClass: FakeMapService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
