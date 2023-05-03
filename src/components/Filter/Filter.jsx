import PropTypes from 'prop-types';

export const Filter = ({ handleChange }) => {
  return (
    <div className="wrapper">
      {' '}
      <label>
        <h2 className="title">Find Contacts by name</h2>
        <input
          name="filter"
          className="result"
          onChange={handleChange}
          placeholder="Search name to find..."
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
