import mapping from './mapping';
import averageDuration from './averageDuration';
import { calculateOwnersExowners } from './calculateOwnersExowners';
import { deathStatistics } from './deathStatistics';
import { ObsoleteProductInterface } from './interfaces';

export default function obsoletionMagic (device:ObsoleteProductInterface):number {
  const deathAnalysis = deathStatistics(device);
  if (deathAnalysis.length === 0) {
    return 0;
  }

  const ownersExowners = calculateOwnersExowners(device);
  const totalPeople = ownersExowners.owners + ownersExowners.exOwners;
  const exOwnersPercentage = ownersExowners.exOwners * 100 / totalPeople;

  if (exOwnersPercentage === 100) {
    return 10;
  }

  //   Coeficient due to amount of death reasons: Calculated as y=2-1/#
  const deathReasonsCorrection = (2 - (1 / deathAnalysis.length));
  //   Mapped to fit the avaiblable space, up to 100% obsoletion
  const deathReasonsCorrectionMapped = mapping(deathReasonsCorrection, 1, 2, 0, (100 - exOwnersPercentage) * 0.5);

  let obsoletionTemporal = exOwnersPercentage + deathReasonsCorrectionMapped;
  const averageDevideDuration = averageDuration(device);
  // Coeficient due to the average duration of the device: calculated as y = -atan(x-2)*1/1.5 (centered in 2 as the reference duration per warranty and asymptotic at y -1.5 +1.5)
  const averrageADurationCorrection = -(Math.atan(parseFloat(averageDevideDuration) - 2) / 1.5);
  //   Mapped to fit the avaiblable space, up to 100% obsoletion, depending in whether the averrageADurationCorrection is possitive or negative
  let averageDeviceDurationMapped;
  if (averrageADurationCorrection >= 0) {
    averageDeviceDurationMapped = mapping(averrageADurationCorrection, -1.05, 1.05, 0, (100 - obsoletionTemporal) * 0.25);
  } else {
    averageDeviceDurationMapped = -1 * mapping(averrageADurationCorrection, -1.05, 1.05, 0, obsoletionTemporal);
  }

  obsoletionTemporal = obsoletionTemporal + averageDeviceDurationMapped;

  return parseFloat((obsoletionTemporal * 0.1).toFixed(2));
}
