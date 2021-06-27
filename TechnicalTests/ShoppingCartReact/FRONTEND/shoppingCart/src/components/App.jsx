import React from 'react';
import { Provider } from 'react-redux';
import Productlist from './productList/productList';
import store from '../REDUX/store/store';
import ShopCart from './shopCart/shopCart';
import './app.scss';

function App() {
  return (
    <Provider store={store()}>
      <div className="items-Cart__container">

        <Productlist />

        <ShopCart />
      </div>
    </Provider>
  );
}

export default App;
