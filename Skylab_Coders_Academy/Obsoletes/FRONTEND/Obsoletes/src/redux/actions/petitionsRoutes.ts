const petitionsRoutes = {

  OBSOLETES_RATED_PRODUCTS_LOCAL: 'http://localhost:4000/obsoletes/api/ratedProducts',
  OBSOLETES_RATED_PRODUCTS_SKYLAB: 'http://192.168.0.37:4000/obsoletes/api/ratedProducts',
  OBSOLETES_RATED_PRODUCTS_CASA: 'http://192.168.1.130:4000/obsoletes/api/ratedProducts',

  OBSOLETES_NEW_PRODUCT_LOCAL: 'http://localhost:4000/obsoletes/api/ratedProducts',
  OBSOLETES_NEW_PRODUCT_SKYLAB: 'http://192.168.0.37:4000/obsoletes/api/ratedProducts',
  OBSOLETES_NEW_PRODUCT_CASA: 'http://192.168.1.130:4000/obsoletes/api/ratedProducts',

  REQUEST_REGISTER_LOCAL: 'http://localhost:4000/obsoletes/api/user/register',
  REQUEST_REGISTER_SKYLAB: 'http://192.168.0.37:4000/obsoletes/api/user/register',
  REQUEST_REGISTER_CASA: 'http://192.168.1.130:4000/obsoletes/api/user/register',

  REQUEST_LOGIN_LOCAL: 'http://localhost:4000/obsoletes/api/user/login',
  REQUEST_LOGIN_SKYLAB: 'http://192.168.0.37:4000/obsoletes/api/user/login',
  REQUEST_LOGIN_CASA: 'http://192.168.1.130:4000/obsoletes/api/user/login',

  REQUEST_LOGOUT_LOCAL: 'http://localhost:4000/obsoletes/api/user/logout',
  REQUEST_LOGOUT_SKYLAB: 'http://192.168.0.37:4000/obsoletes/api/user/logout',
  REQUEST_LOGOUT_CASA: 'http://192.168.1.130:4000/obsoletes/api/user/logout',

  SEND_FEEDBACK_LOCAL: 'http://localhost:4000/obsoletes/api/ratedSingleProduct',
  SEND_FEEDBACK_SKYLAB: 'http://192.168.0.37:4000/obsoletes/api/ratedSingleProduct',
  SEND_FEEDBACK_CASA: 'http://192.168.1.130:4000/obsoletes/api/ratedSingleProduct',

  SEARCH_COMMERCIAL_PRODUCTS_LOCAL: 'http://localhost:5000/megaCo/api/product',
  SEARCH_COMMERCIAL_PRODUCTS_SKYLAB: 'http://192.168.0.37:5000/megaCo/api/product',
  SEARCH_COMMERCIAL_PRODUCTS_CASA: 'http://192.168.1.130:5000/megaCo/api/product'

};

export default petitionsRoutes;
