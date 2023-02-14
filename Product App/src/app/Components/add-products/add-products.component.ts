import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  prodId : number = 0;
  prodName : string = "";
  prodPrice : number = 0;
  prodImg : string = "";
  @Output() onAddNewProd : EventEmitter<Product> = new EventEmitter<Product>();

  onInvokeFunc()
  {
    const prod = {} as Product;
    prod.Id = this.prodId;
    prod.Name = this.prodName;
    prod.Price = this.prodPrice;
   prod.Img = this.prodImg;
    this.onAddNewProd.emit(prod);
    this.clearFields();
  }

  selectFile(event : any)
  {
    if(event.target.files && event.target.files.length){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_ev) => { this.prodImg = reader.result as string;}
  }
  else{
    alert("No file is selected");
  }
}

  clearFields(): void{
    this.prodId = 0;
    this.prodName = "";
    this.prodPrice = 0;
    this.prodImg = "";
  }
}
