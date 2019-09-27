import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, field, form: { touched, errors }, }) => {


  console.log(field);

  return (
    <div>
      <div className="form-group__inner">
        <input
          type={type}
          name={field.name}
          className="form-control"
          autoComplete="off"
        />
        <label>{label}</label>
        <i className="form-group__bar"/>
      </div>
      {touched[field.name] && errors[field.name] && (
        <p>{errors[field.name]}</p>
      )}

    </div>
  );
};


Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {};

export default Input;
