import { Injectable } from '@angular/core';
import { locationModel } from '../model/locationModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location: locationModel = {} as locationModel
  constructor() { }

  getLocation(): Promise<{ latitude: number; longitude: number }>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location.latitude = position.coords.latitude;
          this.location.longitude = position.coords.longitude;
          resolve(this.location);
        },
        (error) => {
           reject('Geolocation unavailable');
        }
      );
    });
  }}
