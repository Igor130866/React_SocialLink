import React from 'react';
import classes from './MyPosts.module.css';
import Post from './../Post/Post';

const MyPosts = () => {
  return <div className={classes.postBlock}>
    <h3>My_post</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
    </div>
    <div className={classes.posts}>
      <Post message='Hi, how are you?' likesCount='0' />
      <Post message='Its OK' likesCount='23' />
    </div>
  </div>
}

export default MyPosts;