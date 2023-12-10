import { createFeature, createReducer, on } from '@ngrx/store';
import { getProductsRequest } from './product.actions';

export interface Product {
  id: number;
  name: string;
  price: number;
}

const p = [
  {
    id: 1,
    name: 'product 1',
    price: 2,
  },
  {
    id: 1,
    name: 'product 1',
    price: 2,
  },
  {
    id: 2,
    name: 'product 2',
    price: 2,
  },
  {
    id: 3,
    name: 'product 3',
    price: 2,
  },
];

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(getProductsRequest, (state) => ({ ...state, products: p }))
  ),
});

export const {
  name: productFeatureKey,
  reducer: productReducer,
  selectProducts,
} = productFeature;
