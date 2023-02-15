import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { Tourism } from 'src/app/Models/tourism';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  searchCondition : string = "";
  show : number = 0;
  tourist : Tourism[] = [];
  selectedImages : string[] = [];
  selectedTourism :  Tourism = {} as Tourism;

  constructor(private service : PlaceService){

  }
  ngOnInit(): void
  {
    let ObservableObj = this.service.getAllPlaces();
    ObservableObj.subscribe((responseResult: Tourism[])=>{
      this.tourist = responseResult;
    })
  }

  onDetail(tourist : Tourism){
    this.selectedTourism = tourist;
    let ObservableObj = this.service.getAllImages(this.selectedTourism.PlaceID);
    let tempdata : any[] = [];

    ObservableObj.subscribe((data : any)=>{
      debugger;
      for (const img of data) {
        let tempImg = img.ImageSource.replace("D:\\Starmark-Pavan R\\ASP DotNet\\Angular Web API\\WebAPI\\WebAPI","assets");
        tempdata.push(tempImg)
      }
      this.selectedImages = tempdata;
    })
  }

  onAddNew(){
    if(this.show==1){
      this.show=0;
    }
    else{
      this.show=1;
    }
  }
}
