
import { Injectable } from '@angular/core';


import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmployeeService {
private jsonData;



constructor(private http: Http) {
  

}
/* 
getEmp() {
 
      return this.http.get('https://ambiguate.net/employee.php').
      map(res => res.json());

     
      } */

      
 getEmp() {


  return this.http.post("https://ambiguate.net//employee.php","","").
  map(res => res.json());
  

}


     
      
}
