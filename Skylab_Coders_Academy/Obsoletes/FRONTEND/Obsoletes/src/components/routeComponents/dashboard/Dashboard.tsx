// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Dispatch, { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDashboard } from '../../../redux/actions/actionsObsoletesProductsObject';
import NavBar from './../../commonComponents/navBar/NavBar';
import Product from './../../commonComponents/product/Product';
import loadCase from '../../../utils/loadCase';
import { reduxStateInterface, DashboardPropsInterface, mapStateToPropsDashboardReturnInterface } from '../../../utils/interfaces';
import dashBoardStyles from './dashboardStyles';

function Dashboard ({ obsoletesProductsObject, actions, navigation }: DashboardPropsInterface) {
  useEffect(() => {
    actions.loadDashboard(loadCase.LAST_UPDATED);
  }, []);
  const { productsArray } = obsoletesProductsObject;

  const { dashboardContainer, products, helloUserProfile } = dashBoardStyles;
  return (

    <View style={dashboardContainer}>

      <NavBar navigation={navigation}/>
      <ScrollView contentContainerStyle={products}>

{(productsArray?.length === 0)
  ? (
  <Text style={helloUserProfile}>...</Text>
    )
  : (
      productsArray && productsArray.map((singleProduct) => (

    <Product singleProduct={singleProduct} navigation={navigation} key={singleProduct._id}/>

      ))
    )}

      </ScrollView>
    </View>

  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsDashboardReturnInterface => ({
  obsoletesProductsObject: state.obsoletesProductsObject
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ loadDashboard }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
