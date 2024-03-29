import { useEffect } from 'react';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './Layout';
import {
  selectAuthError,
  selectIsOnline,
  selectUserLoading,
} from 'redux/selectors';
import { refreshThunk } from 'redux/Auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from 'HOC/PublicRoute';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { clearError } from 'redux/Auth/authSlice';

export function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoading = useSelector(selectUserLoading);
  const isAuthError = useSelector(selectAuthError);
  const isOnline = useSelector(selectIsOnline);
  const isRegistrationPage = location.pathname === '/';

  // useEffect(() => {
  //   dispatch(refreshThunk());
  //   dispatch(clearError());
  // }, [dispatch]); // esling-ignore-line

  useEffect(() => {
    dispatch(refreshThunk());
    setTimeout(() => {
      dispatch(clearError());
    }, 1000);
  }, [dispatch]);

  return isLoading ? (
    <div>
      {isAuthError ? (
        <>
          <h1>{isAuthError}</h1>
          {isRegistrationPage ? (
            <h2>
              Try another email, username and password, reload the page and try
              again again
            </h2>
          ) : (
            <h2>Check username and password, reload the page and try again</h2>
          )}
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
          <Route
            path="*"
            element={isOnline ? <ContactsPage /> : <LoginPage />}
          />
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
