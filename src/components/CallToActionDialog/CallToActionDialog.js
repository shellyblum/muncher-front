import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LoginForm from '../../components/LoginForm/LoginForm';
import messages from '../../helpers/messages';

const CallToActionDialog = ({ open, selectedRest, toggleCTADialog }) => {
  const actions = [
    <FlatButton label="Cancel" primary onClick={() => toggleCTADialog()} />,
    <FlatButton label="Book" primary disabled onClick={() => toggleCTADialog()} />
  ];
  return (
    <Dialog
      title={messages.CTADialogTitle}
      open={open}
      actions={actions}
      modal={false}
      style={{ textAlign: 'center' }}
    >
      {selectedRest.title}
      <LoginForm />
    </Dialog>
  );
};

CallToActionDialog.propTypes = {
  open: PropTypes.bool,
  selectedRest: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.arrayOf(PropTypes.string),
    lng: PropTypes.number,
    lat: PropTypes.number
  }),
  toggleCTADialog: PropTypes.func
};

CallToActionDialog.defaultProps = {
  open: false,
  selectedRest: {
    message: 'No restaurant name'
  },
  toggleCTADialog: () => null
};

export default CallToActionDialog;
