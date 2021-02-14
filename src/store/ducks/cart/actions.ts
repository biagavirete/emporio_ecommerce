import { action } from 'typesafe-actions'
import { CartTypes, IProduct } from './types'

export const getProducts = (payload: IProduct) => action(CartTypes.GET_PRODUCTS, payload);

export const getNumberCart = () => action(CartTypes.GET_NUMBER_CART);

export const addToCart = (payload: any) => action(CartTypes.ADD_TO_CART, payload);

export const deleteCart = (payload: any) => action(CartTypes.DELETE_CART, payload);

export const increaseQuantity = (payload: any) => action(CartTypes.INCREASE_QUANTITY, payload);

export const decreaseQuantity = (payload: any) => action(CartTypes.DECREASE_QUANTITY, payload);
