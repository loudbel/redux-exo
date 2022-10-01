import {filter} from '../features/films/searchSlice'
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from '../features/films/filmsSlice';

function Filter() {
  const keywords = useSelector((state)=>state.search.keywords)
  const dispatch = useDispatch();

  const handleSearch = (e)=>{
    console.log(e.target.value)
    if (e.target.value.length >= 3) 
    dispatch(fetchMovies(e.target.value))
  }
  return (
   <>
   {keywords}
   <div className='filter'>
    <input className='search' placeholder='search' type='text' onChange={handleSearch}></input>
     <label> Max Rating
    <input type='number'  max='2022' min='1950' ></input>
    </label>
    </div>
   </>
  )
}

export default Filter