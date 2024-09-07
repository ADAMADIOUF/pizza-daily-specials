import React from 'react'
import data from "../data"
const Pizza = () => {
  return (
    <div>
   {data.map((pizza)=>{
    const { name, ingredients, price, photoName, soldOut } = pizza
    return(
     <div>
<h1>
 {name}
</h1>
     </div>
    )
   })}
    
    </div>
  )
}

export default Pizza
