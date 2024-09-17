import React from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css'; 

const Button = ({ number, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
};

Button.propTypes = {
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;