import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourism } from '../Models/tourism';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  url : string = 'http://localhost:60805/api/Tourism';

  constructor(private proxy: HttpClient) {

  }

  public getAllPlaces() : Observable<Tourism[]>{
    return this.proxy.get<Tourism[]>(this.url);
  }
}
