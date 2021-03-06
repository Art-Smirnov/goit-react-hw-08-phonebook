import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getError,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};

export default contactsSelectors;
