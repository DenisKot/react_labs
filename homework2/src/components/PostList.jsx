import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import { CircularProgress } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const removeFromList = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onDelete={() => removeFromList(post.id)} />
      ))}
    </div>
  );
};

export default PostList;
