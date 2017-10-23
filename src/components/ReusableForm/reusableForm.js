import React from 'react';
import TextField from 'material-ui/TextField';

const ReusableForm = ({ fields, errors, handleInputChange }) => (

  <div>

    {
      fields.map(field => (
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
      )
      )
    }

  </div>
)

export default ReusableForm;