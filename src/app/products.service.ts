import { Injectable } from '@angular/core';


import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  private jsonData;



  constructor(private http: Http) {
    
  
  }
   
  
        
   getCat() {
  
  
    return this.http.post("https://ambiguate.net//categories.php","","").
    map(res => res.json());
    
  
  }
  
  getProds(){
    return this.http.post("https://ambiguate.net//products.php","","").
    map(res => res.json());
  
  }
 
  
       
        

}
