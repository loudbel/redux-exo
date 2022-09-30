import MovieCard from './MovieCard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchMovies} from '../features/films/filmsSlice'
import {filter} from '../features/films/filmsSlice'

function MovieList() {

    const film = useSelector((state)=>state.film)
    const keywords = useSelector((state)=>state.search.keywords)
    const filtredFilms = useSelector((state)=>state.search.filtredFilms)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
        //dispatch(filter(film))
      }, [dispatch])

  return (
    <>
    {film.loading && <div>Loading...</div>}
    {!film.loading && film.error ? <div>Error : {film.error}</div> : null}
    {!film.loading && film.films.length ? (
        <div className='movies'>
        {film.films.map((movie, key)=>{
        return (
            <MovieCard 
            key= {key} 
            title={movie.Title} 
            year={movie.Year} 
            poster={movie.Poster} 
            />
            )
        })
        }
    
    </div>
    ) : null}
    </>
  )
}

export default MovieList