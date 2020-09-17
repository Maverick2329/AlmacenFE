import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AlmacenWSService } from 'src/app/services/almacen-ws.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(public apiAuth: AlmacenWSService,
              private router: Router){
                this.apiAuth.usuario.subscribe(res => {
                  this.usuario = res;
                  console.log('Cambio el Objeto: ' + res);
                });
              }

  ngOnInit(): void {
  }

  logout(){
    this.apiAuth.logout();
    this.router.navigate(['/login']);
  }
 
}
