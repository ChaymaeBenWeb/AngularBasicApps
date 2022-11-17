import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Iproduct } from "../model/product";
import { ProductService } from "../services/product.service";


@Component({
    selector:'pm-product',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{


  constructor(private productService: ProductService){
    
  }

//we can add or remove the type of our variable it's not necessary in type script if we initialise them 
    pageTitle :string= 'Product List';
    imageWidth=50;
    imageMargin=2;
    showImage: boolean = false;
    errorMessage:string = "Error";
    sub!: Subscription ;
  
// le _ ici est pour designer la variable comme privé 
    private _listFilter : string= '';
    get listFilter():string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log('In setter:', value);
      this.filterProducts= this.performFilter(value);
    }
    filterProducts: Iproduct[] = [];
    products: Iproduct[]=[];
    toggleImage(): void{
      //le point d'exclamation(logique Not operator) ici est pour renvoyer false si son opérande showImage dans ce cas est true est true si showImage est false
      this.showImage = !this.showImage;

    }
    ngOnInit(): void {
      this.sub= this.productService.getProducts().subscribe({
        next: products =>{
          this.products= products;
          this.filterProducts= this.products;


        }, 
        error: err => this.errorMessage = err
      });
      
     
      
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe;
    }
// methode pour filtrer une recherche 
    performFilter(filterBy:string): Iproduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((products: Iproduct)=> 
      products.productName.toLocaleLowerCase().includes(filterBy));
    }
    onRatingClicked(message:string): void{
      this.pageTitle = 'Product List:' + message;
    }
   
    

}