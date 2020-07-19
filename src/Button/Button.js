import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';

const ButtonInput = ({ButtonText}) => (
  <Button
    variant="contained"
    color="primary"
  >
    {ButtonText}
  </Button>
);

Button.propTypes = {
  ButtonText: PropTypes.string,
};

export default ButtonInput;
