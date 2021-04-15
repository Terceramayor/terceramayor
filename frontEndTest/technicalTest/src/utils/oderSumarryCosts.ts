import { ShoppingCart } from './interfaces';

export default function oderSumarryCosts(currentShoppingCart:ShoppingCart) {
  let cost = 0;
  currentShoppingCart.data.stores.data.forEach((store) => {
    store.relationships.items.forEach((item) => {
      cost += parseFloat(item.attributes.current_unit_price) * item.attributes.quantity;
    });
  });

  return {
    total: (cost + cost * 0.16).toFixed(2),
    gross: cost.toFixed(2),
    taxes: (cost * 0.16).toFixed(2)
  };
}
