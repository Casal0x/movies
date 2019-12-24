import React from 'react'

const HomePage = ({ error }) => {
    return (
        <div className="homepage d_flex d_flex--center">
            {error.error ? 
            <div className="homepage--error">
                {error.error ? error.message : null}. Try Again!
            </div>
            :
            <div className="homepage--welcome-text">
                <p>
                    Welcome to <span className="homepage--page-name">Movies</span>, a portal where you can make you fast searches and get all your information.
                </p>
                <p>
                    This is a Project using the <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" className="homepage--link"> Omdb Api</a>, ReactJs, Scss.
                </p>
            </div>}
        </div>
    )
}

export default HomePage;