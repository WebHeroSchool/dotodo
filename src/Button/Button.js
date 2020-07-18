import Button from '@material-ui/core/Button';
import React from 'react';

const ButtonInput = ({ButtonText}) => (
  <Button
    variant="contained"
    color="primary"
  >
    {ButtonText}
  </Button>
);

export default ButtonInput;
