import React from 'react';
import Routes from './routes';
import './global.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
