import obsoletionMagic from './obsoletionMagic';
import { ObsoleteProductInterface, StatsElement, CommercialProductInterface } from './interfaces';
import { Casuistic } from './enums';

export function createNewOboletesProduct (newProduct:CommercialProductInterface, newStatistics:StatsElement):ObsoleteProductInterface {
  const newObsoletesProduct = {

    originId: newProduct._id,
    productName: newProduct.name,
    thumbnailUrl: newProduct.thumbNail_url,
    brand: newProduct.brand,
    category: newProduct.category,
    obsoletion: 10,
    stats: [newStatistics],
    updatedDate: newStatistics.buyDate,
    place: Casuistic.MegaCo
  };

  const updatedObsoletion = obsoletionMagic(newObsoletesProduct);

  return { ...newObsoletesProduct, obsoletion: updatedObsoletion };
}
