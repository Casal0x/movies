import React from 'react';
import Cards from '../../components/Card/Cards';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const MoviesListPage = ({ movies , page, totalPages, searchInput, setPage, handleSearch}) => {

    const handleChange = page => {
      setPage(Number(page));
      handleSearch(searchInput, page);
    }
  
    return (
        <div className="movie_list">
          <div className="movie_list--results">Result's for <span className="search-input"> {searchInput}</span></div>

          <div className="movie_list--card-container">
            {
              movies.map((movie, i) => {
                return <Cards key={i} title={movie.Title} year={movie.Year} img={movie.Poster} imdbId={movie.imdbID}/>
              })
            }
          </div>
          <Pagination 
            defaultCurrent={page}
            total={totalPages}
            className="d_flex d_flex--center mt-10 mb-20"
            onChange={handleChange}
            showTitle={false}
          />
        </div>
    )
}

export default MoviesListPage;
