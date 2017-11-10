import React from 'react';
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import messages from '../../helpers/messages';

const CallToActionDialog = ({ open }) => <Dialog title={messages.CTADialogTitle} open={open} style={{ textAlign: 'center' }} />;

CallToActionDialog.propTypes = {
  open: PropTypes.bool
};

CallToActionDialog.defaultProps = {
  open: false
};

export default CallToActionDialog;
