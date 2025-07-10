import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Post not found');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/posts/${id}`);
        navigate('/');
      } catch {
        setError('Failed to delete post');
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p><strong>Category:</strong> {post.category?.name}</p>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`}>Edit</Link> |{' '}
      <button onClick={handleDelete} style={{ color: 'red' }}>Delete</button>
      <br />
      <Link to="/">Back to Posts</Link>
    </div>
  );
}