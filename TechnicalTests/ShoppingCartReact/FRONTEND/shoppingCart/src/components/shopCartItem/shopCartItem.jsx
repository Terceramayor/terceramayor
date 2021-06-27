/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteItemFromShoppingCart, increaseItemStock } from '../../REDUX/actions/actions';
import deleteButton from '../../assets/deletItem.png';
import './shopCartItem.scss';

function ShopCartItem({ item, actions }) {
  return (
    <div className="shopping-cart__item">
      <div className="item_image-name">
        <img
          className="product-item__thumbnail"
          src={item.image_url}
          alt="Product"
        />
        <span className="product-item__property--formating">{item.name}</span>
      </div>
      <div className="price-delete">
        <span className="product-item__property--formating cart-item-price">{`${item.price}€`}</span>

        <button
          aria-label="delete Item"
          type="button"
          className="product-item__delete"
          onClick={() => {
            actions.deleteItemFromShoppingCart(item._id);
            actions.increaseItemStock(item._id);
          }}
        >
          <img className="product-item__delete-icon cart-item-delete" src={deleteButton} alt="product" />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({

  actions: bindActionCreators({ deleteItemFromShoppingCart, increaseItemStock }, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartItem);
