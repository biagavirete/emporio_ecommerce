import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../store/ducks/Cart/types';
import {
  decreaseQuantity,
  removeFromCart,
  increaseQuantity,
  clearCart
} from '../../store/ducks/Cart/actions';

import { formatValue } from '../../utils/formatValue';
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoCloseCircleOutline,
  IoTrashOutline
} from 'react-icons/io5';
import './styles.scss';

const Cart = () => {
  const items = useSelector((state: any) => state.cart);
  const { numberCart } = useSelector((state: any) => state.cart)
  let cartList: IProduct[] | undefined = [];

  let totalCart = 0;

  Object.keys(items.carts).forEach(function (item) {
    const formattedPrice = formatValue(items.carts[item].price)
    totalCart += items.carts[item].quantity * formattedPrice;
    cartList?.push(items.carts[item]);
  })

  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  function placeOrder() {
    if (numberCart !== 0) {
      dispatch(clearCart());
      toast.success('Pedido realizado com sucesso!')
    } else {
      toast.error('Carrinho vazio! Adicione itens para finalizar a compra.')
    }
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-header">
          <h3>Meu carrinho</h3>
          <button type="button" onClick={() => placeOrder()}>
            <IoArrowForwardOutline size={35} />
          </button>
        </div>
        {totalCart === 0 && (
          <>
            <div className="empty-cart">
              <IoCloseCircleOutline size={60} />
              <strong>Carrinho vazio</strong>
            </div>
          </>
        )}

        {cartList !== undefined &&
          cartList.map((cartItem: IProduct, key: any) => (
            <>
              <div className="clear-icon">
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(key))}>
                  <IoTrashOutline size={30} />
                </button>
              </div>
              <div className="cart-item-container" key={key}>
                <div className="left-side">
                  <img src={cartItem.image} alt={cartItem.title} />
                  <h3>{cartItem.price}</h3>
                </div>
                <div className="right-side">
                  <h3>{cartItem.title}</h3>
                  <div className="buttons-container">
                    <button
                      className="orange-button"
                      onClick={() => dispatch(decreaseQuantity(key))}>
                      -
                  </button>
                    <button
                      className="white-button">
                      {cartItem.quantity}
                    </button>
                    <button
                      className="orange-button"
                      onClick={() => dispatch(increaseQuantity(key))}>
                      +
                  </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        <div className="cart-footer">
          <Link to="/home">
            <IoArrowBackOutline size={25} />
          Continuar comprando
          </Link>
          <h3>Total: {formatter.format(totalCart)} </h3>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default Cart;