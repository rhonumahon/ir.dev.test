import { Component, Input, SimpleChanges } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
  selector: "products-table",
  templateUrl: "products-grid.component.html",
  styleUrls: [],
  providers: [ProductsService]
})
export class ProductsGridComponent {
  @Input() searchInput;
  public data: any;
  public rows: any;
  constructor(public prodService: ProductsService){}
  ngOnInit(): void {
    this.prodService.getProducts().subscribe(event =>{
      this.rows = this.data = event;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.searchInput.length < 3 ? this.rows = this.data : setTimeout(()=>{this.rows = this.data.filter(res => res.name.match(this.searchInput) || res.description.match(this.searchInput) || res.brand.match(this.searchInput))}, 400); 
  }
}
