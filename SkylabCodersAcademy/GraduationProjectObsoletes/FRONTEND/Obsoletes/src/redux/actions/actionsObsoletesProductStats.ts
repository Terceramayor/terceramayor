import axios from 'axios';
import actionTypes from './actionTypes';
import { ObsoleteProductInterface, combinedProductsInterface, actionObjectReturnLoadProduct, actionObjectReturnFeedback, actionObjectReturnvalidateDeathReason } from '../../utils/interfaces';
import petitionsRoutes from './petitionsRoutes';
import obsoletionMagic from '../../utils/obsoletionMagic';
import { createNewOboletesProduct } from '../../utils/createNewOboletesProduct';
import { Dispatch } from 'react';
import { Casuistic } from '../../utils/enums';

export function loadProduct (product: ObsoleteProductInterface):actionObjectReturnLoadProduct {
  const actionObject = {

    type: actionTypes.LOAD_PRODUCT_STATS,
    data: product

  };
  return actionObject;
}

export function feedbackNew (product: combinedProductsInterface, username:string):Function {
  let newStat = {
    broken: false,
    brokenDate: null,
    buyDate: new Date(),
    reason: '',
    user: ''
  };
  if (product.place === Casuistic.Obsoletes) {
    newStat = {
      broken: false,
      brokenDate: null,
      buyDate: new Date(),
      reason: '',
      user: username
    };
    const newStats = [...product.stats, newStat];

    const updatedProduct = { ...product, stats: newStats, updatedDate: newStat.buyDate };

    const updatedObsoletion = obsoletionMagic(updatedProduct);

    const finalUpdatedProduct = { ...updatedProduct, obsoletion: updatedObsoletion };

    return async (dispatch: Dispatch<actionObjectReturnFeedback>):Promise<void> => {
      const { data } = await axios.put(petitionsRoutes.SEND_FEEDBACK_CASA, finalUpdatedProduct);
      const actionObject = {
        type: actionTypes.FEEDBACK_NEW,
        data: data

      };
      dispatch(actionObject);
    };
  }

  newStat = {
    broken: false,
    brokenDate: null,
    buyDate: new Date(),
    reason: '',
    user: username
  };

  const newObsoletesProduct = createNewOboletesProduct(product, newStat);

  return async (dispatch: Dispatch<actionObjectReturnFeedback>):Promise<void> => {
    const { data } = await axios.post(petitionsRoutes.OBSOLETES_NEW_PRODUCT_CASA, newObsoletesProduct);
    const actionObject = {
      type: actionTypes.FEEDBACK_NEW,
      data: data

    };
    dispatch(actionObject);
  };
}

export function feedbackBroken (product:ObsoleteProductInterface, username:string, deathReasonFeedback) {
  let userStatPossition = 0;
  product.stats.forEach((stat, index) => {
    if (stat.user === username) {
      userStatPossition = index;
    }
  });

  const newStat = {
    broken: true,
    brokenDate: new Date(),
    buyDate: product.stats[userStatPossition].buyDate,
    reason: deathReasonFeedback,
    user: username
  };

  const productstatsUpdated = product.stats.map((stat, index) => {
    if (index === userStatPossition) {
      return newStat;
    } else {
      return stat;
    }
  });

  const updatedProduct = { ...product, stats: productstatsUpdated, updatedDate: newStat.brokenDate };

  const updatedObsoletion = obsoletionMagic(updatedProduct);

  const finalUpdatedProduct = { ...updatedProduct, obsoletion: updatedObsoletion };

  return async (dispatch : Dispatch<actionObjectReturnFeedback>):Promise<void> => {
    const { data } = await axios.put(petitionsRoutes.SEND_FEEDBACK_CASA, finalUpdatedProduct);

    const actionObject = {
      type: actionTypes.FEEDBACK_NEW,
      data: data

    };
    dispatch(actionObject);
  };
}

export function validateDeathReason (currentValue:number, increment:number, reset:boolean):actionObjectReturnvalidateDeathReason {
  const actionObject = {

    type: actionTypes.VALIDATE_DEATH_REASON,
    data: (reset === true) ? 0 : (currentValue + increment)

  };
  return actionObject;
}
