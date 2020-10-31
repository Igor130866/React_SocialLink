import React from 'react';
import classes from './MyPosts.module.css';
import Post from './../Post/Post';

const MyPosts = (props) => {

  let postElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={classes.postBlock}>
    <h3>My_post</h3>
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
      </div>
    </div>
    <div className={classes.posts}>
      {postElements}
      {/* <Post message={props.message} likesCount={props.likesCount} /> */}
    </div>
  </div>
}

export default MyPosts;