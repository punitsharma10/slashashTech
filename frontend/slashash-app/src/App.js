import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://omdbapi.com/?apikey=89dbf159&s=${searchQuery}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container"> {/* Added container class */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-container"> 
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Poster</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>
                  <img src={movie.Poster} alt={movie.Title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
