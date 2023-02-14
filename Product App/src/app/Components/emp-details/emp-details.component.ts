import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})

export class EmpDetailsComponent {
  @Input() selectedEmp : Employee = {} as Employee
}
