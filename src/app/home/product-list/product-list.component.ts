import { Component, OnInit } from "@angular/core";
import { IProductsCollection } from "../home.interface";
import { HomeService } from "../home.service";

@Component({
      selector: "home-product-list",
      templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit {
      products: IProductsCollection[] =[]

      constructor(private homeService: HomeService){}

      ngOnInit(): void {
            this.homeService.getProducts().subscribe((products) => this.products = products)
      }
}