import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent {
  products:Product=new Product();
  id:number=this.products.id;
  constructor(private Service:ProductserviceService,
    private router:Router,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.id=this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::"+this.id);
    this.Service.findProduct(this.id).subscribe(
      data=>{
        console.log("GETTING A CONTACT..");
        console.log(data);
        this.products=data;
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);  
      }
    );
  }
  updateProduct(id:number){
    console.log("UPDATED ..");
    this.Service.createProduct(this.products).subscribe(
      data=>{
        console.log("UPDATING A CONTACT..");
        console.log(data);
        this.router.navigate(['/orders'])
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT..");
        console.log(error);
      });
    }
}
