import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private firestore: AngularFirestore) { }
  //con este metodo agregamos un producto al  firestore
  agregarProducto(producto: any): Promise<any>{
    return this.firestore.collection('productos').add(producto)
  }
  //con este metodo obtenemos el producto de firestore ordenada por la fecha de creacion
  getProducto(): Observable<any> {
    return this.firestore.collection('productos', ref => ref.orderBy('fechaCreacion')).snapshotChanges();
  }
  //con este metodo eliminamos el producto de firestore
  eliminarProducto(id: string): Promise<any>{
    return this.firestore.collection('productos').doc(id).delete();
  }
  //con este metodo obtenemos el producto de firestore mediante una id
  getProductos(id: string): Observable<any>{
    return this.firestore.collection('productos').doc(id).snapshotChanges();
  }
  //y con este metodo actualizamos el producto del firestore
  actualizarProducto(id: string, data: any): Promise<any>{
    return this.firestore.collection('productos').doc(id).update(data);
  }
}
