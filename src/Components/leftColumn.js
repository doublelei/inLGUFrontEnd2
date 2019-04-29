'use strict';
import React, { Component } from 'react';
class Post extends Component {
    render() {
      return (
            <article className="hentry post has-post-thumbnail">
            <PostInfo />
            <PostContent />
            <PostBottom />
            <PostSide />
            </article>
      );
    }
  }
  
  export default Post;
  