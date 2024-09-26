// src/App.jsx
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MovieList from './componentes/MovieList';
import MovieDetails from './componentes/MovieDetails';
import Login from './componentes/Login';
import Header from './componentes/Header';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<MovieList/>} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/login" component={Login} />
        </Routes>      
    </BrowserRouter>
  );
};

export default App;
