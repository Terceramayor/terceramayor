import { ObsoleteProductInterface, calculateOwnersExownersReturn } from './interfaces';

export function calculateOwnersExowners (product:ObsoleteProductInterface):calculateOwnersExownersReturn {
  let owners = 0;
  let exOwners = 0;

  product.stats.forEach((stat) => {
    if (stat.broken === true) {
      exOwners = exOwners + 1;
    } else {
      owners = owners + 1;
    }
  });

  return { owners, exOwners };
}
