// auth.guard.ts
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) { }
    canActivate() {
        if ( this.auth.authenticated ) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}