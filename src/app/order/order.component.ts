import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  data: any = [];
  constructor(private order: OrderService) { }

  

  ngOnInit() {
   /*  this.order.getAllOrder().subscribe(data => {
      this.data = data;
      
     
    }); */
   
  }
  

}
