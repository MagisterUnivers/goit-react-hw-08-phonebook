import PropTypes from 'prop-types';

export const ContactForm = ({ handleSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleNameChange = e => {
  //   setName(e.target.value);
  // };

  // const handleNumberChange = e => {
  //   setNumber(e.target.value);
  // };

  // const onSubmit = e => {
  //   e.target.preventDefault();
  //   setName('');
  //   setNumber('');
  //   handleSubmit();
  // };

  return (
    <div className="wrapper">
      <h1>Name</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          className="result"
          // value={name}
          // onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2 className="title">Number</h2>
        <input
          type="tel"
          name="number"
          className="result"
          // value={number}
          // onChange={handleSubmit}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="btn">Add Contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
