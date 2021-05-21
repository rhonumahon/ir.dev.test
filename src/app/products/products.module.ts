import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsGridComponent } from "./products-grid.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsGridComponent
  ],
  exports: [
    ProductsGridComponent
  ],
  providers: [
  ]
})

export class ProductsModule { }
