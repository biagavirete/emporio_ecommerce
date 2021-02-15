import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { IoArrowForwardOutline, IoTrashOutline } from 'react-icons/io5';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { getProducts } from '../../store/ducks/cart/actions';

const Cart = () => {
  const token = localStorage.getItem("token")

  const dispatch = useDispatch();

  const beers = useSelector((state: any) => state.cart.products)

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    api.get('/beers', { headers: headers })
      .then(response => dispatch(getProducts(response.data)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-header">
            <h3>Meu carrinho</h3>
            <button type="button"><IoArrowForwardOutline size={35} /></button>
          </div>
          <div className="clear-icon">
            <button type="button"><IoTrashOutline size={30} /></button>
          </div>
          {beers !== undefined && (
            <div className="cart-item-container">
              <div className="left-side">
                <img src={beers[0].image} alt={beers[0].title} />
                <h3>{beers[0].price}</h3>
              </div>
              <div className="right-side">
                <h3>{beers[0].title}</h3>
                <div className="buttons-container">
                  <button className="orange-button">-</button>
                  <button className="white-button">0</button>
                  <button className="orange-button">+</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Cart;