import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name='Dimych' id='1' />
        <DialogItem name='Vova' id='2' />
        <DialogItem name='Misha' id='3' />
        <DialogItem name='Egor' id='4' />
        <DialogItem name='Nastya' id='5' />

      </div>
      <div className={classes.messages}>
        <Message message='Ну-Ну' />
        <Message message='Ky-Ky' />
        <Message message='Yo' />
      </div>
    </div>
  )
}
export default Dialogs;