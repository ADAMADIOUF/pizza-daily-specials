import React, { useState } from 'react'

const Pizza = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <div className='pizza-container'>
      {data.map((pizza) => {
        const { name, ingredients, price, soldOut, img, id } = pizza
        return (
          <div className='pizza-details' key={id}>
            <img src={img} alt={name} className='pizza-img' />
            <h1>{price}$</h1>
            <h1>{name}</h1>
            <h2>{ingredients}</h2>
            {soldOut && <p className='sold-out'>Sold Out</p>}
          </div>
        )
      })}
    </div>
  )
}

export default Pizza
