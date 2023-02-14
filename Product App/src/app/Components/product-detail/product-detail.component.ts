import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() selectedProd : Product = {} as Product;

  @Output() onDelete : EventEmitter<Product> = new EventEmitter<Product>();

  invokeFunc()
  {
    this.onDelete.emit(this.selectedProd);
  }
}
