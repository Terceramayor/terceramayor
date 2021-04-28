import { CommercialProductInterface } from './interfaces';

export function removeRepeatedEntries (arrayOfProducts:CommercialProductInterface[]):CommercialProductInterface[] {
  const filteredArrayOfProducts = arrayOfProducts.reduce((buildingArray, productToCheck, index) => {
    const firstIndex = arrayOfProducts.findIndex((product) => product._id === productToCheck._id);
    if (index === firstIndex) {
      buildingArray.push(productToCheck);
    }
    return buildingArray;
  }, []);
  return filteredArrayOfProducts;
}
