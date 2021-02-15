import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './ducks/Cart'
import userReducer from './ducks/User';

const createRootReducer = () => combineReducers({
  cart: cartReducer,
  users: userReducer
})

const store = createStore(createRootReducer(), composeWithDevTools());

export { store };