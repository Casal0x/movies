import React from 'react'
import {useParams} from 'react-router-dom';

const MovieDetailPage = () => {
    const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default MovieDetailPage;