import { ProductDetailsModalComponent } from './../product-details-modal/product-details-modal.component';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { getPluralCategory } from '@angular/common/src/i18n/localization';


@Component({
  selector: 'app-products',

  styleUrls: ['./products.component.css'],
  providers: [ProductsService],
  template:
  `<div class="container-fluid">

  <form #f="ngForm">
  <select name="cat"   [(ngModel)]="cat.category"  (ngModelChange)="SearchProduct(cat.category)">

    <option *ngFor="let e of cat" [attr.value]="e.category" [attr.selected]="e.category == 'Candy' ? true : null">
    {{e.category }} </option>

  </select>







  <div class="row" >



   <div class="col-sm-6" *ngFor="let e of ProductDetails ">
   <div class="card" >
     <div class="card-body">
       <h5 class="card-title"> {{e.product_name | slice : 15  : 50  }}</h5>
       <p class="card-text">{{e.list_price | currency:'USD':true:'0.2-2' }} for {{e.quantity_per_unit}} </p>
       <a  class="btn btn-primary" (click) = "onClick()">Product Details</a>
     </div>
   </div><br/>
 </div>
 </div>
 </form>
 </div> `
})
export class ProductsComponent {
  public ProductDetails: object = [];

  onClick() {
    this.modal.open(ProductDetailsModalComponent);
  }

  SearchProduct(name: string) {

   const  obj = this.products.filter(m => m.category === name);
   let cat = 'Candy' ;
    this.ProductDetails = obj;
    console.log(this.cat) ;

    return this.ProductDetails;

    }
  cat: any = [];
  products: any = [];



  constructor(private service: ProductsService, private modal: NgbModal) {

  }
  ngOnInit() {
    this.service.getCat().subscribe(cat => {
      this.cat = cat;
      cat.name = 'Candy';



    });
    this.service.getProds().subscribe(products => {
      this.products = products;
    });
  }
}

