import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-employees',
 
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService],
  template:
  
  
  `<div class="container-fluid">
  <div class="row">

  <div class="col-med-12">
  <table class="bs-table:bordered table table-hover" ><tr *ngFor="let e of data">
  <td  > <a target='_blank' href='https://northcake.ambiguate.net/employees/view/{{e.id}}'>{{e.first_name + \" \" + e.last_name}}</a> </td>
   </tr></table></div></div></div>`

  
})


export class EmployeesComponent {

  data: any = [];

  

  constructor(private service: EmployeeService) {
   
  }
  ngOnInit(){
    this.service.getEmp().subscribe(data => {
      this.data = data;
      
      
    });
  }
}
