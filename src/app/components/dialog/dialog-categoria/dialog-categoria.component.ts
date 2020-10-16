import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlmacenWSService } from '../../../services/almacen-ws.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-dialog-categoria',
  templateUrl: './dialog-categoria.component.html'
})
export class DialogCategoriaComponent implements OnInit {

  public id: number;
  public nombre: string;
  public descripcion: string;
  constructor(public dialogRef: MatDialogRef<DialogCategoriaComponent>,
              public apiAlmacen: AlmacenWSService,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public categoria: Categoria)
              {
                if (this.categoria !== null){
                  this.id = categoria.idCategoria;
                  this.nombre = categoria.nombreCategoria;
                  this.descripcion = categoria.descripcionCategoria;
                }
              }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  addCategoria() {
    const categoria: Categoria = {nombreCategoria: this.nombre, descripcionCategoria: this.descripcion};
    return this.apiAlmacen.addCategoria(categoria).subscribe(response => {
      if (response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Categoria Agregada con Exito', '', {
          duration: 2000
        });
      }
    });
  }

  editCategoria(){
    const categoria: Categoria = { idCategoria: this.id, nombreCategoria: this.nombre, descripcionCategoria: this.descripcion};
    console.log(categoria);
    return this.apiAlmacen.editCategoria(categoria).subscribe(response => {
      if (response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Categoria Editada con Exito', '', {
          duration: 2000
        });
      }
    });
  }

}
