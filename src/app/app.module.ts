import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProducteditComponent } from './productedit/productedit.component'
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes:Routes=[
  {path:'orders', component:ProductlistComponent},
  {path:'', redirectTo:'orders',pathMatch:'full'},
  {path:'order', component:CreateproductComponent},
  {path:'edit/:id', component:ProducteditComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CreateproductComponent,
    ProductlistComponent,
    ProducteditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
