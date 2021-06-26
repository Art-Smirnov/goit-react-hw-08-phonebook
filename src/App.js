import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import AppBar from './Components/AppBar';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
// import ContactForm from './Components/ContactForm';
// import ContactList from './Components/ContactList';
// import Filter from './Components/Filter';
import Container from './Components/Container';
// import Spiner from './Components/Spiner';
import routes from './routes';
import { contactsOperations, contactsSelectors } from './redux/contacts';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  render() {
    const { isLoadingContacts, error } = this.props;
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route path={routes.register} component={RegisterView} />
          <Route path={routes.login} component={LoginView} />
        </Switch>

        {/* <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <Spiner isLoading={isLoadingContacts} />
        <ContactList /> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
