import React from 'react';
import './ReleasedMovies.css';

export const ReleasedMovies = ({movies}) => {
    return (
        <div className='rm-root'>
            <div className='rm-movies'>
                Movies
            </div>
            <div className='rm-filters'>
                Filters
            </div>
        </div>
    );
}

export default ReleasedMovies;