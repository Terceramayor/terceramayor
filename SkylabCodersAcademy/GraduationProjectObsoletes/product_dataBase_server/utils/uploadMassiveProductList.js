import axios from 'axios';

export default function uploadMassiveProductList(arrayOfProducts) {
  arrayOfProducts.forEach(async (product) => {
    await axios.post('http://localhost:5000/megaCo/api/product', product);
  });
}
