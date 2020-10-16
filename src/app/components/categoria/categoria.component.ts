import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';
import { Response } from './../../models/response';
import { Categoria } from '../../models/categoria';
import { DialogCategoriaComponent } from '../dialog/dialog-categoria/dialog-categoria.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../../common/delete/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

  public lista: Categoria[];
  public columnas: string[] = ['id', 'Nombre', 'Descripcion', 'Acciones'];
  readonly  width: string = '300px';
  constructor(private Categoria: AlmacenWSService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar ) {
    // this.Categoria.getCategoria().subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria(){
      this.Categoria.getCategoria().subscribe(response => {
      this.lista = response.data;
      console.log(response);
    });
  }

  openAdd(){
    const dialogRef = this.dialog.open(DialogCategoriaComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCategoria();
    });
  }

  openEdit(categoria: Categoria){
    const dialogRef = this.dialog.open(DialogCategoriaComponent, {
      width: this.width,
      data: categoria
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCategoria();
    });
  }

  delete(categoria: Categoria){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.Categoria.deleteCategoria(categoria.idCategoria).subscribe(response => {
          if (response.exito === 1){
            this.snackBar.open('Categoria Eliminada con Exito', '', {
              duration: 2000
            });
            this.getCategoria();
          }
        });
      }
    });
  }
}
