import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from './Components/AppBar';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Contacts from './Components/Contacts/';
import Container from './Components/Container';
import routes from './routes';
import { authOperations } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route path={routes.register} component={RegisterView} />
          <Route path={routes.login} component={LoginView} />
          <Route path={routes.contacts} component={Contacts} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
