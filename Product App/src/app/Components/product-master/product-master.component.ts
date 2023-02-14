import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent {
  toShow : number = 0;
  btnMessage : string="Add New Product";
  products : Product[] = [];
  selectedProd : Product = {} as Product;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products.push({Id: 1, Name: "MRI Scanner", Price:45000,Img:"./assets/Images/mri-scan.jpg"});
    this.products.push({Id: 2, Name: "XRay Machine", Price:53000,Img:"./assets/Images/Xray.jpg"});
    this.products.push({Id: 3, Name: "BP Machine", Price:2000,Img:"./assets/Images/BP Machine.jpg"});
    this.products.push({Id: 4, Name: "Pacemaker", Price:150000,Img:"./assets/Images/Pace.jpg"});
    this.products.push({Id: 5, Name: "Sugar Testing", Price:5000,Img:"./assets/Images/Sugar Machine.jpg"});
    this.products.push({Id: 6, Name: "Microscope", Price:100000,Img:"./assets/Images/Microscope.jpg"});
    this.products.push({Id: 7, Name: "Anastasia", Price:200000,Img:"./assets/Images/Anastasia.jpg"});
    this.products.push({Id: 8, Name: "Dental Instruments", Price:3500,Img:"./assets/Images/Dental Instruments.jpg"});
    this.products.push({Id: 9, Name: "Blood Samples Machine", Price:50000,Img:"./assets/Images/Blood Samples.jpg"});
    this.products.push({Id: 10, Name: "Surgical Instruments", Price:8000,Img:"./assets/Images/Surgical Ins.jpg"});
  }

  onEdit(prod: Product){
    this.selectedProd = prod;
    }

    onDeleteHandler(prod : Product)
    {
      let index = this.products.indexOf(prod);
      this.products.splice(index, 1);
    }

    onAddHandler(prod : Product)
    {
      this.products.push(prod);
      this.products = this.products.slice();
    }

    onShow(){
      this.toShow =  this.toShow === 0 ? 1 : 0;
      if(this.toShow == 1)
        this.btnMessage = "Cancel Adding";
        else this.btnMessage = "Add New Product";
    }

}
