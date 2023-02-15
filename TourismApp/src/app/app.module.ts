import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlacesComponent } from './Components/places/places.component';
import { AddPlaceComponent } from './Components/add-place/add-place.component';
import { ViewPlaceComponent } from './Components/view-place/view-place.component';
import { HttpClientModule} from '@angular/common/http';
import { EmpComponent } from './Components/emp/emp.component';
import { PlacePipe } from './Pipes/place.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    AddPlaceComponent,
    ViewPlaceComponent,
    EmpComponent,
    PlacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
