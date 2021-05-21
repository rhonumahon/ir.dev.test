import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
  selector: "products-table",
  templateUrl: "products-grid.component.html",
  styleUrls: [],
  providers: [ProductsService]
})
export class ProductsGridComponent {
  public data: any;
  constructor(public prodService: ProductsService){}
  ngOnInit(): void {
    this.prodService.getProducts().subscribe(event =>{
      this.data = event;
    });
  }
}
