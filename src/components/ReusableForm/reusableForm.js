import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const ReusableForm = ({ fields, errors, handleInputChange }) => (
  <div>
    {fields.map(field => (
      <div>
        <TextField
          name={field.name}
          type={field.type}
          hintText={field.name}
          floatingLabelText={field.name}
          errorText={errors[`${field.name}Error`]}
          onChange={handleInputChange}
        />
        <br />
      </div>
    ))}
  </div>
);

ReusableForm.propTypes = {
  fields: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default ReusableForm;
