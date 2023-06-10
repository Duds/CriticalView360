// Post.js
import React from 'react';
import { Typography } from '@mui/material';

const Post = ({ post }) => {
  return (
    <div className="post">
      <Typography variant="h3" component="h3">{post.title}</Typography>
      <Typography variant="body2" component="p">{post.content}</Typography>
    </div>
  );
};

export default Post;
