import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  employees : Employee[] = [];

  ngOnInit(): void
  {
    this.service.getAllEmployees().subscribe((data : Employee[])=>{
      this.employees = data;
    })
  }
  constructor(private service : EmployeeService){

  }
}
