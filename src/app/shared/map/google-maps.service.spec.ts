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

    it('should add a marker with BOUNCE animation', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = <Coordinate>{lat: 0, lng: 0};
      const animation: MarkerAnimation = 'BOUNCE';

      service.addMarker(position, animation);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({animation: 'FAKE-BOUNCE'}));
    }));

    it('should add a marker with DROP animation', inject([GoogleMapsService], (service: GoogleMapsService) => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = <Coordinate>{lat: 0, lng: 0};
      const animation: MarkerAnimation = 'DROP';

      service.addMarker(position, animation);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({animation: 'FAKE-DROP'}));
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
