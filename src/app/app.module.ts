import { AuthService } from './auth/auth.service';
import { ProductsService } from './products.service';
import { AdminComponent } from './admin/admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdminService } from './admin.service';
import { AuthGuard } from './auth/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employee.service';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';
import { CallbackComponent } from './callback/callback.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    
    HomeComponent,
    AdminComponent,
    ErrorComponent,
   
    
    ProductsComponent,
    
    ProductDetailsModalComponent,
    
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
  
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule,
   AngularFireModule.initializeApp(environment.firebase),

    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},

      {path: 'employees', component: EmployeesComponent},
     
      {path: 'products', component: ProductsComponent},
      {path: 'admin', component: AdminComponent, canActivate: [
        AuthGuard
      ]},
      {path: 'callback', component: CallbackComponent},
      {path: '**', component: ErrorComponent}
     
                ]),



  ],
  providers: [EmployeeService,ProductsService,AuthService,AuthGuard,AdminService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsModalComponent]

})
export class AppModule { }
