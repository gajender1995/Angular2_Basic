import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../api/products/product.service';
import { error } from 'util';

@Component({
    selector: 'pm-product',
    templateUrl: '/product-item.html',
    styleUrls: ['./product-style.css']  
})

export class ProductItemComponent implements OnInit{
    productTitle : string = 'WWE';
    imageFlag : boolean = false;
    _filterText : string;
    products: any;
    filterProduct : any;

    constructor(private _productService : ProductService){

    }
    
    get filterText() : string {
        return this._filterText;
    }

    set filterText(value : string) {
        this._filterText = value;
        this.filterProduct = this._filterText ? this.performProduct(this._filterText) : this.products;

    } 

    performProduct(value : string ) : any {
        value = value.toLocaleLowerCase();
        return this.products.filter(( products : any ) => 
            products.productName.toLocaleLowerCase().indexOf(value) !== -1);
    }
    
    toggelImage() : void {
        this.imageFlag = !this.imageFlag;
        
    }
    ngOnInit() : void {
        console.log("ngOnInit");    
        this.products = this._productService.getProduct()
        .subscribe(products => {
            this.products = products;
            this.filterProduct = this.products;
        }, 
        error => error = <any>error);
        this.filterProduct = this.products;
       
    }

    onRatingClick(msg : string) : void {
        this.productTitle = "msg :" + msg;
        console.log("hi");
    } 
}