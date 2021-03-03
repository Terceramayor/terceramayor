/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductListItem from '../productItem/productListItem';
import loadAvailableItems from '../../REDUX/actions/actions';
import './productList.scss';

function Productlist({ products, actions }) {
  useEffect(() => {
    actions.loadAvailableItems();
  }, []);

  return (
    <div className="products-list__container">
      {products?.map((product) => <ProductListItem product={product} />)}
    </div>
  );
}

const mapStateToProps = (state) => ({

  products: state.itemsList

});

const mapDispatchToProps = (dispatch) => ({

  actions: bindActionCreators({ loadAvailableItems }, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Productlist);
