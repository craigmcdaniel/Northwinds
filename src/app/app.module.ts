import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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







@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    AdminComponent,
    ErrorComponent,
    ProductsComponent,
    ProductDetailsModalComponent,

    LoginComponent
  ],
  imports: [
    NgBootstrapFormValidationModule.forRoot(),
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,

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
      { path: 'login', component: LoginComponent },
      { path: '**', component: ErrorComponent }

    ]),



  ],
  providers: [EmployeeService, ProductsService, AuthService, AuthGuard, AdminService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsModalComponent]

})
export class AppModule { }
