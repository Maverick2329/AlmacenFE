import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';
import { Response } from './../../models/response';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

  public lista: Categoria[];
  public columnas: string[] = ['No', 'Nombre', 'Descripcion'];
  constructor(private Categoria: AlmacenWSService) {
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
    console.log('Algo')
  }
}
