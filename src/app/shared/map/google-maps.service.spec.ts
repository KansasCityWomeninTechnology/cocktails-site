import { inject, TestBed } from '@angular/core/testing';
import { GoogleMapsService } from './google-maps.service';
import { GOOGLE_MAP } from './map.providers';
import { googleMock } from './testing/fake-google';
import { Coordinate, MarkerAnimation } from './map-types';
import { ElementRef } from '@angular/core';

describe('GoogleMapsService', () => {
  let googleMockSpy: jasmine.Spy;

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

  describe('when creating the map', () => {

    beforeEach(() => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Map');
    });

    it('should create the map with controls disabled', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const center: Coordinate = <Coordinate>{lat: 0, lng: 0};
        const zoom = 0;

        service.createMap(<ElementRef>{}, center, zoom);
        expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        }));
    }));

    it('should create the map using cooperative gesturehandling', inject([GoogleMapsService], (service: GoogleMapsService) => {
      // TODO UNIT TEST Do this one first
      // We want to verify we used 'cooperative' for the gestureHandling property (see google-maps.service.ts LOC 22)
      // Take a look at the setup in the test above. We need to change the expect to match the property/value we're testing for
      // In case you need it, the Jasmine API is found https://jasmine.github.io/2.0/introduction.html
    }));

    it('should create the map with specified center coordinates', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const center: Coordinate = <Coordinate>{lat: 42, lng: 24};
      const zoom = 0;

      service.createMap(<ElementRef>{}, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({
        center: {
          lat: center.lat,
          lng: center.lng
        },
      }));
    }));

    it('should create the map with specified zoom', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const center: Coordinate = <Coordinate>{lat: 0, lng: 0};
      const zoom = 10000;

      service.createMap(<ElementRef>{}, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({zoom: zoom}));
    }));

    it('should throw if the ElementRef is null', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const center: Coordinate = <Coordinate>{lat: 0, lng: 0};
      const zoom = 0;

      expect(() => service.createMap(null, center, zoom)).toThrowError('Cannot create map with missing parameters');
      expect(googleMockSpy).not.toHaveBeenCalled();
    }));

    // TODO UNIT TEST Do this one third
    // We should test bounds of a method while unit testing. This means we should have positive tests (happy path tests)
    // and negative tests (ones where there's bad input and make sure we handle it gracefully).
    // In this negative test, we want to verify we throw an error if the Coordinate parameter is null
    // Take a look at the setup in the test above.
    // We need to create the test method, change the input params, and change the expect to expect an error

    // TODO UNIT TEST Do this one fourth
    // We want to verify we throw an error if the zoom parameter is null
    // Take a look at the setup in the test above.
    // We need to create the test method, change the input params, and change the expect to expect an error

    // TODO UNIT TEST DO this last (maybe even after MailChimp form refactor so you have more breadth in types of testing)
    // We wrote examples of positive and negative tests for creating a map. Can you think of other input we should verify?
    // ==Hints: Don't read on unless you want hints==
    // We just wrote a negative test. Are there other negative cases? As an example, is null the same as undefined? Are there
    // other cases where input is invalid? What are valid geo-coordinates? What if numbers (lat/lng/zoom) exceeds "safe" limits for numbers?
    // Are there places where we should change the google-maps.service code to handle these sorts of inputs? I'm happy to talk through
    // scenarios with you and identify which tests we should write and which tests we shouldn't write
    // or determining when we've exceeded the effort for ROI
  });

  describe('when adding markers', () => {

    it('should add a marker to the specified position', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = <Coordinate>{lat: 42, lng: 24};
      const animation: MarkerAnimation = 'DROP';

      service.addMarker(position, animation);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({
        position: {
          lat: position.lat,
          lng: position.lng
        }
      }));
    }));

    it('should throw if position is null', inject([GoogleMapsService], (service: GoogleMapsService) => {
      expect(() => service.addMarker(null, 'DROP')).toThrowError('Cannot create map marker with missing parameters');
    }));

    it('should add a marker with BOUNCE animation', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = <Coordinate>{lat: 0, lng: 0};
      const animation: MarkerAnimation = 'BOUNCE';

      service.addMarker(position, animation);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({animation: 'FAKE-BOUNCE'}));
    }));

    it('should add a marker with DROP animation', inject([GoogleMapsService], (service: GoogleMapsService) => {
      // TODO UNIT TEST Do this one second
      // We want to verify we can pass in DROP for the animation type
      // Take a look at the setup in the test above.
      // We need to change both the input params and the expect to match the property/value we're testing for
    }));

    it('should add a marker with null animation', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = <Coordinate>{lat: 0, lng: 0};

      service.addMarker(position, null);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({animation: null}));
    }));

    it('should set marker to the map', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      const fakeMarker = jasmine.createSpyObj('marker', ['setMap']);
      const markerSpy = spyOn(fakeGoogle.maps, 'Marker').and.returnValue(fakeMarker);
      spyOn(fakeGoogle.maps, 'Map').and.returnValue({});

      const position: Coordinate = <Coordinate>{lat: 0, lng: 0};
      const animation: MarkerAnimation = 'DROP';

      service.createMap(<ElementRef>{}, {lat: 0, lng: 0}, 0);
      service.addMarker(position, animation);
      expect(markerSpy).toHaveBeenCalledWith(jasmine.objectContaining({map: {}}));
      expect(fakeMarker.setMap).toHaveBeenCalled();
    }));
  });
});
