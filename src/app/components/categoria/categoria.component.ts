import { Component, OnInit } from '@angular/core';
import { AlmacenWSService } from '../../services/almacen-ws.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

  constructor(private Categoria: AlmacenWSService) {
    this.Categoria.getCategoria().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }
}
