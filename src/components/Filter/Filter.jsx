import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
