// import { useState, useEffect } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts-slice';
import { getContacts, getFilter } from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const [filter, setFilter] = useState('');

  // const filterInput = ({ target }) => setFilter(target.value);

  // const filterContactList = () => {
  //   // return contacts.filter(({ name }) => {
  //   //   return name.toLowerCase().trim().includes(filter.toLowerCase().trim());
  //   // });

  //   return contacts;
  // };

  // const filteredContacts = filterContactList();
  // const isContacts = Boolean(filteredContacts.length);
  const isContacts = true;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <div style={{ marginBottom: '30px', width: '350px' }}>
          <h2 style={{ marginBottom: '10px', fontSize: '40px' }}>PhoneBook</h2>
          <ContactForm />
        </div>
        <div>
          <h3 style={{ marginBottom: '10px', fontSize: '30px' }}>Contacts</h3>
          {/* <Filter filter={filter} filterInput={filterInput} /> */}
          {isContacts ? (
            <ContactList contacts={contacts} />
          ) : (
            <p style={{ fontSize: 18, color: '#010101' }}>
              There are no contacts in your phonebook
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
