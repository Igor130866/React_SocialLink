import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from "react-router-dom";
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Setting from './components/Setting/Setting';
import { addPost } from './redux/state';

const App = (props) => {

  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
          <Route path='/profile' render={ () => <Profile 
          profilePage={props.state.profilePage} 
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
          /> }/>

        </div>
      </div>


  )
}

export default App;
