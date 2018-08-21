import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = props => {
  const scrollToElement = e => {
    const element = e.target.dataset.element;
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -88
    });
    props.onClose();
  };

  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <List component="nav">
        <ListItem button data-element="featured" onClick={scrollToElement}>
          Event Starts in
        </ListItem>
        <ListItem button data-element="venuenfo" onClick={scrollToElement}>
          Venue NFO
        </ListItem>
        <ListItem button data-element="highlights" onClick={scrollToElement}>
          Highlights
        </ListItem>
        <ListItem button data-element="pricing" onClick={scrollToElement}>
          Pricing
        </ListItem>
        <ListItem button data-element="location" onClick={scrollToElement}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
