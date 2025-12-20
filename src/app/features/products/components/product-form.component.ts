import { Component, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { Product } from "../models/product.model";

@Component({
  selector: 'app-product-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="name" placeholder="Name" />
      <input type="number" formControlName="price" placeholder="Price" />
      <button type="submit" [disabled]="form.invalid">
        Add
      </button>
    </form>
  `
})
export class ProductFormComponent {

  @Output() create = new EventEmitter<Omit<Product, 'id'>>();

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    price: new FormControl(0, { nonNullable: true })
  });

  submit() {
    if (this.form.valid) {
      this.create.emit(this.form.getRawValue());
      this.form.reset({ name: '', price: 0 });
    }
  }
}
