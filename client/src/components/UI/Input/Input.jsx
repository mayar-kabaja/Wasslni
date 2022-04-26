import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './Input.css';

import PropTypes from 'prop-types';
import TextError from '../../Form/ErrorMsg/ErrorMsg';

function Input({
  name, type, placeholder, ...props
}) {
  return (
    <div className=" m-4">

      <Field id={name} className="form-control" name={name} type={type} placeholder={placeholder} {...props} />

      <ErrorMessage name={name} component={TextError} className="error-message" />
    </div>
  );
}

Input.propTypes = {

  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,

};
export default Input;
