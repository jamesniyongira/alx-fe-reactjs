// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(username, location, repos);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub Username"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <input
        type="number"
        value={repos}
        onChange={(e) => setRepos(e.target.value)}
        placeholder="Minimum Repositories"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
