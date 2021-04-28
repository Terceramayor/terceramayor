import { ObsoleteProductInterface } from './interfaces';

export default function averageDuration ({ stats }:ObsoleteProductInterface):string {
  let totalDuration = 0;
  let count = 0;
  stats.forEach(stat => {
    if (stat.broken === true) {
      const buy = new Date(stat.buyDate);
      const broke = new Date(stat.brokenDate);
      totalDuration = totalDuration + broke.getTime() - buy.getTime();
      count = count + 1;
    }
  });
  return ((totalDuration / count) / (1000 * 60 * 60 * 24 * 365)).toFixed(2);
}
