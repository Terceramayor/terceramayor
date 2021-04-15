import { operation } from './noMagicStrings';

export default function deleteAddproduct(productsArray, productIdToOperate, operationToPerform) {
  const productIndex = productsArray.findIndex((product) => product.id === productIdToOperate);
  productsArray[productIndex].attributes.quantity = (operationToPerform === operation.add)
    ? productsArray[productIndex].attributes.quantity + 1
    : productsArray[productIndex].attributes.quantity - 1;
  return productsArray;
}
