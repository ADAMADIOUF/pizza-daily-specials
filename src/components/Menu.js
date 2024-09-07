import React from 'react'


const Menu = ({ categories, filterItems }) => {


  return (
    <div className='menu'>
      <h1>Our Menu</h1>
      <div className='btn-container'>
        {categories.map((category) => (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Menu
