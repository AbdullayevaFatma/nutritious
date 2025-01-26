import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Savor the best nutritious meal here</h2>
        <p>Pick from a diverse menu of dishes made with the premium ingredients</p>
        <button><a href="#explore-menu">View Menu</a></button>
      </div>
    </div>
  )
}

export default Header