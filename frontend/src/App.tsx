import { useState, useEffect } from 'react';
import './App.css'
import PostList from './components/PostList';
import Header from './components/Header';

type Post = {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [])

  return (
    <>
      <Header />
      <PostList posts={posts} />
    </>
  )
}

export default App
