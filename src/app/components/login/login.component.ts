import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public auth: AlmacenWSService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.email,this.password).subscribe(response => {
      console.log(response);
    });
  }

}
