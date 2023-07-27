import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';


const DeleteModal = ({ post, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
      setOpen(false);
      onDelete(post.id);
    } catch (error) {
      console.error('Error deleting post:', error);
      setOpen(false);
    }
  };

return (
  <div>
    <Button onClick={() => setOpen(true)} size="small">Delete</Button>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this post?
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleDelete} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
};

export default DeleteModal;
