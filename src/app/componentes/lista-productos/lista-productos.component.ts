import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: any[] =[];
  constructor(
    private _productoService: ProductoService,
    private toastr: ToastrService
  ) { 
    
  }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos() {
    this._productoService.getProducto().subscribe(data => {
      this.productos = [];
      data.forEach((element: any) => {
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.productos)
    });
  }

  eliminarProducto(id: string){
    this._productoService.eliminarProducto(id).then(() => {
      this.toastr.error('Producto eliminado');
    }).catch(error =>{
      console.log(error)
    })
  }
}
