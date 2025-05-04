import React, { useEffect, useState } from 'react'

function Item(props) {
    const [Products,setProducts]=useState([])
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    },[])
    const Prfilter=props.cat? Products.filter((el)=>el.category===props.cat):
    props.zone? Products.filter((el)=>el.title.includes(props.zone)
    ||el.id.toString().includes(props.zone)
    ||el.description.includes(props.zone)
    ):Products
    
  return (
    <div>
        <div className="container">
<h1>Products:</h1>

      <table class="table">
  <thead>
  <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Title</th>
                <th scope='col'>Price</th>
                <th scope='col'>Description</th>
                <th scope='col'>Categorie</th>
                <th scope='col'>Image</th>
            </tr>
    
  </thead>
  <tbody>
{
    Prfilter.map((el)=>
             <tr>
    <th scope="row">{el.id}</th>
    <td><p>{el.title}</p></td> 
    <td><h6 className='text text-danger'>{el.price}$</h6></td>
    <td><small>{el.description}</small></td>
    <td><h6 className='text text-success'>{el.category}</h6></td>
    <td>
        <img src={el.image} style={{width:'70px',height:'100px'}} alt={el.id}/> </td>
  </tr>
        
   
    )
}


   
  </tbody>
</table>

        </div>
      
     
    </div>
  )
}

export default Item
