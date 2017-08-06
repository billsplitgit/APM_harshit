
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import {ActivatedRoute, Router} from "@angular/router"
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styles:['.row{padding:10px;}', '.data-container{margin-top:0px; padding-left:65px}']
})

export class ProductDetailComponent implements OnInit{
pageTitle: string = 'Product Details';
product: IProduct;

constructor(private _route : ActivatedRoute,
private _router: Router,
private _productService: ProductService)
{}


ngOnInit(): void{
    let id=+ this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;   

    this._productService.getProduct(id)
         .subscribe(product => this.product = product);
}

onBack(): void{
    this._router.navigate(['/products'])
}
}
