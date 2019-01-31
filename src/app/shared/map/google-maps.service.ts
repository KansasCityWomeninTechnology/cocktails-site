import { ElementRef, Inject, Injectable } from '@angular/core';
import { GOOGLE_MAP } from './map.providers';
import { Coordinate, MarkerAnimation } from './map-types';
import { } from 'googlemaps';

@Injectable()
export class GoogleMapsService {
  private _map: google.maps.Map = null;

  constructor(@Inject(GOOGLE_MAP) private _google: any) {}

  public createMap(elRef: ElementRef, center: Coordinate, zoom: number): void {
    this._map = new this._google.maps.Map(elRef.nativeElement, {
      zoom: zoom,
      center: {
        lat: center.lat,
        lng: center.lng
      },
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      gestureHandling: 'cooperative'
    });
  }

  public addMarker(position: Coordinate, animation: MarkerAnimation): void {
    const mapMarker: google.maps.Marker = new this._google.maps.Marker({
      position: {
        lat: position.lat,
        lng: position.lng
      },
      animation: this.animationType(animation),
      map: this._map
    });
    mapMarker.setMap(this._map);
  }

  private animationType(animation: MarkerAnimation): google.maps.Animation {
    if (!animation) {
      return null;
    }

    if (animation === 'DROP') {
      return this._google.maps.Animation.DROP;
    }

    if (animation === 'BOUNCE') {
      return this._google.maps.Animation.BOUNCE;
    }

    return null;
  }
}
