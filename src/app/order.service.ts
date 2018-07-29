
import { Injectable } from '@angular/core';


import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OrderService {
private jsonData;
data: any = [];


constructor(private http: Http) {
}


      
 getAllOrder() {


  return this.http.get("https://northcake.ambiguate.net/orders").
  map(res => res.json());
  

}

/* getOneOrder() {
  return this.http.post("https://northcake.ambiguate.net/orders/view/:id","","")
  .map(res=>res.json());
}
     
addOrder(){
  this.http.post("https://northcake.ambiguate.net/orders/add/1/2/3/4","","");
} */

      
}
