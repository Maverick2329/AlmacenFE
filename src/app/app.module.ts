import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DialogCategoriaComponent } from './components/dialog/dialog-categoria/dialog-categoria.component';
import { DialogProductoComponent } from './components/dialog/dialog-producto/dialog-producto.component';


// Peticiones
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// Servicios
import { AlmacenWSService } from './services/almacen-ws.service';
import { from } from 'rxjs';
import { JwtInterceptor } from './secutiry/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ProductoComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DialogCategoriaComponent,
    DialogProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    AlmacenWSService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogCategoriaComponent,
    DialogProductoComponent
  ]
})
export class AppModule { }
