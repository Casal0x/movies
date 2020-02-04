import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Header = ({ handleSearch, setMovies, setErr, setPage, page }) => {

    const [searchInput, setSearchInput] = useState('');
    const [error, setError] = useState(false);
    let history = useHistory();

    const handleSearchButton = () => {
        setPage(1);
        if(searchInput !== ''){
            handleSearch(searchInput, page);
            setSearchInput('');
            setError(false);
        }else{
            setError(true);
        } 
        history.push("/");
    }

    const handleChange = (e) =>{
        setSearchInput(e.target.value);      
    }

    const handleClick = () => {
        setMovies([]);
        setErr({ error: false, message: '' });
        history.push('/');
    }

    return (
        <div className="header d_flex d_flex--center d_flex--column container">

            <h1 className="header--title" onClick={() => handleClick()}>
                Movies
            </h1>          

            <div className="header--search d_flex d_flex--center">
                <input type="text" name="search" id="search" placeholder="Search a movie by title" onChange={(e) => {handleChange(e)}} value={searchInput} onKeyPress={(e) => {
                    let key = e.which || e.keyCode;
                    if (key === 13) { 
                        handleSearchButton();
                    }
                }}/>
                <button className="submit-btn" onClick={()=> {
                    handleSearchButton();
                } }>
                    <i className="fad fa-search fa-2x"></i>
                </button>
            </div>
            {
                error ? 
                    <div className="header--error error d_flex d_flex--center d_flex--start">
                        <span className="fad fa-times fa-2x"></span>
                        <p>
                            Please fill the search box!
                        </p>
                    </div>
                : null
            }
        </div>
    )
}

export default Header;