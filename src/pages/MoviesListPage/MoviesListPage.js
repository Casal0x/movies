import React from 'react'
import { Card } from '../../components/Card/Card'

const MoviesListPage = ({ movies , page, totalPages, searchInput}) => {
    return (
        <div>
          <div>Result's for {searchInput}</div>
          {totalPages}  

          <Card />
        </div>
    )
}

export default MoviesListPage;
