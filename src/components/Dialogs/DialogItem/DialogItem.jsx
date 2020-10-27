import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      {/* <img className={classes.dialogItem} src="https://sun9-5.userapi.com/jzz4YfJog8IvY2hj8fn0tHYDvgNgwrC4dHzzXQ/Fy5lqDBXvnI.jpg" alt="333" /> */}
      <NavLink to={path}>{props.src} {props.name}</NavLink>
    </div>
  )
}

export default DialogItem;