import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';


const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxi>
      <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
          <nav>
            <NavigationItems />
          </nav>
        </div>
    </Auxi>
  );
};

export default sideDrawer;
