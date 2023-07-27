import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
const textEditStyle = {
    margin: '10px 0',
  };

const EditModal = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleEdit = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, { title, body });
      setOpen(false);
    } catch (error) {
      console.error('Error updating post:', error);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} size="small">Edit</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={title}
            style={textEditStyle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Body"
            fullWidth
            multiline
            value={body}
            style={textEditStyle}
            onChange={(e) => setBody(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditModal;

