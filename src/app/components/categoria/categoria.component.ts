import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';
import { Response } from './../../models/response';
import { Categoria } from '../../models/categoria';
import { DialogCategoriaComponent } from '../dialog/dialog-categoria/dialog-categoria.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

  public lista: Categoria[];
  public columnas: string[] = ['No', 'Nombre', 'Descripcion'];
  constructor(private Categoria: AlmacenWSService,
              public dialog: MatDialog ) {
    // this.Categoria.getCategoria().subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria(){
    this.Categoria.getCategoria().subscribe(data => {
      this.lista = data.data;
    });
  }

  openAdd(){
    console.log('Algo');
    const dialogRef = this.dialog.open(DialogCategoriaComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCategoria();
    });
  }
}
