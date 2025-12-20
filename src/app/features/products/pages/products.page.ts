import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { ProductFormComponent } from "../components/product-form.component";
import { ProductListComponent } from "../components/product-list.component";

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductFormComponent, ProductListComponent],
  template: `
    <h2>Products</h2>

    <app-product-form (create)="onCreate($event)" />

    <hr />

    <app-product-list [products]="products()" />
  `
})
export class ProductsPage {

  private service = inject(ProductService);

  products = this.service.products;

  onCreate(product: Omit<Product, 'id'>) {
    this.service.add(product);
  }
}
