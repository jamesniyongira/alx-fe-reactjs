// src/services/githubService.js
import axios from 'axios';

const API_URL = 'https://api.github.com/search/users?q=';

export const fetchAdvancedSearch = async (username, location, repos) => {
  let query = `${username}+in:login`;

  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>=${repos}`;

  try {
    const response = await axios.get(`${API_URL}${query}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
