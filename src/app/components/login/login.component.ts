import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  // public loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });
  constructor(public apiAuth: AlmacenWSService,
              private router: Router,
              private formBuilder: FormBuilder) {
                if (this.apiAuth.usuarioData){
                  this.router.navigate(['/home']);
                }
               }

  ngOnInit() {
  }

  login(){
    this.apiAuth.login(this.loginForm.value).subscribe(response => {
      // console.log(response);
      if (response.exito === 1){
        this.router.navigate(['/home']);
      }
    });
  }
}
