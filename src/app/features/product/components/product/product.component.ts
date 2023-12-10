import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductsRequest } from '../../store/product.actions';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsRequest());
  }
}
