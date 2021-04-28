import React from 'react';
import {
  BrowserRouter, Route, Switch, Link, Redirect
} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import './App.scss';
import AlbumDetail from './components/album-detail/album-detail';
import UserProfile from './components/user-profile/user-profile';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import PrivateRoute from './components/authentication/authentication';
import stringsCompilation from './notMagicStrings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact render={() => <Dashboard status={`${stringsCompilation.INITIAL_RECOMMENDATIONS}`} />} />
          <Route path="/dashboard/returnRecommendationsSeed" render={() => <Dashboard status={`${stringsCompilation.RETURN_RECOMMENDATION_SEED}`} />} />
          <PrivateRoute path="/album-detail" component={AlbumDetail} />
          <PrivateRoute path="/user-profile" component={UserProfile} />
          <Redirect path="/dashboard" to="/" />
          <Route>
            <h1>End of File!</h1>
            <Link to="/">Go to Dashboard</Link>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
