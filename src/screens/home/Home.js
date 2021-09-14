import React, {useEffect, useState} from 'react';
import './Home.css';
import UpcomingMovies from "../upcomingMovies/UpcomingMovies";
import ReleasedMovies from "../releaseMovies/ReleasedMovies";
import {getMovies} from "../../api/movies";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setMovies(await getMovies({path: 'movies'}));
        }
        getData();
    }, []);

    return (
        <div className='home'>
            <UpcomingMovies movies={movies}/>
            <ReleasedMovies movies={movies}/>
        </div>
    );
}

export default Home;