import React, { useState } from 'react'
import Item from './Item'

function Categorie(props) {
 
 const [SelectCat,setSelectCat]=useState()
  const cat=["electronics","jewelery","men's clothing","women's clothing"]
  return (
    <div>
      <div className="container">
        <div className="row g-3 align-items-center">
    
       <div className='btn-group'>{
          cat.map((el)=>

             
              <button onClick={()=>setSelectCat(el)} className='btn btn-primary m-1 my-2'>{el}</button>
             
            
          )
        }
        </div> 

    
      </div>
     <Item cat={SelectCat} zone={props.zone}/>
    </div>
      </div>
      
  )
}

export default Categorie
