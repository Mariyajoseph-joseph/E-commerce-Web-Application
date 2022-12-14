import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import{ProductService} from '../product.service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

productId:any
productData: any

  constructor(private ProductService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe((data:any)=>{
  console.log(data)
  this.productId = data['id']
}
)
this.ProductService.viewProduct(this.productId).subscribe((item :any)=>{
  this.productData = item
})
  }

}
