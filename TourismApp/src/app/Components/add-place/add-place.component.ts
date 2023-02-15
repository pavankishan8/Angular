import { Component } from '@angular/core';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent {
  Name : string = "";
  Pin : number = 0;
  State : string = "";
  Significance : string = "";
  Description :string = "";
  ImageFiles : any[] = [];
  ImagePath : string = "";

  constructor(private service : PlaceService){

  }

onAddImage(){
  this.ImageFiles.push({"ImageSource": this.ImagePath});
}

onSelectFile(event : any)
  {
    if(event.target.files && event.target.files.length){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_ev) => { this.ImagePath = reader.result as string;}
  }
  else{
    alert("No file is selected");
  }
}

onAddNewPlace(){
  let place = {} as any;
  place.Name = this.Name;
  place.Pin = this.Pin;
  place.State = this.State;
  place.Significance = this.Significance;
  place.Description = this.Description;
  place.ImageFiles = this.ImageFiles;
  this.service.addNewPlace(place).subscribe((data)=>{
  alert("Place has been Inserted!")
  });
}
}
