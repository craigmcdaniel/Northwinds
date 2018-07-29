import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin/admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { EmployeeService } from './employee.service';
import { EmployeesComponent } from './employees/employees.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products/products.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { HomeCaroselComponent } from './home-carosel/home-carosel.component';
import { OrderService } from './order.service';
import { OrderComponent } from './order/order.component';







@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    AdminComponent,
    ErrorComponent,
    ProductsComponent,
    ProductDetailsModalComponent,

    LoginComponent,

    HomeCaroselComponent,

    OrderComponent
  ],
  imports: [
    NgBootstrapFormValidationModule.forRoot(),
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,

    // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },

      { path: 'employees', component: EmployeesComponent,canActivate: [
        AuthGuard
      ] },

      { path: 'products', component: ProductsComponent },
      {
        path: 'admin', component: AdminComponent, canActivate: [
          AuthGuard
        ]
      },
      {
        path: 'order', component: OrderComponent
      },
      { path: 'login', component: LoginComponent },
      { path: '**', component: ErrorComponent }

    ]),



  ],
  providers: [EmployeeService,OrderService, ProductsService, AuthService, AuthGuard, AdminService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsModalComponent]

})
export class AppModule { }
