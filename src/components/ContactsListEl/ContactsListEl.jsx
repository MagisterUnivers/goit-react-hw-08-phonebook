import PropTypes from 'prop-types';

export const ContactsListEl = ({ contacts, changeId }) => {
  return contacts.map(human => {
    return (
      <li key={human.id}>
        <p>
          {human.name}: {human.phone}
        </p>
        <button onClick={() => changeId(human.id)}>Delete</button>
      </li>
    );
  });
};

ContactsListEl.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  changeId: PropTypes.func.isRequired,
};
