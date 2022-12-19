import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/ducks/User/actions';

import { IoCartOutline, IoHomeOutline } from 'react-icons/io5';
import './styles.scss';
import Logo from '../Logo';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");

  const { numberCart } = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    if (token) {
      api.get('/categories', { headers: headers })
        .then(response => setCategories(response.data));

      api.get('/users', { headers: headers })
        .then(response => dispatch(getUsers(response.data)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const users = useSelector((state: any) => state.users.users);


  return (
    <>
      {token ?
        <>
          <div className="header-container">
            <div className="upper-menu">
              <strong>A Maior
                <strong id="orange-background">Loja Especializada de Cervejas</strong>
                do Brasil.</strong>
            </div>
            <div className="logo-cart-menu">
              <div className="logo-area">
                <Logo />
              </div>
              <div className="icons-area">
                {users !== undefined && <strong>Olá, {users[users.length - 1].name}!</strong>}
                <Link to="/home"><IoHomeOutline size={35} />Home</Link>
                <div className="cart-icon">
                  <Link to="/cart"><IoCartOutline size={35} /><span className="cart-badge">{numberCart}</span>Carrinho</Link></div>
              </div>
            </div>
            <div className="categories-nav">
              <ul id="links">
                {categories !== undefined &&
                  categories.map((category: string) => (
                    <li key={category}><Link to="/home">{category}</Link></li>
                  ))}
              </ul>

            </div>
          </div>
        </>
        : null}

    </>
  );
};

export default Header;