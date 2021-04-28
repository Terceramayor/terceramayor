import { CommercialProductInterface, ObsoleteProductInterface, combinedProductsInterface } from './interfaces';
import { Casuistic } from './enums';

export function checkIfInObsoletesDb (arrayFromSearch:CommercialProductInterface[], arrayFromObsoletes:ObsoleteProductInterface[]):combinedProductsInterface[] {
  const combinedArray = [];

  arrayFromSearch.forEach(searchProduct => {
    combinedArray.push({ ...searchProduct, place: Casuistic.MegaCo });
    arrayFromObsoletes.forEach(obsoletesProduct => {
      if (searchProduct._id === obsoletesProduct.originId) {
        combinedArray.pop();
        combinedArray.push({ ...obsoletesProduct, place: Casuistic.Obsoletes });
      }
    });
  });

  return combinedArray;
}
