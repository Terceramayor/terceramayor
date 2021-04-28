import React, { useEffect, useState } from 'react';
import './recommendations.scss';
import spotifindStore from '../../flux/stores/stores';
import RecommendationItem from './recommendation-item/recommendationItem';

export default function Recommendations() {
  const [currentrecommendations, setRecommendations] = useState(
    spotifindStore.getRecommendations()
  );
  function onChanges() {
    setRecommendations(spotifindStore.getRecommendations());
  }

  useEffect(() => {
    spotifindStore.addEventListener(onChanges);

    return () => {
      spotifindStore.removeEventListener(onChanges);
    };
  }, [currentrecommendations]);

  return (
    <>
      <h2 className="title__new-releases">New releases</h2>
      <section className="dashboard__recommendations">
        {currentrecommendations?.map((recommendation) => (
          <RecommendationItem currentRecommendation={recommendation} />
        ))}
        ;
      </section>
    </>
  );
}
