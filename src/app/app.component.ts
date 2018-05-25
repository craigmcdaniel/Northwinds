import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(public auth: AuthService) {}
  
}
