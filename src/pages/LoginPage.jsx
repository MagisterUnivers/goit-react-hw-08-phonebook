import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../redux/Auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { selectAuthError, selectUserLoading } from '../redux/selectors';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectUserLoading);
  const isAuthError = useSelector(selectAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(loginThunk({ email, password }))
      .then(() => navigate('/contacts'))
      .catch(() => alert('Try again'));
    form.reset();
  };
  // dispatch(loginThunk({ email, password }))
  //   .then(() => form.reset())
  //   .catch(error => {
  //     alert('Try again');
  //     if (error.response.status !== 400) {
  //       navigate('/contacts');
  //     }
  //   });

  if (isLoadingUser && isAuthError) {
    return (
      <div>
        <h1>{isAuthError}</h1>
        <h2>Try to login again</h2>
      </div>
    );
  }

  // if (isLoadingUser) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 320,
      margin: '0 auto',
      marginBottom: 20,
      padding: 20,
      border: '1px solid #bdbdbd',
      borderRadius: 5,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
      width: '100%',
    },
    input: {
      display: 'inline-block',
      padding: '8px 12px',
      marginTop: '10px',
      fontSize: 16,
      borderRadius: 5,
      border: '1px solid #bdbdbd',
      outline: 'none',
      width: '100%',
    },
    button: {
      display: 'inline-block',
      padding: '8px 16px',
      fontSize: 18,
      fontWeight: 500,
      color: '#fff',
      backgroundColor: '#3f51b5',
      borderRadius: 5,
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      marginTop: 10,
    },
    buttonHover: {
      backgroundColor: '#303f9f',
    },
  };

  return (
    <div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input
          style={styles.input}
          name="email"
          placeholder="Email..."
          type="text"
        />
        <input
          style={styles.input}
          name="password"
          placeholder="Password..."
          type="password"
        />
        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
