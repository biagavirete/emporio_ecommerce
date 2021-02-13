import React from 'react';
import Header from '../../components/Header';
import { IoArrowForwardOutline } from 'react-icons/io5';
import './styles.scss';

const Cart = () => {

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-header">
            <h3>Meu carrinho</h3>
            <IoArrowForwardOutline size={35} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;