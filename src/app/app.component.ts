import { Component} from "@angular/core";
import { ProductsService } from "./products/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ProductsService]
})
export class AppComponent {
  title = "ir-dev-test";
  searchInput: string;
  dropdown: any;

  constructor(private prodService: ProductsService){
    this.prodService.getProducts().subscribe(event => {
      const values = event.map(item => item.brand);
      this.dropdown = [...new Set(values)];
      
    })
  }
}
