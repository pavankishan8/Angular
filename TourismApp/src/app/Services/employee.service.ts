import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url : string = "http://localhost:8555";

  constructor(private roxy: HttpClient) {

  }

  public getAllEmployees() : Observable<Employee[]>{
    return this.roxy.get<Employee[]>(this.url);
  }
}
