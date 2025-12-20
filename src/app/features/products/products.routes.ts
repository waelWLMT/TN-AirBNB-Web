import { Routes } from "@angular/router";
import { ProductsPage } from "./pages/products.page";
import { ProductService } from "./services/product.service";

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsPage,
    providers: [ProductService]
  }
];
