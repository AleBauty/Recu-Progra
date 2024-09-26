// src/components/MovieDetails.jsx
import React, { useState, useEffect } from 'react';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch('/trailerflix.json');
        const data = await response.json();
        const selectedMovie = data.find(m => m.id === parseInt(match.params.id));
        if (selectedMovie) {
          setMovie(selectedMovie);
        } else {
          setError('Película no encontrada.');
        }
      } catch (error) {
        setError('Error al cargar los detalles de la película.');
      }
    };
    fetchMovieDetails();
  }, [match.params.id]);

  if (error) return <p className="error">{error}</p>;
  if (!movie) return <p>Cargando...</p>;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={`/posters/${movie.poster}`} alt={movie.titulo} />
      </div>
      <div className="movie-info">
        <h2>{movie.titulo}</h2>
        <p><strong>Resumen:</strong> {movie.resumen}</p>
        <iframe width="560" height="315" src={movie.trailer} frameBorder="0" allowFullScreen></iframe>
        <p><strong>Reparto:</strong> {movie.reparto}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
