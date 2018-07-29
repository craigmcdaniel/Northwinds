import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent {
  title = 'app';
 
  public user: Observable<firebase.User>;


  constructor(public auth: AuthService, public afAuth:AngularFireAuth) {
 

 


  }
 
  
}
