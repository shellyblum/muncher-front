import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

const ReusableForm = ({
  fields,
  errors,
  handleInputChange,
  handleSubmit,
  submitLabel
}) => (
  <Form>
    {fields.map(field => (
      <div key={field.name}>
        <TextField
          name={field.name}
          type={field.type}
          floatingLabelText={field.placeHolder}
          errorText={errors[`${field.name}Error`]}
          onChange={handleInputChange}
        />
        <br />
      </div>
    ))}
    <RaisedButton primary onClick={handleSubmit} label={submitLabel} />
  </Form>
);

ReusableForm.propTypes = {
  fields: PropTypes.arrayOf(Object).isRequired,
  errors: PropTypes.objectOf(String).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired
};

export default ReusableForm;
