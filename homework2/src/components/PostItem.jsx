import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const PostItem = ({ post, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 10 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <EditModal post={post} />
        <DeleteModal post={post} onDelete={onDelete} />
      </CardActions>
    </Card>
  );
};

export default PostItem;
