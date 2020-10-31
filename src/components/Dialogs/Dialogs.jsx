import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let newMessageElement = React.createRef();
  let dialogElements = props.state.dialogs.map( d => <DialogItem name={d.name} src={d.src} id={d.id} />);  
  let messageElements = props.state.messages.map(m => <Message message={m.message} />);
  let addMessage = () => {
    let textMessage = newMessageElement.current.value;
    alert (textMessage);
  }
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogElements}
      </div>
      <div className={classes.messages}>
        {messageElements}
        <textarea ref = {newMessageElement}></textarea>
        <button onClick ={ addMessage }>add Message</button>
      </div>
    </div>

  )
}
export default Dialogs;