import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  product:Product[]=[];
  constructor(private service:ProductserviceService, private routes:Router){
   
  }
  ngOnInit():void{this.getAllProducts()}

  getAllProducts(){
    this.service.getAllProducts()
    .subscribe(data =>{
      this.product=data})
  }
  deleteProduct(id:number){
    this.service.removeProduct(id)
    .subscribe(data =>{
      console.log("Success")
      console.log("The item got deleted")
      this.getAllProducts()
    },
    //error =>{
      //console.log("Failed")
      //console.log(error)
    //}
    ) 
    }
  editProduct(id:number){
    console.log("Edited:: "+id)
    this.routes.navigate(['/edit',id])
  }

}
