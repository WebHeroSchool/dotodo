import Button from '@material-ui/core/Button';
import React from 'react';

const ButtonInput = ({ButtonText, btnType}) => (
  <Button
    variant="contained"
    color="primary"
    type={btnType}>
      {ButtonText}
  </Button>
);

export default ButtonInput;
