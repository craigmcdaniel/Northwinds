// auth.guard.ts
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) { }
    canActivate() {
<<<<<<< HEAD
        if ( this.auth.isLoggedIn() ) {
=======
        if ( this.auth.authenticated ) {
>>>>>>> 3fe45ec5a5be58a7cc3afe5161ea2d030caffba5
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}