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

  getAllImages(PlaceID : number): any {
    const tempUrl = "http://localhost:60805/api/Places/Images/"+PlaceID;
    return this.proxy.get(tempUrl);
  }

  addNewPlace(place:Tourism){
    const tempUrl = "http://localhost:60805/api/Tourism";
    return this.proxy.post(tempUrl,place);
  }
}
