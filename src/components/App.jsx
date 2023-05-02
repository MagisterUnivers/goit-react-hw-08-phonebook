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
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const localStorageContacts = localStorage.getItem('contacts');
  //   if (localStorageContacts) {
  //     return JSON.parse(localStorageContacts);
  //   }
  //   return [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });
  // const [filter, setFilter] = useState('');
  // const [custominput, setCustominput] = useState('');

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // useEffect(() => {
  //   console.log('App rendered!');
  //   const LOCAL_STORAGE = localStorage.getItem('contacts');
  //   if (LOCAL_STORAGE) {
  //     setContacts(JSON.parse(LOCAL_STORAGE));
  //   } else {
  //     console.log('Contacts is Empty!');
  //   }
  //   if (localStorage.getItem('custominput')) {
  //     localStorage.getItem('custominput') &&
  //       setCustominput(JSON.parse(localStorage.getItem('custominput')));
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log('DOM Updated!');
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const USER_NAME = name.value;
    const USER_NUMBER = number.value;
    const ARRAY_NAMES = contacts.map(contact => contact.name);
    if (!ARRAY_NAMES.includes(USER_NAME)) {
      // (prevContacts => [
      //   ...prevContacts,
      //   { name: USER_NAME, number: USER_NUMBER, id: nanoid() },
      // ]);
      dispatch(addContact({ name: USER_NAME, phone: USER_NUMBER }));
    } else {
      alert(`${USER_NAME} already in contacts`);
    }
    e.target.reset();
  };

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));

    // const { name, value } = evt.target;
    // if (name === 'filter') {
    //   setFilter(value);
    // } else if (name === 'custominput') {
    //   // setCustominput(value);
    // }
  };

  const changeId = id => {
    // dispatch(deleteContact(id));
    dispatch(deleteContact(id));

    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== id)
    // );
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

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
