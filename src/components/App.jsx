import { useEffect } from 'react';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { selectAuthError, selectUserLoading } from 'redux/selectors';
import { refreshThunk } from 'redux/Auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from 'HOC/PublicRoute';
import { PrivateRoute } from 'HOC/PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserLoading);
  const isAuthError = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]); // esling-ignore-line

  return isLoading ? (
    <div>
      {isAuthError ? (
        <>
          <h1>{isAuthError}</h1>
          <h2>Check username and password, reload the page and try again</h2>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  ) : (
    <>
      <Routes>
        {' '}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          >
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

// const StyledButton = styled.button`
//   background-color: tomato;
//   &:hover {
//     background-color: teal;
//   }
// `;
