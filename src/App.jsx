// src/App.jsx
import React, { useState } from 'react';
import { fetchAdvancedSearch } from './services/githubService';
import Search from './components/Search';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username, location, repos) => {
    setLoading(true);
    setError(null);
    try {
      const usersData = await fetchAdvancedSearch(username, location, repos);
      setUsers(usersData);
    } catch (error) {
      setError('Error fetching users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Advanced GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt="User Avatar" width="100" />
            <h2>{user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
