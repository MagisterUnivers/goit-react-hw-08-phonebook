import React from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from '../redux/Auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(registrationThunk({ name, email, password }));
  };

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
    <div className="flex justify-center items-center h-screen bg-darkMain">
      <form style={styles.form} onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl">Registration form </h1>
        <input
          style={styles.input}
          name="name"
          type="text"
          placeholder="Name..."
        />
        <input
          style={styles.input}
          name="email"
          autoComplete="off"
          type="text"
          placeholder="Email..."
        />
        <input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Password..."
        />
        <button style={styles.button}>SignUP</button>
      </form>
    </div>
  );
};

export default RegisterPage;
