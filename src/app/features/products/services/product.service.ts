import { Injectable, signal } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {

  private productsSignal = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 }
  ]);

  get products() {
    return this.productsSignal.asReadonly();
  }

  add(product: Omit<Product, 'id'>) {
    const newProduct: Product = {
      ...product,
      id: Date.now()
    };

    this.productsSignal.update(p => [...p, newProduct]);
  }
}
