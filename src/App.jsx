import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import Profile from './components/Profile';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

// Initialize the QueryClient instance
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);
  const isAuthenticated = false; // Simulate authentication status

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          
          {/* Set up routes for your components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />} />
            <Route path="/posts" element={<PostsComponent />} />
          </Routes>
        </>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
