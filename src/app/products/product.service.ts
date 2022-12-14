import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search= new BehaviorSubject("")
  constructor(private httpClient:HttpClient) { }
//api call to view all product
  viewAllProduct(){
const baseURL = "http://localhost:3000/products/"
return this.httpClient.get(baseURL)
  }
//api call to get a single product
viewProduct(productId:any){
  const baseURL = "http://localhost:3000/products/" +productId
return this.httpClient.get(baseURL)
}
 // api call to delete a product

 deletProduct(productId: any){
  const baseURL = "http://localhost:3000/products/" +productId
  return this.httpClient.delete(baseURL)
 }
 // api call to add a product
addProduct(productData:any){
  const baseURL = "http://localhost:3000/products/"
  return this.httpClient.post(baseURL,productData)

}
}
