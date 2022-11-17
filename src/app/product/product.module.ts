import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpace } from '../shared/convertToSpace.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpace, 
   

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products', component: ProductListComponent},
      {
        path:'products/:id',
        canActivate:[ProductDetailGuard],
         component:ProductDetailComponent}

    ]),
    SharedModule
  ]
})
export class ProductModule { }
