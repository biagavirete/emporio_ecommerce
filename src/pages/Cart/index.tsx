import React from 'react';
import Header from '../../components/Header';
import { IoArrowForwardOutline, IoTrashOutline } from 'react-icons/io5';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../store/ducks/cart/types';
import { decreaseQuantity, deleteCart, increaseQuantity } from '../../store/ducks/cart/actions';

const Cart = () => {

  const cartList = useSelector((state: any) => state.cart.carts)

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-header">
            <h3>Meu carrinho</h3>
            <button type="button"><IoArrowForwardOutline size={35} /></button>
          </div>

          {cartList !== undefined && cartList.map((cartItem: IProduct, key: any) => (
            <>
              <div className="clear-icon">
                <button type="button" onClick={() => dispatch(deleteCart(key))}><IoTrashOutline size={30} /></button>
              </div>
              <div className="cart-item-container" key={key}>
                <div className="left-side">
                  <img src={cartItem.image} alt={cartItem.title} />
                  <h3>{cartItem.price}</h3>
                </div>
                <div className="right-side">
                  <h3>{cartItem.title}</h3>
                  <div className="buttons-container">
                    <button className="orange-button" onClick={() => dispatch(decreaseQuantity(key))}>-</button>
                    <button className="white-button">{cartItem.quantity}</button>
                    <button className="orange-button" onClick={() => dispatch(increaseQuantity(key))}>+</button>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="cart-footer">
            <h3>Total: R$ </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;