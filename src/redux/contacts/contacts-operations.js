import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

// import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// const fetchAsyncContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const { data } = await axios.get('/contacts');
//     // Inferred return type: Promise<MyData>
//     return data;
//   },
// );

const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

const contactsOperations = { fetchContacts, addContact, deleteContact };
export default contactsOperations;
