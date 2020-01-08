import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ img, title, year, imdbId }) => {
    const noImg = "/img/noimg.png";
    return (
        <div className="card" style={{backgroundImage: `url(${img !== "N/A" ? img : noImg})`}}>
            <div className="card--title">
                <div>{title}</div>
                <div>{year}</div>
            </div>
            <div className="card--see-more">
                <Link to={`/movie/${imdbId}`}>See More</Link>
            </div>
        </div>
    )
}

export default Cards;
