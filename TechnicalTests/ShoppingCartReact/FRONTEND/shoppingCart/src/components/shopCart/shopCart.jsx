/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShopCartItem from '../shopCartItem/shopCartItem';
import { calculateTotalPrice, deleteAllCartItems } from '../../REDUX/actions/actions';
import './shopCart.scss';
import deleteButton from '../../assets/deletItem.png';

function ShopCart({ cartitems, cartPrice, actions }) {
  useEffect(() => {
    actions.calculateTotalPrice(cartitems);
  });
  return (
    <div className="shop-cart__container">
      <h5 className="cart">MY SHOPCART:</h5>

      {(cartitems.length > 0)
        ? (cartitems.map((item) => <ShopCartItem item={item} />)) : (<></>)}

      <div className="total__formating">
        TOTAL:
        <span className="total-amountOfItems__formating">
          {' '}
          (
          {cartitems.length}
          {' '}
          products)
        </span>
        {' '}
        {cartPrice}
        {' '}
        €
        {(cartitems.length > 0) ? (
          <button
            className="delete-button"
            type="button"
            onClick={() => {
              actions.deleteAllCartItems(cartitems);
            }}
          >
            <img className="product-item__delete-icon cart-item-delete" src={deleteButton} alt="product" />
            Remove all
          </button>
        ) : (<div />)}
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({

  cartitems: state.shoppingCartItems,
  cartPrice: state.shoppingCartPrice

});

const mapDispatchToProps = (dispatch) => ({

  actions: bindActionCreators(
    { calculateTotalPrice, deleteAllCartItems }, dispatch
  )

});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);
