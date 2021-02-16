import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { IoBeer } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProducts } from '../../store/ducks/Cart/actions';
import { IProduct } from '../../store/ducks/Cart/types';
import { Redirect } from 'react-router-dom';
import './styles.scss';

const Home = () => {
  const [newCartItem, setNewCartItem] = useState(false);

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

  const addItemToCart = (item: IProduct) => {
    dispatch(addToCart(item));
    setNewCartItem(true);
  }

  return (
    <>
      { token
        ?
        <div className="main-container">
          <div className="top-content">
            <div className="icon-container">
              <IoBeer size={40} />
            </div>
            <h3> Destaques no Empório</h3>
          </div>
          <div className="content">
            {beers !== undefined && beers.map((beer: IProduct) => (
              <div className="beer-container" key={beer.id}>
                <div className="top">
                  <img src={beer.image} alt={beer.title} />
                  <p>{beer.description}</p>
                  <h3>{beer.title}</h3>
                </div>
                <div className="bottom">
                  <strong>{beer.price}</strong>
                  <button type="button" onClick={() => addItemToCart(beer)}>Adicionar <IoCartOutline size={20} /></button>
                  {newCartItem && <Redirect to="/cart" />}
                </div>
              </div>
            ))}
          </div>
        </div>
        : <Redirect to="/" />}
    </>
  );
}

export default Home;