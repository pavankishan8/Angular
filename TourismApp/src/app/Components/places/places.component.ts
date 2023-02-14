import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { Tourism } from 'src/app/Models/tourism';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  tourist : Tourism[] = [];


  ngOnInit(): void
  {
    this.service.getAllPlaces().subscribe((data : Tourism[])=>{
      this.tourist = data;
    })
  }
  constructor(private service : PlaceService){

  }
}
