import { operation } from './noMagicStrings';
import { Item } from './interfaces';

export default function deleteAddproduct (
  productsArray:Item[],
  productIdToOperate:number,
  operationToPerform:string
):Item[] {
  const productIndex = productsArray.findIndex((product) => product.id === productIdToOperate);
  // eslint-disable-next-line no-param-reassign
  productsArray[productIndex].attributes.quantity = (operationToPerform === operation.add)
    ? productsArray[productIndex].attributes.quantity + 1
    : productsArray[productIndex].attributes.quantity - 1;
  return productsArray;
}
