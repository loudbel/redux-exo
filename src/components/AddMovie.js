import {addFilm} from '../features/films/filmsSlice'
import { useSelector, useDispatch } from "react-redux";



function AddMovie() {
    const film = useSelector((state)=>state.film)
    const dispatch = useDispatch();
    
    const handlerAdd = (e)=>{
      e.preventDefault();
      const inputs = e.target.children;
      
      const newFilm = {
        Title:inputs.Title.value,
        Year:Number(inputs.Year.value),
        Poster:inputs.Poster.value
        }
        console.log(newFilm)
    dispatch(addFilm(newFilm))
    }

  return (
    <>
    {<form onSubmit={(e)=>handlerAdd(e)}>
        <input name="Title" placeholder='Film Title' type="text" ></input>
        <input name="Year" placeholder='Film Year' type="number" ></input>
        <input name="Poster" placeholder='Film Poster' type="link" ></input>
        <input type="submit" value="Add"></input>
        
    </form>}
    </>
   
  )
}

export default AddMovie