/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './productListItem.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addToCartIcon from '../../assets/addToCart.png';
import { addItemToShoppingCart, decreaseItemStock } from '../../REDUX/actions/actions';

function ProductlistItem({ product, actions }) {
  return (
    <div className="product-item">
      <div className="product-name-price__container">
        <div>
          <span className="product-item__property--formating product-name">{product.name}</span>
          <div className="prodict-item__type">
            <span className="product-item__property--formating">{product.product_range.type}</span>
            <span className="product-item__property--formating">{product.product_range.segment}</span>
          </div>
        </div>
        <span className="product-item__property--formating price">{`${product.price}€`}</span>
      </div>
      <div className="product-cart-stock__container">

        { (product.stock > 0) ? (
          <>
            <span className="product-item__property--formating">
              In Stock:
              {' '}
              {product.stock}
            </span>
            <button
              type="button"
              className="product-item__buy"
              onClick={() => {
                actions.addItemToShoppingCart(product);
                actions.decreaseItemStock(product._id);
              }}
            >
              <img className="product-item__icon" src={addToCartIcon} alt="buy" />
            </button>

          </>
        ) : <span className="product-item__property--formating">Out of stock</span> }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

  actions: bindActionCreators({ addItemToShoppingCart, decreaseItemStock }, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductlistItem);
