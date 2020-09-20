import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';
import { Response } from './../../models/response';
import { Categoria } from '../../models/categoria';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

  public lista: Categoria[];
  public columnas: string[] = ['#', 'Nombre', 'Descripción', 'Opciones'];
  constructor(private Categoria: AlmacenWSService, private modal: NgbModal) {
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

  open(content){
    this.modal.open(content);
  }
}
