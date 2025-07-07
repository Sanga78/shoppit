import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className={'navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3'}></nav>
      <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase" to="/">SHOPPIT</Link>
      </div>
    </div>
  )
}

export default NavBar
