import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  value1 : number = 123;
  value2 : number = 234;
  result : number = this.value1 + this.value2;


  onClick()
  {
    alert("This is a Function in typescript");
  }

  onAddFunc()
  {
    this.value1 = Number(prompt("Enter the Value1: "));
    this.value2 = Number(prompt("Enter the Value2: "));
    this.result = this.value1 + this.value2;

    alert(this.value1 + this.value2);
  }
}
