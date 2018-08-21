import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const AppButton = props => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{ backgroundColor: props.bck, color: props.color }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
      {props.text}
    </Button>
  );
};

export default AppButton;
