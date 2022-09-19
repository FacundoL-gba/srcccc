import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  createProducto: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Producto';
  constructor(
    private fb: FormBuilder,
    private _productoService: ProductoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
    ) {
    this.createProducto = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarEditarProucto() {
    this.submitted = true;
    if (this.createProducto.invalid){
      return;
    }
    if (this.id === null){
      this.agregarProducto();
    }else{
      this.editarProducto(this.id);
    } 
  }

  agregarProducto(){
    const producto: any = {
      nombre: this.createProducto.value.nombre,
      precio: this.createProducto.value.precio,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date( )
    }
    this.loading = true;
    this._productoService.agregarProducto(producto).then(() => {
      this.toastr.success('¡Producto registrado con exito!');
      this.loading = false;
      this.router.navigate(['/productos']);
    }).catch(error => {
      console.log(error)
      this.loading = false;
    })
  }

  editarProducto(id: string) {
    const producto: any = {
      nombre: this.createProducto.value.nombre,
      precio: this.createProducto.value.precio,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date( )
    }
    this.loading = true;
    this._productoService.actualizarProducto(id, producto).then(() =>{
      this.loading = false;
      this.toastr.info('Producto Modificado');
      this.router.navigate(['/productos']);
    })
  }

  esEditar(){
    
    if(this.id !== null){
      this.loading = true;
      this._productoService.getProductos(this.id).subscribe(data => {
        this.loading = false;
        console.log(data)
        this.titulo = 'Editar Producto'
        this.createProducto.setValue({
          nombre: data.payload.data()['nombre'],
          precio: data.payload.data()['precio']
        })
      })
    }
  }
}