import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  ngOnInit(): void { }

  products:Product=new Product();

  constructor(private Service:ProductserviceService,
  private router:Router) { }

  onSubmit(){
    console.log(this.products);
    this.saveProduct();
  }
  saveProduct(){
    this.Service.createProduct(this.products).subscribe(
      data=>{
        console.log("SUCCESSFULL........");
        console.log(data);
        this.redirectToProductList()
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      }
    );
  }
  redirectToProductList(){
    this.router.navigate(['/orders']);
  }
 
}
