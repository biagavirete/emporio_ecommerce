import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import './styles.scss';
import { IoBeer } from 'react-icons/io5';
import { IBeer } from '../../types';
import { IoCartOutline } from 'react-icons/io5';

const Home = () => {
  const [beers, setBeers] = useState([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    api.get('/beers', { headers: headers })
      .then(response => setBeers(response.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="top-content">
          <div className="icon-container">
            <IoBeer size={40} />
          </div>
          <div className="text-container">
            <h3>  Destaques no Empório</h3>
          </div>
        </div>
        <div className="content">
          {beers !== undefined && beers.map((beer: IBeer) => (
            <div className="beer-container" key={beer.id}>
              <div className="top">
                <img src={beer.image} alt={beer.title} />
                <p>{beer.description}</p>
                <h3>{beer.title}</h3>
              </div>
              <div className="bottom">
                <strong>{beer.price}</strong>
                <button type="button">Adicionar <IoCartOutline size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;