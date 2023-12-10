import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductsRequest } from '../../store/product.actions';
import { selectProducts } from '../../store/product.reducer';
import { ProductState } from '../../store/product.reducer';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products$ = this.store.select(selectProducts);

  constructor(
    private store: Store<{ product: ProductState }>,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsRequest());

    this.productService
      .getProducts()
      .pipe()
      .subscribe((res) => console.log('produits: ' + res));
  }
}
