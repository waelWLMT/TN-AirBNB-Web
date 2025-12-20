import { NgFor } from "@angular/common";
import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
  selector: 'app-product-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
  template: `
    <ul>
      <li *ngFor="let p of products; trackBy: trackById">
        {{ p.name }} - {{ p.price }} €
      </li>
    </ul>
  `
})
export class ProductListComponent {

  @Input({ required: true }) products!: Product[];

  trackById = (_: number, p: Product) => p.id;
}
