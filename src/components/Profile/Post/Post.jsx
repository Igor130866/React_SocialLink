import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return <div>

    <div className={classes.item}>
      <img src='https://pbs.twimg.com/profile_images/437358670247378944/ogUMvLlW.jpeg' alt="avatar" />
          {props.message}
          <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>

  </div>
}

export default Post;