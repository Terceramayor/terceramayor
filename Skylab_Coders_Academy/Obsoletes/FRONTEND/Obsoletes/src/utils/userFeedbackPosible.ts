import { ObsoleteProductInterface, userFeedbackPosibleInterface } from './interfaces';

export default function userFeedbackPosible (product:ObsoleteProductInterface, currentuser:string):userFeedbackPosibleInterface {
  for (let i = 0; i < product.stats.length; i = i + 1) {
    if (product.stats[i].user === currentuser && product.stats[i].broken === false) {
      return { userAlreadyFeedback: true, isBroken: false };
    }

    if (product.stats[i].user === currentuser && product.stats[i].broken === true) {
      return { userAlreadyFeedback: true, isBroken: true };
    }
  }
  return { userAlreadyFeedback: false, isBroken: false };
}
