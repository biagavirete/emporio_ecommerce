export enum CartTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_NUMBER_CART = 'GET_NUMBER_CART',
  ADD_TO_CART = 'ADD_TO_CART',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  DELETE_CART = 'DELETE_CART'
}

export interface IProductState {
  numberCart: number;
  carts: IProduct[];
  products: IProduct[];

}

export interface IProduct {
  id: number;
  description: string;
  image: string;
  title: string;
  price: string;
  quantity: number
}