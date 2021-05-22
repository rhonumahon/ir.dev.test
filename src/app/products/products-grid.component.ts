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
  @Input() selected;
  @Input() radio;
  public data: any;
  public rows: any;
  constructor(public prodService: ProductsService){}
  ngOnInit(): void {
    this.prodService.getProducts().subscribe(event =>{
      this.rows = this.data = event;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //SEARCH TASK
    this.rows = this.data.filter(item => item.brand.match(this.selected) && (this.radio == "all" ? item.quantity >= 0 : this.radio == "in-stock" ? item.quantity > 0 : this.radio == "out-of-stock" ? item.quantity == 0 : item.quantity  ) && (item.name.match(this.searchInput) || item.description.match(this.searchInput) || item.brand.match(this.searchInput)));

  }
}
