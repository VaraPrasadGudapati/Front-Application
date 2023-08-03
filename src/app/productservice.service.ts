import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private baseUrl="http://localhost:8080"
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/orders')
  }
  createProduct(products:Product):Observable<Object>{
    return this.http.post('http://localhost:8080/order',products,{responseType:"text"})
  }
  removeProduct(id:number):Observable<Object>{
    return this.http.delete('http://localhost:8080/orders'+'/'+id,{responseType:"text"})
  }
  findProduct(id:number):Observable<Product>{
    return this.http.get<Product>('http://localhost:8080/orders'+'/'+id)
  }
}
