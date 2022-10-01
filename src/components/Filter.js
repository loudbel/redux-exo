import {filter} from '../features/films/searchSlice'
import { useSelector, useDispatch } from "react-redux";

function Filter() {
  const keywords = useSelector((state)=>state.search.keywords)
  const dispatch = useDispatch();

  
  return (
   <>
   {keywords}
   <div className='filter'>
    <input className='search' placeholder='search' type='text' onChange={(e) => dispatch(filter(e.target.value))}></input>
     <label> Max Rating
    <input type='number'  max='2022' min='1950' ></input>
    </label>
    </div>
   </>
  )
}

export default Filter