import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private route: Router){
    }
    canActivate(route: ActivatedRouteSnapshot) {
        this.route.navigate(['/login']);
        return false;
    }
}