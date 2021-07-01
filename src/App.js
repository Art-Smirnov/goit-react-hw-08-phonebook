import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from './Components/AppBar';
import Container from './Components/Container';
import routes from './routes';
import { authOperations } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterView}
              redirectTo="/contacts"
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginView}
              redirectTo="/contacts"
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
