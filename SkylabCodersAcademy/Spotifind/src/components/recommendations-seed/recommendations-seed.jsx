import React, { useEffect, useState } from 'react';
import './recommendations.scss';
import spotifindStore from '../../flux/stores/stores';
import RecommendationItem from './recommendation-seed-item/recommendationItem-seed';

export default function RecommendationsSeeds() {
  // eslint-disable-next-line max-len
  const [currentrecommendationsSeed, setRecommendationsSeed] = useState(spotifindStore.getRecommendationsSeed());

  function onChanges() {
    setRecommendationsSeed(spotifindStore.getRecommendationsSeed());
  }

  useEffect(() => {
    spotifindStore.addEventListener(onChanges);

    return () => {
      spotifindStore.removeEventListener(onChanges);
    };
  }, [currentrecommendationsSeed]);

  return (
    <>
      <h2 className="recommendations__title">Recommendations</h2>
      <section className="dashboard__recommendations">
        {currentrecommendationsSeed?.map((recommendation) => (
          <RecommendationItem
            currentRecommendation={recommendation}
            getBackData={currentrecommendationsSeed}
          />
        ))}
        ;
      </section>
    </>
  );
}
