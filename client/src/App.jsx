import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostView from './components/PostView';
import PostForm from './components/PostForm';
import CategoryList from './components/CategoryList';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
        <Route path="/categories" element={<CategoryList />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;