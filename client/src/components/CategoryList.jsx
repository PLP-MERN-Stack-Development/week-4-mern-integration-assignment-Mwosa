import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    api.get('/categories')
      .then(res => setCategories(res.data))
      .catch(() => setCategories([]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await api.post('/categories', { name });
      setName('');
      fetchCategories();
    } catch (err) {
      setError(
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.error ||
        'Failed to create category'
      );
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="New category name"
          required
        />
        <button type="submit">Add Category</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {categories.map(cat => (
          <li key={cat._id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}