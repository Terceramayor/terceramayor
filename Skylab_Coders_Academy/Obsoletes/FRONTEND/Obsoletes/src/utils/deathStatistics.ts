import { ObsoleteProductInterface, deathStatistic } from './interfaces';

export function deathStatistics ({ stats }:ObsoleteProductInterface):deathStatistic[] {
  const deathReasons = [];
  const deathReasonsStatistics = [];
  stats.forEach((statistic) => {
    const { reason } = statistic;
    if (!deathReasons.includes(reason) && statistic.broken === true) {
      deathReasons.push(reason);
    }
  });
  let totalCount = 0;
  deathReasons.forEach(deathReasonToCompare => {
    let count = 0;

    let duration = 0;
    stats.forEach(statistic => {
      const { reason } = statistic;

      if (reason === deathReasonToCompare) {
        count = count + 1;
        totalCount = totalCount + 1;
        const buy = new Date(statistic.buyDate);
        const broke = new Date(statistic.brokenDate);
        duration = duration + broke.getTime() - buy.getTime();
      }
    });

    deathReasonsStatistics.push({
      deathReason: deathReasonToCompare,
      amount: count,
      averageDuration: ((duration / count) / (1000 * 60 * 60 * 24 * 365)).toFixed(2)
    });
  });
  const deaths = deathReasonsStatistics.map((deathReasonsStatistic) => {
    return { ...deathReasonsStatistic, percentageDeathReason: (deathReasonsStatistic.amount * 100 / totalCount).toFixed(1) };
  });

  return deaths;
}
