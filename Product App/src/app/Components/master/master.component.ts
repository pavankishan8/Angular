import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{

  employees : Employee[] = [];
  selectedEmp : Employee = {} as Employee;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employees.push({id: 7081, Name: "Pavan R", Address:"Bangalore",Salary:45000,Pic:"./assets/Images/Pavan.jpg"});
    this.employees.push({id: 7082, Name: "Sachin R", Address:"Mysore",Salary:42000,Pic:"./assets/Images/sachin.jpg"});
    this.employees.push({id: 7083, Name: "Vishwas V", Address:"Chikkabalapura",Salary:43000,Pic:"./assets/Images/Virat.jpg"});
    this.employees.push({id: 7084, Name: "Priya B", Address:"Dharwad",Salary:47000,Pic:"./assets/Images/MJ.jpg"});
    this.employees.push({id: 7085, Name: "Rajaiah VK", Address:"Tumkur",Salary:49000,Pic:"./assets/Images/shahrukh.jpg"});
  }

  onEdit(emp: Employee){
  this.selectedEmp = emp;
  }
}
