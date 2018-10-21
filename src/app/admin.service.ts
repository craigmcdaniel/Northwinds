// Import HttpHeaders
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// Import AuthService
import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  
  private AdminUrl = 'http://localhost:3001/admin';

  constructor(
    
    private authService: AuthService
  ) { }

 

  // Implement a method to get the private deals
  getAdmin() {
    return this.http
      .get(this.AdminUrl, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
      });
      
  }
 
}