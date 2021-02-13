import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import './styles.scss';
import { IoBeer } from 'react-icons/io5';

const Home = () => {
  const [showProducts, setShowProducts] = useState([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    api.get('/beers', { headers: headers })
      .then(response => console.log('beers', response.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <div className="main-container">
        <h1>Home</h1>
        <IoBeer size={40} />
      </div>
    </>
  );
}

export default Home;