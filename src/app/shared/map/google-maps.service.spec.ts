import { TestBed } from '@angular/core/testing';

import { GoogleMapsService } from './google-maps.service';
import { GOOGLE_MAP } from './map.providers';
import { googleMock } from './testing/fake-google';

describe('GoogleMapsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GoogleMapsService,
      { provide: GOOGLE_MAP, useValue: googleMock }
    ]
  }));

  it('should be created', () => {
    const service: GoogleMapsService = TestBed.get(GoogleMapsService);
    expect(service).toBeTruthy();
  });
});
