import React from 'react';
import classes from './MyPosts.module.css';
import Post from './../Post/Post';

const MyPosts = (props) => {
  // let posts = [
  //   { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  //   { id: 2, message: 'Fine', likesCount: 11 }
  // ]

  // let postElements = posts
  // .map( p => <Post message={p.message} likesCount={p.likesCount} />);

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
      {/* {postElements} */}
      <Post message={props.message} likesCount={props.likesCount} />
    </div>
  </div>
}

export default MyPosts;