import { CartTypes, IProduct, IProductState } from './types'

const initialStateProduct: IProductState = {
  numberCart: 0,
  carts: [],
  products: []
}

function cartReducer(state = initialStateProduct, action: any) {
  switch (action.type) {
    case CartTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case CartTypes.GET_NUMBER_CART:
      return {
        ...state
      }
    case CartTypes.ADD_TO_CART:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          image: action.payload.image,
          description: action.payload.description,
          price: action.payload.price
        }
        state.carts.push(cart);
      } else {
        let check = false;
        // eslint-disable-next-line array-callback-return
        state.carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            image: action.payload.image,
            description: action.payload.description,
            price: action.payload.price
          }
          state.carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1
      }
    case CartTypes.INCREASE_QUANTITY:
      state.numberCart++
      state.carts[action.payload].quantity++;

      return {
        ...state
      }
    case CartTypes.DECREASE_QUANTITY:
      let quantity = state.carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.carts[action.payload].quantity--;
      }
      return {
        ...state
      }
    case CartTypes.REMOVE_FROM_CART:
      let quantity_ = state.carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        carts: state.carts.filter((item: IProduct) => {
          return item.id !== state.carts[action.payload].id
        })
      }
    case CartTypes.CLEAR_CART:
      return {
        numberCart: 0,
        carts: [],
      }
    default:
      return state
  }
}

export default cartReducer;