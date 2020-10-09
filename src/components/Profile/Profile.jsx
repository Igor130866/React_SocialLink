import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'Fine', likesCount: 11 }
  ]

  let postElements = posts
  .map( p => <MyPosts message={p.message} likesCount={p.likesCount} />);

  return (
    <div>
      <ProfileInfo />
      {postElements}
      {/* <MyPosts /> */}
    </div>
  )
}

export default Profile;