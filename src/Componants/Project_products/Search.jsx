import React, { useRef, useState } from 'react'
import Categorie from './Categorie'

function Search() {
  const [Zone,setZone]=useState("")
  const z1=useRef()
  const handeClick=(e)=>{
        e.preventDefault()
        setZone(z1.current.value)
        
  }
  return (
    <div>
        <form action="">
            <h1>Search:</h1>
      <input type='text'
      className='form-control w-25 m-2'
      ref={z1}
      />
      <input type='submit' onClick={handeClick} value='Search'  className='btn btn-warning mx-2'/>
      
        </form>
      <Categorie zone={Zone}/>
    </div>
  )
}

export default Search
