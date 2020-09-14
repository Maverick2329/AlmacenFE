import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AuthGuard } from './secutiry/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  {path: 'categoria', component: CategoriaComponent, canActivate: [ AuthGuard ] },
  {path: 'producto', component: ProductoComponent, canActivate: [ AuthGuard ] },
  {path: 'login', component: LoginComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
