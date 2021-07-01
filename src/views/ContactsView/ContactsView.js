import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Container from '../../Components/Container';
import Spiner from '../../Components/Spiner';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoadingContacts, error } = this.props;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <Spiner isLoading={isLoadingContacts} />
        <ContactList />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
