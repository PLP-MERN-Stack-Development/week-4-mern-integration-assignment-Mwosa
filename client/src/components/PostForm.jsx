import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';

export default function PostForm() {
  const { id } = useParams(); // Will be undefined for create
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    api.get('/categories')
      .then(res => setCategories(res.data))
      .catch(() => setCategories([]));
  }, []);

  // If editing, fetch the post
  useEffect(() => {
    if (id) {
      api.get(`/posts/${id}`)
        .then(res => {
          setTitle(res.data.title);
          setContent(res.data.content);
          setCategory(res.data.category?._id || '');
        })
        .catch(() => setError('Failed to load post'));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (id) {
        await api.put(`/posts/${id}`, { title, content, category });
      } else {
        await api.post('/posts', { title, content, category });
      }
      setLoading(false);
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.error ||
        'Failed to save post'
      );
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label><br />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label><br />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? (id ? 'Saving...' : 'Creating...') : (id ? 'Save Changes' : 'Create Post')}
        </button>
      </form>
    </div>
  );
}