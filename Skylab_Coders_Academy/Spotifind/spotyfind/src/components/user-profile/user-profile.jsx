import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import UserSummary from './user-summary/user-summary';
import UserFavs from './user-favs/user-favs';
import './user-profile.scss';

import { retrieveUserData } from '../../flux/actions/actions';

import spotifindStore from '../../flux/stores/stores';

export default function UserProfile() {
  const { user: { name } } = useAuth0();
  const [userData, setUserData] = useState(
    spotifindStore.getUserData()
  );
  function onChanges() {
    setUserData(spotifindStore.getUserData());
  }
  useEffect(() => {
    spotifindStore.addEventListener(onChanges);

    return () => {
      spotifindStore.removeEventListener(onChanges);
    };
  });

  useEffect(() => {
    retrieveUserData(name);
  }, []);

  if (!userData) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <main className="root__user-profile">
        <UserSummary userData={userData} />
        <UserFavs userData={userData} />
      </main>
    </>
  );
}
