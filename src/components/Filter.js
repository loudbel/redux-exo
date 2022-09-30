import React from 'react'

function Filter({filter,handlerFilterRating,setSearchInput}) {
  return (
   <>
   <div className='filter'>
    <input className='search' placeholder='search' type='text' onChange={(e) => setSearchInput(e.target.value)}></input>
     <label> Max Rating
    <input type='number'  max='2022' min='1950' value={filter} onChange={handlerFilterRating}></input>
    </label>
    </div>
   </>
  )
}

export default Filter