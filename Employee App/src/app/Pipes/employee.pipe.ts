import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/employee';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  transform(employees: Employee[], args: string): Employee[] {
    if(args == "")
      return employees;
    else
      return employees.filter((t: Employee) => t.empName.toLowerCase().includes(args.toLowerCase()));
  }

}
