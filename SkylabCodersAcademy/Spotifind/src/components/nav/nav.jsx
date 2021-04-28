import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logoName from '../../assets/spotifind-logo-name-p.png';
import logo from '../../assets/Spotifind_LogoNoName.png';
import './nav.scss';

export default function Nav() {
  const {
    loginWithRedirect, logout, isAuthenticated, user
  } = useAuth0();

  return (
    <nav className="root-navigation">
      <div className="navigation__logo">
        <img className="logo--desktop" src={logoName} alt="Spotifind logo" />
        <img className="logo--mobile" src={logo} alt="Spotifind logo" />
      </div>
      <div className="navigation__user-home">
        {
          !isAuthenticated ? (<Link to="/user-profile" className="navigation__user" onClick={() => loginWithRedirect()}>Login</Link>) : (
            <>
              <Link to="/user-profile" className="navigation__user" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>
              <Link to="/user-profile" className="navigation__user">{user.name}</Link>
              <Link to="/dashboard" className="navigation__home">Home</Link>
            </>
          )
        }

      </div>
    </nav>
  );
}
