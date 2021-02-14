import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './ducks/cart'

const createRootReducer = () => combineReducers({
  cart: cartReducer,
})

const store = createStore(createRootReducer(), composeWithDevTools());

export { store };