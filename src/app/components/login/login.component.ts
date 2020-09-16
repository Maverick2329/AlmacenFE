import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public apiAuth: AlmacenWSService,
              private router: Router) {
                if (this.apiAuth.usuarioData){
                  this.router.navigate(['/home']);
                }
               }

  ngOnInit() {
  }

  login(){
    this.apiAuth.login(this.email, this.password).subscribe(response => {
      // console.log(response);
      if (response.exito === 1){
        this.router.navigate(['/']);
      }
    });
  }
}
