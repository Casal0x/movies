import React, { useState, useEffect } from 'react'
import {useParams, Redirect} from 'react-router-dom';
import Axios from 'axios';

const MovieDetailPage = ({movies}) => {
    const { id  } = useParams();
    const [navigate, setNavigate] = useState(false);
    const [movie, setMovie] = useState([])

    useEffect(() => {
        getMovie(id);
    }, [id]);

    const getMovie = id => {
        Axios.get(`http://www.omdbapi.com/?apikey=bbcc31ad&i=${id}`)
        .then(res => {
            setMovie(res.data);
        })
        
    }

    if(navigate) return <Redirect to="/" />;

    return (
        <div className="container movie-detail" >
            <div className="movie-detail--backlink">
                {movies.length > 0 ? <span onClick={() => setNavigate(true)}> {"< "}Go Back</span> : ""}
            </div>
            <div className="movie-detail--container d_flex d_flex--justify-center">
                <div className="movie-detail--container--poster d_flex d_flex--justify-center">
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "/img/noimg.png"} alt=""/>
                </div>
                <div className="movie-detail--container--specs d_flex">
                    <h2>{movie.Title}</h2>

                    <p className="movie-detail--container--specs--plot">
                        {movie.Plot !== "N/A" ? movie.Plot : ''}
                    </p>

                    <ul>
                        <li>
                            IMDb Rating: <span>{movie.imdbRating}/10.</span>
                        </li>
                        <li>
                            Year: <span>{movie.Year}.</span>
                        </li>
                        <li>
                            Released: <span>{movie.Released}.</span>
                        </li>
                        <li>
                            Duration: <span>{movie.Runtime}.</span>
                        </li>
                        <li>
                            Gender: <span>{movie.Genre}.</span>
                        </li>
                        <li>
                            Language: <span>{movie.Language}.</span>
                        </li>
                        <li>
                            Country: <span>{movie.Country}.</span>
                        </li>
                        <li>
                            Production: <span>{movie.Production}.</span>
                        </li>
                        <li>
                            Actors: <span>{movie.Actors}.</span>
                        </li>
                        <li>
                            Director: <span>{movie.Director}.</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default MovieDetailPage;