import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlmacenWSService } from '../services/almacen-ws.service';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private route: Router,
                private apiAuthService: AlmacenWSService){
    }
    canActivate(route: ActivatedRouteSnapshot) {
        const usuario = this.apiAuthService.usuarioData;
        if (usuario) {
            return true;
        }
        this.route.navigate(['/login']);
        return false;
    }
}
