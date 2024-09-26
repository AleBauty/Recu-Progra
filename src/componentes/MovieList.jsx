// src/components/MovieList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // realiza una solicitud HTTP para obtener el archivo "datos.json" 
    fetch('/trailerflix.json')
      // convierte la respuesta HTTP en un objeto JavaScript
      .then(response => response.json())
      // Una vez que los datos han sido convertidos a JSON, se extrae la lista de ciudades (datos.ciudades) y se almacena en el estado ciudades
      .then(datos => {
        setMovies(datos.movies)
      })
      // si hay un error durante la carga del archivo JSON, se captura  se muestra
      .catch(error => console.error('Error al cargar el JSON:', error))
  }, [])
  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="container">
      {movies.map(movie => (
        <div className="card" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <div className="card-picture">
              <img src={`/posters/${movie.poster}`} alt={movie.titulo} />
            </div>
            <div className="card-bottom">
              <p className="card-bottom-title">{movie.titulo}</p>
              <p>{movie.categoria}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
