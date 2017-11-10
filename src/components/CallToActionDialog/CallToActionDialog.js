import React from 'react';

import Dialog from 'material-ui/Dialog';
import messages from '../../helpers/messages';

const CallToActionDialog = props => (
  <Dialog title={messages.loginDialogTitle} open={props.open} style={{ textAlign: 'center' }} />
);

export default CallToActionDialog;
