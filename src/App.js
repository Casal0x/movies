import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/base.scss';

//components
import Header from './components/Header/Header'

//pages
import HomePage from './pages/HomePage/HomePage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import MoviesListPage from './pages/MoviesListPage/MoviesListPage';
import Axios from 'axios';
import Loader from './components/Loader/Loader';


export default function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [error, setError] = useState({error: false, message: ''})


  const handleSearch = (searchInput, page) => {
    setLoading(true);
    Axios.get(`http://www.omdbapi.com/?s=${searchInput}&apikey=bbcc31ad&page=${page}&type=movie`)
    .then(res => {
      if(res.data.Response !== 'False') {
        let data = res.data.Search;

        setMovies(data);
        setError({ error: false, message: '' });
        setTotalPages(Number(res.data.totalResults));
      }
      else {
        setMovies([]);
        setError({ error: true, message: res.data.Error });
        setTotalPages(0);
      }
      
      setSearch(searchInput);
      setLoading(false);
    })
  }

  return (
    <Router>
      <Header handleSearch={handleSearch} setMovies={setMovies} setErr={setError} setPage={setPage} page={page} />
      <Switch>
        <Route exact path="/">
          <div className="container">
          { loading ? <Loader /> : movies.length <= 0 
          ? <HomePage error={error} /> 
          : <MoviesListPage
              movies={movies}
              page={page}
              totalPages={totalPages}
              searchInput={search}
              setPage={setPage}
              handleSearch={handleSearch}
            />
          }
          </div>
        </Route>
        <Route path="/movie/:id" > 
          <MovieDetailPage movies={movies} />
        </Route>
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}
