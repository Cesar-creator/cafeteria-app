import React from 'react'
import { FaCoffee } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const HomeView = () => {
  return (
    <div className="home__container">
      <header>
        <div className="home__header-up">
          <AiOutlineSearch />
          <div className="home__header-logo">
            <FaCoffee />
          </div>
          <div className="home__header-up2">
            <AiOutlineShoppingCart />
            <AiOutlineUser />
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to='/shop'>Products</Link></li>
            <li><a href='#'>Contact</a></li>
            <li><Link to='/Register'>Sign In</Link></li>
            <li><Link to='/Login'>Log In</Link></li>
          </ul>
        </nav>
      </header>
      {/*************Section Info Container ******************/}
      <main>
        <section className="home__section1">
          <div className="home__section1-container">
            <div className="home__section1-container-tittle">
              <h1>Tenemos el mejor Café del Mundo</h1>
            </div>
            <h3>¿Te gustaría probarlo? Ven a probar nuestro delicioso café nacional Colombiano</h3>
            <div className="home__section1-button">
              <button type="submit" className="btn btn-primary" ><FaCoffee /> Pruebalo Ya!</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
