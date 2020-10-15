import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlmacenWSService } from '../../../services/almacen-ws.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-dialog-categoria',
  templateUrl: './dialog-categoria.component.html'
})
export class DialogCategoriaComponent implements OnInit {

  public nombre: string;
  public descripcion: string;
  constructor(public dialogRef: MatDialogRef<DialogCategoriaComponent>,
              public apiAlmacen: AlmacenWSService,
              public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  addCategoria() {
    const categoria: Categoria = {nombreCategoria: this.nombre, descripcionCategoria: this.descripcion}
    return this.apiAlmacen.addCategoria(categoria).subscribe(response => {
      if(response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Categoria Agregada con Exito', '',{
          duration: 2000
        });
      }
    })
  }

}
