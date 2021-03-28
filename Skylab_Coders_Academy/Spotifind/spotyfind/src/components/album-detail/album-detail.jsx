import React from 'react';
import AlbumInfo from '../album-info/album-info';
import TrackItem from '../tracks/tracks';
import './album-detail.scss';

export default function AlbumDetail() {
  return (
    <section className="root__detail">
      <AlbumInfo />
      <TrackItem />
    </section>
  );
}
