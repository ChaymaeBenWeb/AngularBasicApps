import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      /*{path:'products', component: ProductListComponent},
      {
        path:'products/:id',
        canActivate:[ProductDetailGuard],
         component:ProductDetailComponent},///look at product.module.ts*/
      { path: 'welcome', component: HomeComponent },                
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,//cela rétabli les routes pour la racine de notre application
    
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
