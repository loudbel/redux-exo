import MovieCard from './MovieCard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {fetchMovies} from '../features/films/filmsSlice'
import {filtred} from '../features/films/searchSlice'
import Filter from './Filter';
import AddMovie from './AddMovie';


function MovieList() {
    const film = useSelector((state)=>state.film)
    const keywords = useSelector((state)=>state.search.keywords)
    const filtredFilms = useSelector((state)=>state.search.filtredFilms)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
        console.log(film);
      }, [])

  return (
    <>
    <AddMovie />
    <Filter />
    {film.loading && <div>Loading...</div>}
    {!film.loading && film.error ? <div>Error : {film.error}</div> : null}
    {!film.loading && !film.error && film.films.Response == "False" ? <div>Error : {film.films.Error}</div> : null}
    {/*console.log(film.films)*/}
    {!film.loading && film.films.Response =="True" ? ( 
        <div className='movies'>
        {film.films.Search.map((movie, key)=>{ 
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