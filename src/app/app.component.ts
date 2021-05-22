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
  inputs: string;
  searchInput: string;
  dropdown: any;
  selected: any;
  radio: any = "all";

  constructor(private prodService: ProductsService){
    this.prodService.getProducts().subscribe(event => {
      const values = event.map(item => item.brand);
      this.dropdown = [...new Set(values)];
      
    })
  }
	
  search(){
    setTimeout(()=>{
      this.inputs.length >= 3 ? this.searchInput = this.inputs : this.searchInput = ""; //- The search should not fire unless a minimum of three characters have been typed. 
    },400) //- The search should only fire a maximum of once per 400 milliseconds.
  }
}
