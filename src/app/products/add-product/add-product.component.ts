import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productId: any
  AddProductForm = this.formBuilder.group({
    id: [] ,
    productname:[""],
    categoryId:[""],
     price: [],
    is_available:[""],
    productimg:[""],
   rating:[""],
   review:[""],
   vendor_name:[""]
  })
  constructor(private router:Router, private formBuilder:FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
let newProduct = {
  id: this.AddProductForm.value.id ,
    productname:this.AddProductForm.value.productname,
    categoryId:this.AddProductForm.value.categoryId,
     price: this.AddProductForm.value.price,
    is_available:this.AddProductForm.value.is_available,
    productimg:this.AddProductForm.value.productimg,
   rating:this.AddProductForm.value.rating,
   review:this.AddProductForm.value.review,
   vendor_name:this.AddProductForm.value.vendor_name
}
this.productService.addProduct(newProduct).subscribe((data)=>{
  alert("new product added successfully ")
  this.router.navigateByUrl("products")
})
  }
}
