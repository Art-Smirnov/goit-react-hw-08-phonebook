import React from 'react';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

export default AppBar;
