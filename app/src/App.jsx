import React, { useState } from 'react';
import './App.css';
import Input from './components/Button';
import Button from './components/Input';
import MovieCard from './components/MovieCard';

function App() {
  const [movieName, setMovieName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [movies, setMovies] = useState([]);

  const handleAddMovie = () => {
    if (movieName && description && rating && imageUrl) {
      const newMovie = {
        name: movieName,
        description,
        rating,
        imageUrl,
      };
      setMovies([...movies, newMovie]);
      setMovieName('');
      setDescription('');
      setRating('');
      setImageUrl('');
    }
  };

  return (
    <div className="App">
      <h1>Movie Card Website</h1>
      <Input label="Movie Name" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
      <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input label="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <Input label="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <Button onClick={handleAddMovie} label="Add Movie" />
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
