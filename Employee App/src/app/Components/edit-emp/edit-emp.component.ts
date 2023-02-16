import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {
  empId :string|null="";

  empObj: Employee={} as Employee;

  constructor(private service : EmployeeService, private activated:ActivatedRoute,private router:Router){}


  ngOnInit(): void {
    this.activated.paramMap.subscribe((param:ParamMap)=>{
      this.empId = (param.get("id"));
    })
    if(this.empId!=null){
      let observer = this.service.getEmployee(this.empId);
      observer.subscribe((data:Employee)=>{
        this.empObj = data;
      })
    }
  }

  onUpdateEmployee(){
    let observer = this.service.putEmployee(this.empId as string, this.empObj);
    observer.subscribe((data:Employee)=>{
      alert("Employee Details updated Successfully");
    })
    this.router.navigate(['/']);
}
}
