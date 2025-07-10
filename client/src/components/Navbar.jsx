import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Posts</Link> |{' '}
      <Link to="/create">Create Post</Link> |{' '}
      <Link to="/categories">Categories</Link>
    </nav>
  );
}