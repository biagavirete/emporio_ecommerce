import { action } from 'typesafe-actions'
import { CartTypes, IProduct } from './types'

export const getProducts = (payload: IProduct) => action(CartTypes.GET_PRODUCTS, payload);

export const getNumberCart = () => action(CartTypes.GET_NUMBER_CART);

export const addToCart = (payload: IProduct) => action(CartTypes.ADD_TO_CART, payload);

export const removeFromCart = (payload: IProduct) => action(CartTypes.REMOVE_FROM_CART, payload);

export const increaseQuantity = (payload: IProduct) => action(CartTypes.INCREASE_QUANTITY, payload);

export const decreaseQuantity = (payload: IProduct) => action(CartTypes.DECREASE_QUANTITY, payload);

export const clearCart = () => action(CartTypes.CLEAR_CART);

