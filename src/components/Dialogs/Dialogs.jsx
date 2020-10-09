import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Vova' },
    { id: 3, name: 'Misha' },
    { id: 4, name: 'Egor' },
    { id: 5, name: 'Nastya' }
  ]

  let messages = [
    { id: 1, message: 'Ну-Ну' },
    { id: 2, message: 'Ky-Ky' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ]

  let dialogElements = dialogsData
  .map( d => <DialogItem name={d.name} id={d.id} />);   

  let messageElements = messages
  .map(m => <Message message={m.message} />);
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogElements}
      </div>
      <div className={classes.messages}>
        {messageElements}
      </div>
    </div>
  )
}
export default Dialogs;