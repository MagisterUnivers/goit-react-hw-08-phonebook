import { ContactForm } from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contactsSelectors';
import { setFilter } from 'redux/contactsSlice';
import styled from 'styled-components';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { Suspense, useEffect } from 'react';
import Navigation from './Navigation';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export function App() {
  return (
    <>
      <Routes>
        {' '}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route path="contacts" element={<ContactsPage />}>
            {/* <Route path="/" element={<ContactsList />} />
            <Route path="add" element={<AddContact />} />
            <Route path="edit/:id" element={<EditContact />} /> */}
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>

      {/* <ContactForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <Filter handleChange={handleChange} />
      <ContactsList contacts={filteredContacts} changeId={changeId} /> */}
    </>
  );
}

/**
|============================
| Styled components
|============================
*/

const StyledButton = styled.button`
  background-color: tomato;
  &:hover {
    background-color: teal;
  }
`;
